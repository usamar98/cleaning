import "./globals.css";

export const metadata = {
  title: "Luxora Cleaning Services | Luxury Cleaning for Homes & Businesses",
  description:
    "Premium residential, Airbnb, office, deep cleaning, move-in/move-out, and commercial cleaning services with luxury-grade standards.",
  keywords: [
    "luxury cleaning services",
    "deep cleaning",
    "Airbnb cleaning",
    "office cleaning",
    "move-in cleaning",
    "move-out cleaning",
    "commercial cleaning",
  ],
  openGraph: {
    title: "Luxora Cleaning Services",
    description:
      "Luxury cleaning services for homes, apartments, villas, offices, Airbnb properties, and commercial spaces.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
