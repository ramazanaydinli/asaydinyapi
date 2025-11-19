"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import FadeIn from "@/components/FadeIn";
import Testimonials from "@/components/Testimonials";
import { useLanguage } from "@/context/LanguageContext";

export default function EnglishHome() {
    const { setLanguage } = useLanguage();

    // Sayfa yüklendiğinde dili İngilizce olarak ayarla
    useEffect(() => {
        setLanguage('en');
    }, [setLanguage]);

    return (
        <main className="min-h-screen bg-white relative">

            <Header />

            <Hero />

            <FadeIn>
                <Services />
            </FadeIn>

            <div id="ozellikler">
                <FadeIn delay={0.2}>
                    <Features />
                </FadeIn>
            </div>

            <FadeIn>
                <FAQ />
            </FadeIn>

            <FadeIn>
                <Testimonials />
            </FadeIn>

            <FadeIn>
                <Contact />
            </FadeIn>

            <Footer />
            <FloatingWhatsapp />
        </main>
    );
}
