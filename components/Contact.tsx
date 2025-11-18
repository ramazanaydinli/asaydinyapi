"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [activeBranch, setActiveBranch] = useState(0);

  // DÜZELTİLDİ: Buraya <iframe..> kodunun tamamını değil, sadece "src" içindeki linki koyuyoruz.
  const maps = [
    // 1. Dükkanın Linki (Tırnakların içi temizlendi)
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.454785560474!2d32.85875089999999!3d39.86404979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34560261dfb87%3A0x6d9b39e3e88b6158!2sKap%C4%B1%20Pencere%20Tamiri%20Fitil%20Sineklik%20Cam%20Balkon%20Du%C5%9Fakabin!5e0!3m2!1str!2str!4v1763383014869!5m2!1str!2str",
    
    // 2. Dükkanın Linki
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.6658962061924!2d32.9067289!3d39.90411199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d35108adcbcbad%3A0x958c017e3f23e516!2sAslan%20Ticaret!5e0!3m2!1str!2str!4v1763383070806!5m2!1str!2str"
  ];

  return (
    <section id="iletisim" className="bg-gray-900 text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -ml-10 -mb-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* SOL TARAF: İletişim Bilgileri */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                {t.contact.titleLine1} <br />
                <span className="text-orange-500">{t.contact.titleLine2}</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t.contact.desc}
              </p>
            </div>

            <div className="space-y-4">
              <a href="tel:+905324130694" className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-orange-500 hover:bg-gray-800 transition-all group">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t.contact.emergency}</p>
                  <p className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    0532 413 06 94
                  </p>
                </div>
              </a>

              <a href="https://wa.me/905324130694" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-green-500 hover:bg-gray-800 transition-all group">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-600/30 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t.contact.whatsapp}</p>
                  <p className="text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {t.contact.sendMessage}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* SAĞ TARAF: Şube Seçimi ve Harita */}
          <div className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700 h-full flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              {/* ... svg ... */}
              {t.contact.regionsTitle}
            </h3>
            
            {/* ŞUBE SEÇİM TABLARI */}
            <div className="flex p-1 bg-gray-700/50 rounded-xl mb-4">
               <button 
                 onClick={() => setActiveBranch(0)}
                 className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeBranch === 0 ? 'bg-orange-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
               >
                 {/* ESKİSİ: 1. Şube */}
                 {/* YENİSİ: */}
                 {t.contact.branchBtn1}
               </button>
               <button 
                 onClick={() => setActiveBranch(1)}
                 className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeBranch === 1 ? 'bg-orange-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
               >
                 {/* ESKİSİ: 2. Şube */}
                 {/* YENİSİ: */}
                 {t.contact.branchBtn2}
               </button>
            </div>
            {/* Şube Adres Bilgisi */}
            <div className="mb-4 min-h-[3rem]">
               <p className="text-white font-semibold flex items-center gap-2">
                 {activeBranch === 0 ? t.contact.branch1Title : t.contact.branch2Title}
               </p>
               <p className="text-gray-400 text-sm mt-1">
                 {activeBranch === 0 ? t.contact.branch1Address : t.contact.branch2Address}
               </p>
            </div>

            {/* HARİTA IFRAME */}
            <div className="flex-grow w-full h-64 bg-gray-700 rounded-xl relative overflow-hidden border border-gray-600">
               <iframe 
                 key={activeBranch} 
                 src={maps[activeBranch]} 
                 className="absolute inset-0 w-full h-full"
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Google Map"
               ></iframe>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              {t.contact.note}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}