"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsapp() {
  const { t } = useLanguage();

  // Mesajı URL uyumlu hale getir (boşlukları %20 yapar)
  const encodedMessage = encodeURIComponent(t.contact.whatsappPre);

  return (
    <a
      href={`https://wa.me/905324130694?text=${encodedMessage}`} // Dinamik mesaj
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
      aria-label="WhatsApp"
    >
      {/* WhatsApp LOGO RESMİNİ KULLANIYORUZ */}
      <Image
        src="/whatsapp-logo.png" // public klasöründeki resmin yolu
        alt="WhatsApp Logo"
        width={32}
        height={32}
        className="flex-shrink-0"
      />
      
      {/* Hover Yazısı */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm md:text-base">
        {t.contact.whatsapp}
      </span>
    </a>
  );
}