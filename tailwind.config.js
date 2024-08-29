/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/barelang.jpg')",
      },
      colors: {
        'cream-brown-light': '#f5f5dc', // Ganti dengan kode warna cream coklat muda yang Anda inginkan
      },
    },
  },
  plugins: [],
}