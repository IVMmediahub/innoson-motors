import type { Metadata } from "next";
import { Lato, Roboto, Playfair_Display, Inter } from "next/font/google";
import Preloader from "@/components/layout/Preloader";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import "./globals.css";



const googleSans = Playfair_Display({
  variable: "--font-google-sans",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: ["400", "700"],
});



export const metadata: Metadata = {
  title: "Innoson Vehicles | Made in Nigeria",
  description:
    "Innoson Vehicle Manufacturing is Nigeria's leading indigenous vehicle manufacturer, producing quality vehicles built for Africa.",
  openGraph: {
    title: "Innoson Vehicles | Made in Nigeria",
    description:
      "Discover Innoson Vehicle Manufacturing, proudly building vehicles in Nigeria.",
    images: [
      {
        url: "https://raw.githubusercontent.com/IVMmediahub/innoson-motors/d02ecb289905c309ca3f6c0d5428b9e1b1731e69/public/images/logo-header1.png",
        width: 1200,
        height: 630,
        alt: "Innoson Vehicle Manufacturing logo",
      },
    ],
    siteName: "Innoson Vehicles",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innoson Vehicles | Made in Nigeria",
    description:
      "Discover Innoson Vehicle Manufacturing, proudly building vehicles in Nigeria.",
    images: [
      "https://raw.githubusercontent.com/IVMmediahub/innoson-motors/d02ecb289905c309ca3f6c0d5428b9e1b1731e69/public/images/logo-header1.png",
    ],
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // CMS-driven WhatsApp number, with a built-in fallback inside the widget.
  const whatsapp = await getWhatsAppUrl();

  return (
    <html
      lang="en"
      className={` ${googleSans.variable} ${inter.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        {/* <Preloader /> */}
        {children}
        <WhatsAppFloat href={whatsapp} />
      </body>
    </html>
  );
}
