import { Palette, Share2, Package, Sparkles, Printer, FileText, type LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete visual identity systems—logos, typography, and color palettes—designed to define your brand with clarity and position you to be recognized, trusted, and remembered.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description: "Scroll-stopping content paired with cohesive visual direction, engineered to capture attention, sustain engagement, and turn your audience into an active community.",
  },
  {
    icon: Package,
    title: "Product Packaging",
    description: "Packaging that doesn’t sit quietly on shelves, but commands attention—communicating quality instantly and influencing purchase decisions at first glance.",
  },
  {
    icon: Sparkles,
    title: "Event Branding",
    description: "Immersive event identities—from invitations to environmental design—crafted to create experiences people don’t just attend, but remember and talk about.",
  },
  {
    icon: Printer,
    title: "Print Design",
    description: "Print collateral that carries weight—business cards, posters, flyers, and stationery produced with precision, leaving a lasting impression long after the first interaction.",
  },
  {
    icon: FileText,
    title: "Book Design",
    description: "Editorial design for PDFs, books, brochures, and magazines—structured with clarity, elevated with refined typography, and built to communicate with authority.",
  },
];
