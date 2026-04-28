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
    description: "Complete visual identity systems—logos, typography, color palettes—that define who you are and resonate with your audience.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description: "Scroll-stopping content and cohesive feed aesthetics that grow engagement and build community around your brand.",
  },
  {
    icon: Package,
    title: "Product Packaging",
    description: "Shelf-ready packaging design that communicates quality, drives purchase decisions, and elevates your product experience.",
  },
  {
    icon: Sparkles,
    title: "Event Branding",
    description: "Immersive event identities—from invites to signage—that create memorable experiences and amplify your brand presence.",
  },
  {
    icon: Printer,
    title: "Print Design",
    description: "Tangible print collateral—business cards, posters, flyers, stationery—crafted with precision for lasting brand impact.",
  },
  {
    icon: FileText,
    title: "Document Design",
    description: "Beautifully structured PDFs, books, brochures, and magazines with refined typography and editorial polish.",
  },
];
