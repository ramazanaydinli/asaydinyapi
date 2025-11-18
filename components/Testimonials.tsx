"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext"; 

export default function Testimonials() {
  const { t } = useLanguage(); // Çeviri verisini al

  // Sabit 'testimonials' dizisini SİLİYORUZ.
  // Bunun yerine 't.testimonials.reviews' kullanacağız.

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BAŞLIK KISMI */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-brand-dark mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-600">
            {t.testimonials.desc}
          </p>
        </div>

        {/* KARTLAR GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              
              {/* ÜST KISIM: YILDIZLAR (Herkes için 5 yıldız varsayılan) */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <svg className="w-8 h-8 text-orange-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>

              {/* YORUM METNİ */}
              <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">
                "{item.comment}"
              </p>

              {/* ALT KISIM: PROFİL */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto"> 
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                  {/* İsmin baş harfini dinamik alıyoruz */}
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}