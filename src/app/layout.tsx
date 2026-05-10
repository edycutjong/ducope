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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ducope | Dum.fun",
    description: "When your swap fails, we mint a meme token for you.",
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
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
