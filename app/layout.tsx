import type { Metadata } from "next";
import { Fustat } from "next/font/google"
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Ruan Portfolio",
  description: "Personal portfolio of Ruan Radyn",
  icons: {
    icon: "/favicon.svg",
  },
};

const fustat = Fustat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fustat.className} geometric-fustat bg-grey-100 3xl:mx-60 4xl:mx-96 pb-2 md:pb-0`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}