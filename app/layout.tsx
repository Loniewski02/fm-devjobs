import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";

const fontKumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "block",
  variable: "--font-kumbh",
});

export const metadata: Metadata = {
  title: "Devjobs",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam modi quibusdam dolor inventore. Tenetur assumenda cumque perferendis eos aspernatur!",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${fontKumbh.variable} min-h-[100dvh] font-kumbh`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
