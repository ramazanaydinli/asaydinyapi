import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asaydın Yapı | Ankara Pimapen Tamiri, Fitil Değişimi & Sineklik & Cam Balkon",
  description: "Ankara geneli garantili pimapen tamiri, %100 yalıtımlı özel fitil değişimi, sineklik ve cam balkon sistemleri. 40 yıllık tecrübe. Hemen arayın: 0532 413 06 94",
  keywords: [
    "ankara pimapen tamiri",
    "ankara fitil değişimi",
    "pencere izolasyonu",
    "soğuk alan pencere",
    "asaydın yapı",
    "cam balkon tamiri",
    "sineklik ankara",
    "çankaya pimapen tamiri",
    "yenimahalle pimapen servisi",
    "window repair ankara",
    "double glazing repair ankara",
    "window insulation service",
    "draft proofing windows",
    "upvc window repair",
    "cankaya window service",
    "english speaking window repair ankara"
  ],
  alternates: {
    canonical: "https://www.asaydinyapi.com.tr",
    languages: {
      'tr': 'https://www.asaydinyapi.com.tr',
      'en': 'https://www.asaydinyapi.com.tr/en',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}