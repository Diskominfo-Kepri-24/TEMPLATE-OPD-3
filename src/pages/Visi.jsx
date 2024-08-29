import React, { useEffect, useState } from 'react';
import ShareButton from '../components/ShareButton';
import '../App.css'; // Pastikan path ini sesuai dengan lokasi file CSS Anda

const Visi = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the element is already in view
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      {/* Darker background section */}
      <div className={`bg-white p-6 rounded-md fade-in ${isVisible ? 'visible' : ''}`}>
        <h1 className="text-3xl font-bold mb-5 text-left">Visi dan Misi</h1>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-left">Pemerintah Provinsi Kepulauan Riau</h2>
          <ShareButton />
        </div>
      </div>
      
      {/* Cream background section */}
      <div className={`bg-cream-brown-light text-gray-900 p-4 rounded-md mb-5 fade-in ${isVisible ? 'visible' : ''}`}>
        <strong className='text-2xl block mb-2 text-left'>VISI:</strong>
        <p className='font-mono font-bold text-left'>"Terwujudnya Kepulauan Riau yang Makmur, Berdaya Saing, dan Berbudaya"</p>
        <ul className="list-disc list-inside pl-5 mb-4 pt-3 text-left">
          <li className="mb-2">
            <strong>Makmur:</strong> Kehidupan masyarakat Kepulauan Riau yang lebih layak, dan sejahtera.
          </li>
          <li className="mb-2">
            <strong>Berdaya Saing:</strong> Terwujudnya masyarakat yang sehat, birokrasi pemerintahan dan dunia usaha yang lebih mampu bersaing dan unggul di tingkat regional dan internasional.
          </li>
          <li className="mb-2">
            <strong>Berbudaya:</strong> Terwujudnya penyelenggaraan pemerintahan, kegiatan pembangunan dan aktivitas masyarakat Kepulauan Riau yang lebih berpegang pada nilai-nilai agama, budaya Melayu, dan budaya Nasional.
          </li>
        </ul>
        <strong className='text-2xl block mb-2 text-left'>MISI:</strong>
        <ul className="list-disc list-inside pl-5 pt-3 text-left">
          <li className="mb-2">
            Percepatan Peningkatan Pertumbuhan Ekonomi Berbasis Maritim, Berwawasan Lingkungan dan Keunggulan Wilayah Untuk Peningkatan Kemakmuran Masyarakat.
          </li>
          <li className="mb-2">
            Melaksanakan Tata Kelola Pemerintahan yang Bersih, Terbuka dan Berorientasi Pelayanan.
          </li>
          <li className="mb-2">
            Mewujudkan Kualitas Sumber Daya Manusia yang Berkualitas, Sehat dan Berdaya Saing dengan Berbasiskan Iman dan Taqwa.
          </li>
          <li className="mb-2">
            Mengembangkan dan Melestarikan Budaya Melayu dan Nasional Dalam Mendukung Pembangunan Berkelanjutan.
          </li>
          <li className="mb-2">
            Mempercepat Konektivitas Antar Pulau dan Pembangunan Infrastruktur Kawasan.
          </li>
        </ul>
        
        <div className="mt-6 flex justify-end">
          {/* ShareButton can be added here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Visi;
