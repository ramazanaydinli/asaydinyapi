"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png" // Logo ismini güncelledim
            width={120}
            height={60}
            alt="Asaydın Yapı"
            className="opacity-80 grayscale hover:grayscale-0 transition-all"
          />
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} {t.footer.rights}
          </span>
        </div>

        <div className="flex gap-6 text-sm text-gray-600 font-medium">
          <a href="#" className="hover:text-orange-600 transition-colors">{t.footer.links.home}</a>
          <a href="#hizmetler" className="hover:text-orange-600 transition-colors">{t.footer.links.services}</a>
          <a href="#iletisim" className="hover:text-orange-600 transition-colors">{t.footer.links.contact}</a>
        </div>

      </div>
    </footer>
  );
}