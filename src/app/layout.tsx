import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Providers } from "@/provider/ChakraProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <title>Cahaya Lead | Technology Partner</title>
        <meta name="description" content="Cahaya Lead is a technology partner providing innovative solutions for businesses." />
        <meta property="og:url" content="https://s2lmjsk7-3000.asse.devtunnels.ms" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cahaya Lead | Technology Partner" />
        <meta property="og:description" content="Cahaya Lead is a technology partner providing innovative solutions for businesses." />
        <meta property="og:image" content="https://example.com/logo.png" /> // Add your logo image URL
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="s2lmjsk7-3000.asse.devtunnels.ms" />
        <meta property="twitter:url" content="https://s2lmjsk7-3000.asse.devtunnels.ms" />
        <meta name="twitter:title" content="Cahaya Lead | Technology Partner" />
        <meta name="twitter:description" content="Cahaya Lead is a technology partner providing innovative solutions for businesses." />
        <meta name="twitter:image" content="https://example.com/logo.png" /> // Add your logo image URL
        <meta name="keywords" content="technology partner, innovative solutions, business solutions" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}