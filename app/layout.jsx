import "./globals.css";

export const metadata = {
  title: "Aurelia Cleaning Co. | Luxury Cleaning Services in Blackburn",
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
    title: "Aurelia Cleaning Co.",
    description:
      "Luxury cleaning, quietly immaculate. Premium home and commercial cleaning in Blackburn.",
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
