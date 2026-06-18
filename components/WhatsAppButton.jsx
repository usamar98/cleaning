import { MessageCircle } from "lucide-react";

export function WhatsAppButton({ href, phone }) {
  return (
    <a
      href={href}
      aria-label={`Chat on WhatsApp at ${phone}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-[8px] border border-champagne/35 bg-champagne px-4 py-3 text-sm font-semibold text-night shadow-gold transition hover:bg-ivory sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp {phone}</span>
    </a>
  );
}
