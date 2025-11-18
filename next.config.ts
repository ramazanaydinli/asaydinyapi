/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Statik HTML çıktısı üretir
  images: {
    unoptimized: true, // GitHub Pages'de resim optimizasyonu sunucusu olmadığı için bu şart
  },
  // Eğer domain almadan önce test edecekseniz repo adını buraya yazmanız gerekir ama
  // direkt domain bağlayacağınız için basePath eklemenize gerek yok.
};

export default nextConfig;