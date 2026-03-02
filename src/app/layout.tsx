import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ValMia",
  description: "ValMia - Connecting people",
  metadataBase: new URL("https://valmia.ch"),
  openGraph: {
    title: "ValMia",
    description: "ValMia - Connecting people",
    images: [{ url: "/background_2.jpeg", width: 1080, height: 1920 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ValMia",
    description: "ValMia - Connecting people",
    images: ["/background_2.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
