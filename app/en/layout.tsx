import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Asaydın Yapı | Window Repair, Seal Replacement & Insect Screens in Ankara",
    description: "Professional window repair, 100% insulated seal replacement, insect screens and glass balcony systems in Ankara. 40 years of experience. English-speaking service. Call now: +90 532 413 06 94",
    keywords: [
        "window repair ankara",
        "double glazing repair ankara",
        "window insulation service",
        "draft proofing windows",
        "upvc window repair",
        "cankaya window service",
        "english speaking window repair ankara",
        "window seal replacement ankara",
        "glass balcony ankara",
        "insect screens ankara",
        "ankara window maintenance",
    ],
    alternates: {
        canonical: "https://www.asaydinyapi.com.tr/en",
        languages: {
            'en': 'https://www.asaydinyapi.com.tr/en',
            'tr': 'https://www.asaydinyapi.com.tr',
        },
    },
    openGraph: {
        title: "Asaydın Yapı | Professional Window Repair Service in Ankara",
        description: "Expert window repair, seal replacement & insect screens. English-speaking service available. 40 years of experience.",
        url: "https://www.asaydinyapi.com.tr/en",
        locale: "en_US",
        alternateLocale: "tr_TR",
    },
};

export default function EnglishLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
