import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Load the Nunito font
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreeWalk | Reclaim Your Footpaths",
  description: "A citizen-led, AI-verified evidence engine to track and report civic violations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the friendly font globally to the entire body */}
      <body className={nunito.className}>{children}</body>
    </html>
  );
}