import { MessageCircle } from "lucide-react";
import { contact } from "@/data/site";

export function StickyWhatsApp() {
  return (
    <a
      href={contact.whatsapp}
      aria-label="WhatsApp Luxora Cleaning Services"
      className="focus-ring fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-luxury transition hover:-translate-y-1 hover:bg-[#16633d] sm:h-auto sm:w-auto sm:gap-3 sm:rounded-[6px] sm:px-5 sm:py-4"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp Us</span>
    </a>
  );
}
