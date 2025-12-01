"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Modal from "react-modal";

export default function Services() {
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined' && document.getElementById('__next')) {
       Modal.setAppElement('#__next');
    } else {
       Modal.setAppElement(document.body);
    }
  }, []);

  const services = [
    // 1. KART: ÖZEL FİTİL
    {
      title: t.services.s1.title,
      description: t.services.s1.description,
      isFeatured: true,
      image: "/ozel_fitil.png", 
    },
    // 2. KART: PİMAPEN TAMİRİ
    {
      title: t.services.s2.title,
      description: t.services.s2.description,
      isFeatured: true,
      image: "/pimapen-tamir.jpeg",
    },
    // 3. KART: AHŞAP TAMİRİ
    {
      title: t.services.s3.title,
      description: t.services.s3.description,
      isFeatured: true,
      image: "/ahsap-tamir.jpeg",
    },
    // 4. KART: CAM BALKON FİTİLİ
    {
      title: t.services.s4.title,
      description: t.services.s4.description,
      isFeatured: true, 
      image: "/cam-balkon.jpeg", 
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Modal stilleri
  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 1000 },
    content: {
      top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%',
      transform: 'translate(-50%, -50%)', padding: '0', border: 'none',
      borderRadius: '1rem', overflow: 'hidden', maxWidth: '95vw', maxHeight: '90vh',
      background: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
  };

  return (
    <section id="hizmetler" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Üst Başlık Kısmı */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            {t.services.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-600 text-lg">{t.services.description}</p>
        </div>

        {/* Kartlar Izgarası */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-3xl border transition-all duration-300 flex flex-col items-center text-center group ${
                service.isFeatured
                  ? "border-orange-500 shadow-xl shadow-orange-100/50 hover:shadow-2xl hover:scale-105"
                  : "border-gray-200 hover:shadow-lg hover:border-orange-200"
              }`}
            >
              {service.image && (
                <div
                  className={`relative w-full aspect-square mb-6 overflow-hidden rounded-2xl ${index === 0 ? "cursor-zoom-in" : ""}`}
                  onClick={() => {
                    // Sadece ilk kart (Fitil) tıklandığında modal açılsın
                    if (index === 0) setModalIsOpen(true);
                  }}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} - Ankara Tamir Servisi`} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Sadece 1. Karttaki Etiket */}
                  {service.isFeatured && index === 0 && (
                    <div className="absolute top-2 right-2 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-10">
                      {t.services.s1.tag}
                    </div>
                  )}

                  {/* 1. Kart için Büyüteç İkonu */}
                  {index === 0 && (
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                       </svg>
                    </div>
                  )}
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Alt Bilgilendirme Butonu */}
        <div className="mt-12 flex justify-center w-full">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-6 py-3 rounded-full text-sm font-bold shadow-sm animate-bounce">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {t.services.activeServiceBtn}
          </div>
        </div>

      </div>

      {/* Modal - Sadece Fitil Resmi İçin */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Fitil Detayı"
        shouldCloseOnOverlayClick={true}
      >
        <div className="relative w-full h-full p-1">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute -top-10 right-0 md:-right-10 text-white hover:text-orange-500 transition-colors z-50 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-auto h-auto max-h-[85vh]">
             <Image
                src="/ozel_fitil.png"
                alt="Özel Geniş Fitil - Detay"
                width={1200}
                height={900}
                className="rounded-lg object-contain max-h-[80vh] w-auto"
                priority
             />
          </div>
        </div>
      </Modal>
    </section>
  );
}