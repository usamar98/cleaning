import "./globals.css";

export const metadata = {
  title: "Aurelia Cleaning Co. | Luxury Cleaning Services in London",
  description:
    "Premium residential, commercial, Airbnb, deep cleaning, and specialist cleaning services for London homes and businesses.",
  keywords: [
    "luxury cleaning London",
    "premium home cleaning",
    "office cleaning London",
    "Airbnb cleaning London",
    "deep cleaning services"
  ],
  openGraph: {
    title: "Aurelia Cleaning Co.",
    description:
      "Luxury cleaning, quietly immaculate. Premium home and commercial cleaning in London.",
    type: "website",
    locale: "en_GB"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
