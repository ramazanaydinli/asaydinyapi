"use client"; // Çeviri için bu satır ŞART

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext"; // Çeviri kutusunu çağırdık

export default function Hero() {
  const { t } = useLanguage(); // Dili ve çevirileri al

  // İstatistikleri çeviriden çekiyoruz
  const stats = [
    { label: t.hero.stats.exp, value: t.hero.stats.expValue }, // <--- Burayı düzelttik
    { label: t.hero.stats.guarantee, value: "%100" }, // Bunlar sayı olduğu için kalabilir veya istersen çeviriye ekleyebilirsin
    { label: t.hero.stats.service, value: "7/24" },
  ];

  return (
    // pt-32 ekledik ki Header'ın altında kalmasın
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 text-gray-900">
      {/* Arka Plan Dekoratif Efektler */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* SOL TARAF */}
        <div className="space-y-8 text-center lg:text-left">
          
          {/* Etiket */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold tracking-wide shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-600"></span>
            </span>
            {t.hero.badge}
          </div>

          {/* Başlık - Çeviriye Bağlandı */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1]">
            {t.hero.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              {t.hero.titleLine2}
            </span>
          </h1>

          {/* Açıklama - Çeviriye Bağlandı */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {t.hero.description}
          </p>

          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <a
              href="tel:+905324130694"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 text-white px-8 py-4 font-bold shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:scale-105 transform transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.hero.btnCall}
            </a>
            <a
              href="#hizmetler"
              className="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-8 py-4 font-bold text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              {t.hero.btnServices}
            </a>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
            {stats.map((item, index) => (
              <div key={index} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                <p className="text-sm text-gray-500 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SAĞ TARAF */}
        <div className="relative lg:h-full flex items-center justify-center">
          <div className="absolute inset-4 bg-orange-500/20 blur-2xl rounded-full animate-pulse" />
          
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 w-full max-w-md">
            <div className="flex justify-center mb-6 border-b border-gray-100 pb-6">
              <Image
                src="/logo.png"
                width={200}
                height={100}
                alt="Asaydın Yapı Logo"
                className="object-contain h-auto"
                priority
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full">
                   <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{t.hero.card.item1}</h3>
                  <p className="text-xs text-gray-500">{t.hero.card.sub1}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full">
                   <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{t.hero.card.item2}</h3>
                  <p className="text-xs text-gray-500">{t.hero.card.sub2}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full">
                   <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{t.hero.card.item3}</h3>
                  <p className="text-xs text-gray-500">{t.hero.card.sub3}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-900 rounded-2xl p-4 text-center text-white relative overflow-hidden group cursor-pointer">
               <div className="absolute inset-0 bg-orange-600/10 group-hover:bg-orange-600/20 transition-colors" />
               <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{t.hero.card.emergency}</p>
               <a href="tel:+905324130694" className="block text-2xl font-bold tracking-tight hover:text-orange-500 transition-colors">
                 0532 413 06 94
               </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}