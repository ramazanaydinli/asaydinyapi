"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "react-modal";
// translations importunu kaldırıyoruz çünkü context'ten gelecek
import { useLanguage } from "@/context/LanguageContext"; 

export default function Features() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // --- DÜZELTME BAŞLANGIÇ ---
  // Prop yerine Context kullanıyoruz
  const { t: rootT } = useLanguage(); 
  
  // "features" kısmını alıyoruz
  const t = rootT.features; 
  const c = t.comparison;
  // --- DÜZELTME BİTİŞ ---

  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1000 },
    content: {
      top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%',
      transform: 'translate(-50%, -50%)', padding: '0', border: 'none',
      background: 'transparent', overflow: 'visible',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && document.getElementById('__next')) {
      Modal.setAppElement('#__next');
    } else {
      Modal.setAppElement(document.body);
    }
  }, []);

  const openModal = (imagePath: string) => {
    setSelectedImage(imagePath);
    setModalIsOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* SOL TARAFA: KARŞILAŞTIRMA KARTI */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
              
              {/* KART BAŞLIĞI */}
              <div className="bg-[#0F172A] py-4 text-center">
                <h3 className="text-white font-bold tracking-wider text-sm uppercase">
                  {c.title} 
                </h3>
              </div>

              {/* KART İÇERİĞİ */}
              <div className="grid grid-cols-2 divide-x divide-gray-200 flex-1">
                
                {/* SOL: STANDART FİTİL */}
                <div className="p-6 pb-10 flex flex-col items-center text-center bg-gray-50/30">
                  <div className="flex flex-col items-center w-full">
                      <div 
                        className="w-24 h-24 relative mb-4 cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => openModal('/standart-fitil.png')}
                      >
                        <Image 
                          src="/standart-fitil.png"
                          alt={c.badTitle}
                          fill
                          className="object-contain"
                        />
                        <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                            <span className="text-gray-600 text-xs">🔍</span>
                        </div>
                      </div>

                      <div className="h-24 w-full flex flex-col items-center justify-end mb-6">
                        <h4 className="font-bold text-gray-600 mb-1 text-lg">{c.badTitle}</h4>
                        <p className="text-xs text-gray-400">{c.badDesc}</p>
                      </div>
                  </div>
                  
                  <ul className="w-full pl-2">
                    {c.badList.map((item, index) => (
                        <li key={index} className={`h-10 flex items-center gap-3 ${index !== c.badList.length - 1 ? 'border-b border-transparent' : ''}`}>
                            <div className="w-6 flex justify-center"><span className="font-bold text-red-600 text-xl">✕</span></div>
                            <span className="text-sm text-gray-500">{item}</span>
                        </li>
                    ))}
                  </ul>
                </div>

                {/* SAĞ: ÖZEL FİTİL */}
                <div className="p-6 pb-10 flex flex-col items-center text-center bg-white relative">
                  <div className="absolute top-3 right-3 bg-[#F05A28] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm z-10">
                    {c.goodLabel}
                  </div>

                  <div className="flex flex-col items-center w-full">
                      <div 
                        className="w-24 h-24 relative mb-4 cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => openModal('/ozel_fitil.png')}
                      >
                        <Image 
                          src="/ozel_fitil.png"
                          alt={c.goodTitle}
                          fill
                          className="object-contain"
                        />
                        <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                            <span className="text-gray-600 text-xs">🔍</span>
                        </div>
                      </div>

                      <div className="h-24 w-full flex flex-col items-center justify-end mb-6">
                        <h4 className="font-bold text-[#F05A28] mb-1 text-lg leading-tight px-2">{c.goodTitle}</h4>
                        <p className="text-xs text-orange-400 mt-1">{c.goodDesc}</p>
                      </div>
                  </div>

                  <ul className="w-full pl-2">
                    {c.goodList.map((item, index) => (
                        <li key={index} className={`h-10 flex items-center gap-3 ${index !== c.goodList.length - 1 ? 'border-b border-transparent' : ''}`}>
                            <div className="w-6 flex justify-center">
                                <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span>
                            </div>
                            <span className="text-sm text-gray-700 font-medium">{item}</span>
                        </li>
                    ))}
                  </ul>
                </div>

              </div>
          </div>

          {/* SAĞ TARAF: AÇIKLAMA YAZILARI */}
          <div className="pt-4">
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wide">
              {t.badge}
            </span>
            
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              {t.titlePart1} <span className="text-[#F05A28]">{t.titlePart2}</span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              {t.desc1}
            </p>
            
            <p className="text-gray-600 mb-8">
              <strong className="text-gray-900">{c.goodTitle}:</strong> {t.desc2}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mt-8">
              <div className="border-l-4 border-[#F05A28] pl-4">
                <h4 className="font-bold text-gray-900 text-lg mb-1">{t.box1Title}</h4>
                <p className="text-sm text-gray-600">{t.box1Desc}</p>
              </div>
              <div className="border-l-4 border-gray-800 pl-4">
                <h4 className="font-bold text-gray-900 text-lg mb-1">{t.box2Title}</h4>
                <p className="text-sm text-gray-600">{t.box2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESİM BÜYÜTME MODALI */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Fitil Detay"
      >
        <div className="relative outline-none p-4">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute -top-10 right-0 text-white hover:text-orange-500 transition-colors z-50 bg-black/50 rounded-full p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {selectedImage && (
             <Image
             src={selectedImage}
             alt="Detay"
             width={800}
             height={600}
             className="rounded-lg max-w-[90vw] max-h-[85vh] object-contain bg-white shadow-2xl"
           />
          )}
        </div>
      </Modal>
    </section>
  );
}