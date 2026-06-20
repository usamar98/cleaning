import "./globals.css";

export const metadata = {
  title: "BlackBurn Cleaning Services | Luxury Cleaning Services in Blackburn",
  description:
    "Premium residential, commercial, Airbnb, deep cleaning, and specialist cleaning services for Blackburn homes and businesses.",
  keywords: [
    "luxury cleaning Blackburn",
    "premium home cleaning",
    "office cleaning Blackburn",
    "Airbnb cleaning Blackburn",
    "deep cleaning services"
  ],
  openGraph: {
    title: "BlackBurn Cleaning Services",
    description:
      "Luxury cleaning, quietly immaculate. Premium home and commercial cleaning in Blackburn.",
    type: "website",
    locale: "en_GB"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
