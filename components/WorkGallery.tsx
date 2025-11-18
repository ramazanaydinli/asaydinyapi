"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkGallery() {
  const { t } = useLanguage();

  // Buraya kendi gerçek fotoğraflarını koyacaksın
  // Resimleri public/gallery klasörüne atıp isimlerini buraya yaz
  const works = [
    { 
      before: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80", // Eski fitil fotosu
      after: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=400&q=80",  // Yeni fitil fotosu
      title: "Çankaya - Fitil Değişimi" 
    },
    { 
      before: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=400&q=80", 
      after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80", 
      title: "Batıkent - Cam Balkon" 
    },
    { 
      before: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=400&q=80", 
      after: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80", 
      title: "Keçiören - Pencere Ayarı" 
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-4">{t.gallery.title}</h2>
          <p className="text-gray-600">{t.gallery.desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-2 mb-4 h-64">
                {/* ÖNCESİ */}
                <div className="relative w-1/2 h-full rounded-lg overflow-hidden group">
                  <Image src={work.before} alt="Before" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {t.gallery.labels.before}
                  </div>
                </div>
                
                {/* SONRASI */}
                <div className="relative w-1/2 h-full rounded-lg overflow-hidden group">
                  <Image src={work.after} alt="After" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {t.gallery.labels.after}
                  </div>
                </div>
              </div>
              <h3 className="text-center font-bold text-gray-800 text-sm">{work.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}