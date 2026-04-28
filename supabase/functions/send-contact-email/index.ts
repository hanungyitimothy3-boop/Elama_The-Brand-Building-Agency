import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Minimal SMTP client using raw Deno TCP/TLS — works in edge runtime
async function sendSmtp(opts: {
  host: string;
  port: number;
  username: string;
  password: string;
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  const { host, port, username, password, from, to, subject, text, html } = opts;
  const useImplicitTls = port === 465;

  let conn: Deno.Conn = useImplicitTls
    ? await Deno.connectTls({ hostname: host, port })
    : await Deno.connect({ hostname: host, port });

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const buf = new Uint8Array(4096);

  const read = async (): Promise<string> => {
    const n = await conn.read(buf);
    if (!n) throw new Error("SMTP: connection closed");
    return decoder.decode(buf.subarray(0, n));
  };

  const expect = async (code: string, label: string) => {
    const resp = await read();
    if (!resp.startsWith(code)) {
      throw new Error(`SMTP ${label} failed: ${resp.trim()}`);
    }
    return resp;
  };

  const write = async (line: string) => {
    await conn.write(encoder.encode(line + "\r\n"));
  };

  try {
    await expect("220", "greeting");
    await write(`EHLO localhost`);
    await expect("250", "EHLO");

    if (!useImplicitTls) {
      // STARTTLS upgrade for port 587/25
      await write("STARTTLS");
      await expect("220", "STARTTLS");
      conn = await Deno.startTls(conn as Deno.TcpConn, { hostname: host });
      await write(`EHLO localhost`);
      await expect("250", "EHLO after TLS");
    }

    await write("AUTH LOGIN");
    await expect("334", "AUTH LOGIN");
    await write(btoa(username));
    await expect("334", "username");
    await write(btoa(password));
    await expect("235", "password");

    await write(`MAIL FROM:<${from}>`);
    await expect("250", "MAIL FROM");
    await write(`RCPT TO:<${to}>`);
    await expect("250", "RCPT TO");
    await write("DATA");
    await expect("354", "DATA");

    const boundary = `bnd_${crypto.randomUUID()}`;
    const message = [
      `From: ${from}`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/plain; charset=utf-8`,
      ``,
      text,
      `--${boundary}`,
      `Content-Type: text/html; charset=utf-8`,
      ``,
      html,
      `--${boundary}--`,
      `.`,
    ].join("\r\n");

    await write(message);
    await expect("250", "message body");
    await write("QUIT");
  } finally {
    try { conn.close(); } catch { /* ignore */ }
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = Deno.env.get("SMTP_PORT");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPass = Deno.env.get("SMTP_PASS");
    const notificationEmail = Deno.env.get("NOTIFICATION_EMAIL");

    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Missing Supabase env vars");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({ name, email, service, message });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!smtpHost || !smtpUser || !smtpPass || !notificationEmail) {
      console.warn("SMTP not configured, skipping email. Submission saved.");
      return new Response(
        JSON.stringify({ success: true, email_sent: false }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    try {
      await sendSmtp({
        host: smtpHost,
        port: parseInt(smtpPort || "587"),
        username: smtpUser,
        password: smtpPass,
        from: smtpUser,
        to: notificationEmail,
        subject: `New Contact: ${name} — ${service}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
        html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Service:</strong> ${service}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
      });
    } catch (emailErr) {
      console.error("Email send failed:", emailErr);
      return new Response(
        JSON.stringify({ success: true, email_sent: false, email_error: String(emailErr) }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, email_sent: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
