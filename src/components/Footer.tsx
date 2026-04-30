import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/elama.official/",
    icon: Instagram,
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586258460442",
    icon: Facebook,
    external: true,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/Elama_Official",
    icon: XIcon,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:elamathebrandbuildingagency@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2349161110274",
    icon: Phone,
    external: true,
  },
];

function XIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16 md:mt-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-10 md:py-12 flex flex-col items-center gap-6">
        <nav aria-label="Contact and social links">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-8">
            {socials.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          © 2026 Elämä — Crafted with intention
        </p>
      </div>
    </footer>
  );
};

export default Footer;
