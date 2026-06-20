export function BrandLogo({ className = "size-11", title = "BlackBurn Cleaning Services logo" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="58" height="58" rx="8" fill="#ffffff" />
      <rect x="5.5" y="5.5" width="53" height="53" rx="6" fill="none" stroke="#15803d" strokeWidth="1.6" />
      <path
        d="M18 14.5v35M18 15h11.2c5.7 0 9.4 3.1 9.4 7.8 0 3.4-1.9 5.9-5.1 7.1 4.2 1 6.8 4.2 6.8 8.4 0 5.7-4.5 9.2-11.2 9.2H18M18 30h10.5c5.3 0 8.8-2.7 8.8-7.2M18 47.5h11.1c6.5 0 10.4-3.4 10.4-9.2"
        fill="none"
        stroke="#102016"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M30 14.5v35M30 15h10.4c5.4 0 8.8 3 8.8 7.5 0 3.1-1.7 5.4-4.6 6.7 3.7 1.1 6 4 6 7.9 0 5.5-4.1 8.9-10.3 8.9H30M30 29.8h9.6c4.9 0 8.1-2.6 8.1-7M30 47.3h10.2c5.9 0 9.4-3.2 9.4-8.4"
        fill="none"
        stroke="#15803d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
      <path d="M13 12.5h5.5M45.5 51.5H51" stroke="#15803d" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}
