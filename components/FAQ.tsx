"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext"; // 1. İçe aktar

export default function FAQ() {
  const { t } = useLanguage(); // 2. Çeviriyi çek
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // 3. Sabit 'faqs' dizisini sildik.
  // Aşağıda direkt 't.faq.items' kullanacağız.

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-12">
          {/* Başlık ve Açıklama Çeviriden Geliyor */}
          <h2 className="text-3xl font-black text-[#2D2D2D] mb-4">
            {t.faq.title}
          </h2>
          <p className="text-gray-600">
            {t.faq.desc}
          </p>
        </div>

        <div className="space-y-4">
          {/* t.faq.items üzerinden döngü kuruyoruz */}
          {t.faq.items.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white focus:outline-none group"
              >
                {/* SORU (faq.q) */}
                <span 
                  className={`font-bold text-lg transition-colors duration-300 ${
                    activeIndex === index ? 'text-[#F05A28]' : 'text-[#2D2D2D]'
                  }`}
                >
                  {faq.q}
                </span>

                <svg
                  className={`w-5 h-5 transform transition-all duration-300 ${
                    activeIndex === index 
                      ? "rotate-180 text-[#F05A28]"
                      : "text-gray-400 group-hover:text-[#F05A28]"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* CEVAP (faq.a) */}
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}