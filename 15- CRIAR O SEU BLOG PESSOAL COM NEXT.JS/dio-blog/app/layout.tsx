import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Blog Pessoal | Criando Blog Com Next.js",
  description: "Criando o Seu Blog Pessoal Com Next.js - Um guia prático de desenvolvimento web",
  keywords: ["blog", "next.js", "react", "javascript", "desenvolvimento web"],
  authors: [{ name: "Seu Nome" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seu-blog.com",
    title: "Meu Blog Pessoal",
    description: "Criando o Seu Blog Pessoal Com Next.js",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
