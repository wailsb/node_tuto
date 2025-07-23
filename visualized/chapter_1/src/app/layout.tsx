import type { Metadata } from "next";
// using poppins font
import { Poppins } from "next/font/google";
import './globals.css';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Node course ch1",
  description: "nodejs tutorial chapter 1 by wail saribey",
  icons:"/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
