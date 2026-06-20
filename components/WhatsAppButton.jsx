export function WhatsAppButton({ href, phone }) {
  return (
    <a
      href={href}
      aria-label={`Chat on WhatsApp at ${phone}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-[8px] border border-champagne/35 bg-champagne px-4 py-3 text-sm font-semibold text-night shadow-gold transition hover:bg-ivory sm:bottom-7 sm:right-7"
    >
      <WhatsAppMark className="size-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

export function WhatsAppMark({ className = "size-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.05 4.93A9.83 9.83 0 0 0 3.78 16.74L2.5 21.5l4.88-1.24A9.81 9.81 0 0 0 21.5 11.8a9.74 9.74 0 0 0-2.45-6.87Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8.4 8.18c.22-.48.45-.49.66-.49h.54c.18 0 .43.06.65.49l.78 1.88c.11.28.07.51-.1.72l-.55.66c.72 1.45 1.76 2.49 3.2 3.17l.67-.54c.22-.17.45-.21.72-.1l1.84.78c.43.19.5.43.5.66v.47c0 .42-.24.78-.62 1.02-.57.36-1.18.53-1.86.42-3.4-.54-6.34-3.43-6.91-6.85-.12-.69.05-1.35.48-2.29Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
