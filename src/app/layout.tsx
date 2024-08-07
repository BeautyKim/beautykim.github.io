import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Footer, Header } from "@/components/layout";
import SysButton from "@/components/button/SysButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Beauty Kim Blog',
  description: '한 번에 하나씩 기록합니다',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
      <SysButton />
      <Footer/>
        </body>
    </html>
  );
}
