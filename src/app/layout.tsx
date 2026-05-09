import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ducope.edycu.dev"),
  title: "Ducope | Dum.fun",
  description: "When your swap fails, we mint a meme token for you.",
  openGraph: {
    title: "Ducope | Dum.fun",
    description: "When your swap fails, we mint a meme token for you.",
    url: "https://ducope.edycu.dev",
    siteName: "Ducope",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ducope App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ducope | Dum.fun",
    description: "When your swap fails, we mint a meme token for you.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">{children}</body>
    </html>
  );
}
