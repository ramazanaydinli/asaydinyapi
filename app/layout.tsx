import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // GÜNCELLEME 1: Başlığı değiştirdik. "Pimapen Tamiri" en başa geldi.
  // Google arama sonucunda mavi başlık artık tam aranan kelimeyle başlıyor.
  title: "Ankara Pimapen Tamiri ve Fitil Değişimi | %100 Yalıtım | Asaydın Yapı",
  
  // GÜNCELLEME 2: Açıklamanın başına en önemli anahtar kelimeleri koyduk.
  description: "Ankara Pimapen Tamiri ve Fitil Değişimi Servisi. Pencerelerden gelen soğuğu ve sesi %100 kesiyoruz. Garantili bakım onarım ve kış ayarı. Hemen Arayın.",
  
  keywords: [
    "ankara pimapen tamiri",
    "ankara fitil değişimi",
    "pimapen tamiri", // Bunu ekledik
    "pencere izolasyonu",
    "soğuk alan pencere",
    "asaydın yapı",
    "cam balkon fitil değişimi", // "tamiri" yerine fitil değişimi daha spesifik
    "sineklik ankara",
    "çankaya pimapen tamiri",
    "yenimahalle pimapen servisi",
    "gölbaşı pimapen tamiri", // Gölbaşı hedefliyorduk, ekledik
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
  // GÜNCELLEME 3: Telefon numaralarının otomatik link olmasını sağlar (Mobil uyumluluk için)
  formatDetection: {
    telephone: true,
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
        {/* Google Tag Manager / Ads Dönüşüm Etiketi */}
        {/* Not: Bu kod tüm sayfalarda çalışır ve remarketing için ziyaretçiyi kaydeder. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17743247848"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17743247848');
          `}
        </Script>

        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}