import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // RENKLERİ BURAYA EKLİYORUZ
      colors: {
        'brand-orange': '#F05A28', // Logodaki Turuncu
        'brand-dark': '#2D2D2D',   // Logodaki Koyu Gri (Antrasit)
        'brand-light': '#F9F9F9',  // Açık Gri (Zeminler için opsiyonel)
      },
      // (Varsa diğer ayarlar burada kalabilir)
    },
  },
  plugins: [],
};
export default config;