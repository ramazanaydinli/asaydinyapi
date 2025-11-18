"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  // Context'ten dil verilerini çekiyoruz
  const { language, setLanguage, t } = useLanguage();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll dinleyicisi
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü linklerini çeviri dosyasından (t) alıyoruz
  const navLinks = [
    { name: t.header.home, href: "#" },
    { name: t.header.services, href: "#hizmetler" },
    { name: t.header.whyUs, href: "#ozellikler" },
    { name: t.header.contact, href: "#iletisim" },
  ];

  return (
    <header
    className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO ALANI */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className="relative w-32 h-12 md:w-40 md:h-14">
             <Image
               src="/logo.png" // Dosya isminin projedeki ile aynı olduğundan emin ol
               alt="Asaydın Yapı Logo"
               fill
               className="object-contain"
               priority
             />
           </div>
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* SAĞ TARAF: DİL SEÇİMİ & BUTON (MASAÜSTÜ) */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Dil Seçimi Butonları */}
          <div className="flex items-center gap-2 text-sm font-bold border-r border-gray-300 pr-4">
            <button 
              onClick={() => setLanguage('tr')}
              className={`${language === 'tr' ? 'text-orange-600' : 'text-gray-400'} hover:text-orange-600 transition-colors`}
            >
              TR
            </button>
            <span className="text-gray-300">|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`${language === 'en' ? 'text-orange-600' : 'text-gray-400'} hover:text-orange-600 transition-colors`}
            >
              EN
            </button>
          </div>

          <a
            href="tel:+905324130694"
            className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
          >
            {t.header.callBtn || "Hemen Ara"}
          </a>
        </div>

        {/* MOBİL MENÜ BUTONU (Hamburger) */}
        <button
          className="md:hidden text-gray-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>
      </div>

      {/* MOBİL MENÜ AÇILIR KUTU */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden flex flex-col p-6 gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobil Dil Seçimi */}
          <div className="flex items-center gap-4 pt-2 justify-center">
             <button 
               onClick={() => setLanguage('tr')}
               className={`font-bold text-lg ${language === 'tr' ? 'text-orange-600' : 'text-gray-400'}`}
             >
               TR
             </button>
             <span className="text-gray-300">|</span>
             <button 
               onClick={() => setLanguage('en')}
               className={`font-bold text-lg ${language === 'en' ? 'text-orange-600' : 'text-gray-400'}`}
             >
               EN
             </button>
          </div>

          <a href="tel:+905324130694" className="bg-orange-600 text-white text-center py-3 rounded-xl font-bold mt-2">
            {t.header.callBtn || "Hemen Ara"}
          </a>
        </div>
      )}
    </header>
  );
}