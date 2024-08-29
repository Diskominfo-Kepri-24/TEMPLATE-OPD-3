import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure this path points to your CSS file for styling

const Instansi = () => {
  const regions = [
    { name: "KOTA TANJUNG PINANG", image: "/assets/logo.png" },
    { name: "KOTA BATAM", image: "/assets/logo.png" },
    { name: "KABUPATEN KARIMUN", image: "/assets/logo.png" },
    { name: "KABUPATEN LINGGA", image: "/assets/logo.png" },
    { name: "KABUPATEN NATUNA", image: "/assets/logo.png" },
    { name: "KABUPATEN BINTAN", image: "/assets/logo.png" },
    { name: "KABUPATEN KEPULAUAN ANAMBAS", image: "/assets/logo.png" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <h1 className="text-3xl font-bold mb-16">Daftar Perangkat Daerah</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
        {regions.map(region => (
          <div key={region.name} className="card bg-blue-100 p-4 rounded-lg shadow transform transition duration-500 hover:scale-105">
            <div className="flex flex-col items-center">
              <img src={region.image} alt={region.name} className="w-20 h-20 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{region.name}</h2>
              <Link to={`/${region.name.toLowerCase().replace(/ /g, '-')}`} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instansi;
