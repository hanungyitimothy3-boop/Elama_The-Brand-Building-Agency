import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const service = (formData.get("service") as string).trim();
    const message = (formData.get("message") as string).trim();

    if (!name || !email || !service || !message) {
      toast.error("Please fill in all fields.");
      setSending(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name, email, service, message },
      });

      if (error) throw error;

      toast.success("Message sent! We'll be in touch soon.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">Contact</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Let's Work Together</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Ready to elevate your brand? Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                maxLength={100}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                maxLength={255}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2">Service</label>
            <select
              name="service"
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            >
              <option value="">Select a service</option>
              <option>Brand Identity</option>
              <option>Social Media Design</option>
              <option>Product Packaging</option>
              <option>Full Brand Package</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={1000}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 glow-accent-sm disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Message"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
