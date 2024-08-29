import React from 'react';
import infoicon from '/src/assets/icons/information-svgrepo-com.svg';
import callicon from '/src/assets/icons/call-communication-help-svgrepo-com.svg';
import bookicon from '/src/assets/icons/book-svgrepo-com.svg';
import instansiicon from '/src/assets/icons/residential-area-svgrepo-com.svg';
import moneyicon from '/src/assets/icons/bag-cash-currency-svgrepo-com.svg';
import laporicon from '/src/assets/icons/ads-advertising-color-svgrepo-com.svg';

export default function Home() {
  return (
    <div>
      {/* Top Section */}
      <div
        className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center bg-hero-pattern"
      >
        <div className="p-8 rounded-lg  text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-blue-800 mb-8">
            Berpancang Amanah Bersauh Marwah
          </h1>
          <p className="text-xl text-white mb-8">
            Selamat Datang di Portal Website Provinsi Kepulauan Riau
          </p>
 {/* Search Bar */}
<div className="flex justify-center items-center mb-8">
  <div className="relative w-full max-w-md flex transform transition duration-300 ease-in-out hover:scale-105">
    <input
      type="text"
      placeholder="Apa yang Awak Cari?"
      className="px-4 py-2 w-full rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <div className="relative">
      <select className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-full appearance-none pr-8">
        <option>Dalam Berita</option>
        <option>Dalam Layanan</option>
        <option>Dalam Instansi</option>
      </select>
      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
  <button className="ml-4 p-2 bg-blue-800 text-white rounded-full hover:bg-gray-800 focus:outline-none transform transition duration-300 ease-in-out hover:scale-110">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 10-12 0 6 6 0 0012 0z" />
    </svg>
  </button>
</div>







{/* Button Group */}
<div className="flex justify-center space-x-5">
  {/* Buttons for navigation */}
  <button className="bg-white bg-opacity-80 hover:bg-blue-500 hover:bg-opacity-100 p-8 rounded-lg shadow-md w-28 h-28 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
    <img src={bookicon} alt="Sejarah" className="h-12 mx-auto mb-2" />
    <span className="text-blue-900 font-semibold hover:text-white">Sejarah</span>
  </button>
  <button className="bg-white bg-opacity-80 hover:bg-blue-500 hover:bg-opacity-100 p-8 rounded-lg shadow-md w-28 h-28 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
    <img src={infoicon} alt="Berita" className="h-12 mx-auto mb-2" />
    <span className="text-blue-900 font-semibold hover:text-white">Berita</span>
  </button>
  <button className="bg-white bg-opacity-80 hover:bg-blue-500 hover:bg-opacity-100 p-8 rounded-lg shadow-md w-28 h-28 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
    <img src={callicon} alt="Layanan" className="h-12 mx-auto mb-2" />
    <span className="text-blue-900 font-semibold hover:text-white">Layanan</span>
  </button>
  <button className="bg-white bg-opacity-80 hover:bg-blue-500 hover:bg-opacity-100 p-8 rounded-lg shadow-md w-28 h-28 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
    <img src={instansiicon} alt="Instansi" className="h-12 mx-auto mb-2" />
    <span className="text-blue-900 font-semibold hover:text-white">Instansi</span>
  </button>
  <button className="bg-white bg-opacity-80 hover:bg-blue-500 hover:bg-opacity-100 p-8 rounded-lg shadow-md w-28 h-28 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
    <img src={moneyicon} alt="Keuangan" className="h-12 mx-auto mb-2" />
    <span className="text-blue-900 font-semibold hover:text-white">Keuangan</span>
  </button>
  <button className="bg-white bg-opacity-80 hover:bg-blue-500 hover:bg-opacity-100 p-8 rounded-lg shadow-md w-28 h-28 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
    <img src={laporicon} alt="Lapor" className="h-12 mx-auto mb-2" />
    <span className="text-blue-900 font-semibold hover:text-white">Lapor</span>
  </button>
</div>


        </div>
      </div>

      {/* News Section */}
      <div className="bg-gray-100 py-8 flex justify-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-8">
          {/* Main News Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/assets/berita1.jpg" alt="Main News" className="w-full h-auto" />
            <div className="p-8">
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Rumah Singgah Provinsi Kepri, Terbukti Meringankan Beban Masyarakat & Meningkatkan Akses Kesehatan
              </h2>
              <p className="text-gray-600 text-sm">
                11 bulan lalu • Gubernur
              </p>
            </div>
          </div>

          {/* Sidebar with Article List */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-5xl font-bold text-blue-900 mb-8">Berita Terbaru</h1>
            <ul>
              <li className="flex mb-6">
                <img src="/assets/artikel1.jpeg" alt="Artikel 1" className="w-20 h-20 rounded-md mr-8 flex-shrink-0" />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-blue-900 font-semibold text-justify overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    Visitasi Kepemimpinan Nasional, Kolaborasi Pemprov Kepri dan Kaltim
                  </h3>
                  <p className="text-gray-600 text-xs">
                    17 jam lalu • Sekretariat Daerah
                  </p>
                </div>
              </li>
              <li className="flex mb-6">
                <img src="/assets/artikel1.jpeg" alt="Artikel 2" className="w-20 h-20 rounded-md mr-8 flex-shrink-0" />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-blue-900 font-semibold text-justify overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    Gubernur Ansar Tegaskan Komitmen Anti-Korupsi: Fokus pada Perizinan dan Pengadaan Barang di Kepri
                  </h3>
                  <p className="text-gray-600 text-xs">
                    22 jam lalu • Infrastruktur
                  </p>
                </div>
              </li>
              <li className="flex mb-6">
                <img src="/assets/artikel1.jpeg" alt="Artikel 3" className="w-20 h-20 rounded-md mr-8 flex-shrink-0" />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-blue-900 font-semibold text-justify overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    Silaturahmi Ke Batu Aji, Gubernur Ansar: SPP Gratis Untuk SMA Sudah Berlaku
                  </h3>
                  <p className="text-gray-600 text-xs">
                    1 hari lalu • Gubernur
                  </p>
                </div>
              </li>
              <li className="flex">
                <img src="/assets/artikel1.jpeg" alt="Artikel 8" className="w-20 h-20 rounded-md mr-8 flex-shrink-0" />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-blue-900 font-semibold text-justify overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    Gubernur Ansar Buka Rakor Pengawas Desa 2024: Wujudkan Pengelolaan Dana Desa yang Efektif dan Transparan
                  </h3>
                  <p className="text-gray-600 text-xs">
                    2 hari lalu • Gubernur
                  </p>
                </div>
              </li>
            </ul>
            <div className="text-center mt-6">
              <button className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 text-sm">
                Lihat Artikel Lainnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}