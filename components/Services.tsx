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
    // 1. KART: ÖZEL FİTİL (Featured: TRUE, Etiketli)
    {
      title: t.services.s1.title,
      description: t.services.s1.description,
      isFeatured: true,
      image: "/ozel_fitil.png", 
    },
    // 2. KART: PİMAPEN TAMİRİ (Featured: TRUE)
    {
      title: t.services.s2.title,
      description: t.services.s2.description,
      isFeatured: true,
      image: "/pimapen-tamir.jpeg",
    },
    // 3. KART: AHŞAP TAMİRİ (Featured: TRUE)
    {
      title: t.services.s3.title,
      description: t.services.s3.description,
      isFeatured: true,
      image: "/ahsap-tamir.jpeg",
    },
    // 4. KART: SİNEKLİK & CAM BALKON (Featured: TRUE -> ARTIK BU DA PARLAK)
    {
      title: t.services.s4.title,
      description: t.services.s4.description,
      isFeatured: true, // Parlama efekti için TRUE yapıldı
      image: "/cam-balkon.jpeg", // Yeni yüklenen görsel
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1000 },
    content: {
      top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%',
      transform: 'translate(-50%, -50%)', padding: '16px', border: 'none',
      borderRadius: '1rem', overflow: 'visible', maxWidth: '95%', maxHeight: '95%',
      width: 'auto', height: 'auto', background: 'transparent',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
  };

  return (
    <section id="hizmetler" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {t.services.tag}
          </span>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-600">{t.services.description}</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className={`bg-white p-8 rounded-3xl border transition-all duration-300 flex flex-col items-center text-center ${
        service.isFeatured
          ? "border-orange-500 shadow-xl shadow-orange-100 scale-105"
          : "border-gray-200 hover:shadow-lg hover:border-gray-300"
      }`}
    >
      {/* HATA VEREN KISIM DÜZELTİLDİ: Artık sadece resim varsa gösteriyoruz, 'else' kısmı silindi */}
      {service.image && (
        <div
          className={`relative w-32 h-32 mb-6 -mt-2 group ${index === 0 ? "cursor-pointer" : ""}`}
          onClick={() => {
            // Sadece ilk kart (Fitil) tıklandığında modal açılsın
            if (index === 0) setModalIsOpen(true);
          }}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={800}
            height={600}
            className="rounded-lg w-full h-full object-cover shadow-sm"
          />
          
          {/* Etiket (Tag) sadece 1. kartta (index 0) görünsün */}
          {service.isFeatured && index === 0 && (
            <>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap z-10">
                {t.services.s1.tag}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </>
          )}
        </div>
      )}

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

       {/* Güncellenmiş, Ortalanmış Kod */}
<div className="mt-12 flex justify-center w-full">
  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-6 py-3 rounded-full text-sm font-medium animate-pulse">
    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    {t.services.activeServiceBtn}
  </div>
</div>
      </div>

      {/* Modal sadece Fitil resmi için çalışır */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Fitil Detayı"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/ozel_fitil.png"
            alt="Büyük Fitil Fotoğrafı"
            width={800}
            height={600}
            style={{ objectFit: "contain", maxHeight: "85vh", maxWidth: "90vw" }}
            className="rounded-lg"
          />
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-50 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </Modal>
    </section>
  );
}