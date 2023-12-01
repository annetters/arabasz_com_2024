import type { Metadata } from "next";
import Nav from "./components/nav";
// import { Inter } from 'next/font/google'
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Annette Arabasz | Front End Developer",
  description: "The portfolio site of Annette Arabasz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-black antialiased dark:bg-slate-950 dark:text-white">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <Nav />
          <main className="bg-white dark:bg-slate-900">{children}</main>
        </section>
      </body>
    </html>
  );
}
