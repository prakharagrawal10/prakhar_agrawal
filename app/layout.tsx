
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prakhar Agrawal | Portfolio",
  description: "Portfolio of Prakhar Agrawal - Full-Stack Developer & AI/ML Enthusiast",
  openGraph: {
    title: "Prakhar Agrawal | Portfolio",
    description: "Portfolio of Prakhar Agrawal - Full-Stack Developer & AI/ML Enthusiast",
    url: "https://prakhar.dev",
    siteName: "Prakhar Agrawal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prakhar Agrawal Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background text-foreground transition-colors duration-300"}>
        {/* Navbar will go here */}
        {children}
        {/* Footer will go here */}
      </body>
    </html>
  );
}
