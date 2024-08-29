import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import '../App.css'; // Ensure this is the correct path to your CSS file

const Card = ({ region }) => (
  <div className="card">
    <img src={region.image} alt={region.name} />
    <div className="card-content">
      <h2 className='mb-5'>{region.name}</h2>
      <Link to={`/${region.name.toLowerCase().replace(/ /g, '-')}`} className="detail-button">
        Detail
      </Link>
    </div>
  </div>
);

const ShareButton = () => (
  <button className="share-button">
    Share
  </button>
);

const Instansi = () => {
  const [regionIndex, setRegionIndex] = useState(0);
  const [opdIndex, setOpdIndex] = useState(0);
  const regionRef = useRef(null);
  const opdRef = useRef(null);

  const regions = [
    { name: "KOTA TANJUNG PINANG", image: "/assets/logo.png" },
    { name: "KOTA BATAM", image: "/assets/logo.png" },
    { name: "KABUPATEN KARIMUN", image: "/assets/logo.png" },
    { name: "KABUPATEN LINGGA", image: "/assets/logo.png" },
    { name: "KABUPATEN NATUNA", image: "/assets/logo.png" },
    { name: "KABUPATEN BINTAN", image: "/assets/logo.png" },
    { name: "KABUPATEN KEPULAUAN ANAMBAS", image: "/assets/logo.png" }
  ];

  const opds = [
    { name: "BADAN PERENCANAAN, PENELITIAN DAN PENGEMBANGAN", image: "/assets/logo.png" },
    { name: "BADAN KEUANGAN DAN ASET DAERAH", image: "/assets/logo.png" },
    { name: "BADAN PERENCANAAN, PENELITIAN DAN PENGEMBANGAN", image: "/assets/logo.png" },
    { name: "BADAN KEUANGAN DAN ASET DAERAH", image: "/assets/logo.png" },
    { name: "BADAN PERENCANAAN, PENELITIAN DAN PENGEMBANGAN", image: "/assets/logo.png" },
    { name: "BADAN KEUANGAN DAN ASET DAERAH", image: "/assets/logo.png" },
    { name: "BADAN PERENCANAAN, PENELITIAN DAN PENGEMBANGAN", image: "/assets/logo.png" },
    { name: "BADAN KEUANGAN DAN ASET DAERAH", image: "/assets/logo.png" },
  ];

  useEffect(() => {
    const regionInterval = setInterval(() => {
      setRegionIndex(prevIndex => (prevIndex + 1) % regions.length);
    }, 3000); // Change every 3 seconds

    const opdInterval = setInterval(() => {
      setOpdIndex(prevIndex => (prevIndex + 1) % opds.length);
    }, 3000); // Change every 3 seconds

    return () => {
      clearInterval(regionInterval);
      clearInterval(opdInterval);
    };
  }, [regions.length, opds.length]);

  useEffect(() => {
    if (regionRef.current) {
      regionRef.current.scrollTo({
        left: regionIndex * 250, // Adjust this value based on your card's actual width
        behavior: 'smooth'
      });
    }

    if (opdRef.current) {
      opdRef.current.scrollTo({
        left: opdIndex * 250, // Adjust this value based on your card's actual width
        behavior: 'smooth'
      });
    }
  }, [regionIndex, opdIndex]);

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="bg-white rounded-md fade-in">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-left ">Pemerintah Provinsi Kepulauan Riau</h2>
          <ShareButton />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mb-10">Daftar Perangkat Daerah</h1>
      <div className="cards-container" ref={regionRef}>
        {regions.map((region, idx) => (
          <Card key={idx} region={region} />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-center mt-20 mb-20">OPD Provinsi Kepulauan Riau</h1>
      <div className="cards-container mb-36" ref={opdRef}>
        {opds.map((opd, idx) => (
          <Card key={idx} region={opd} />
        ))}
      </div>
    </div>
  );
};

export default Instansi;
