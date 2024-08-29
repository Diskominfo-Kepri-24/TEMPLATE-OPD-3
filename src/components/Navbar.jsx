import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        if (window.scrollY > 50) {
          setNavbarBg('bg-blue-900'); // Background when scrolled down on Home page
        } else {
          setNavbarBg('bg-transparent'); // Transparent background on top of Home page
        }
      } else if (location.pathname === '/sejarah' || location.pathname === '/visi') {
        setNavbarBg('bg-blue-900'); // Fixed blue background for Sejarah and Visi pages
      } else {
        setNavbarBg('bg-transparent'); // Default transparent background for other pages
      }
    };

    // Only attach scroll listener for home page
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    } else {
      handleScroll(); // Directly call the function for other pages without scroll effect
    }

    return () => {
      if (location.pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [location.pathname]);

  return (
    <nav className={`${navbarBg} text-white p-2 fixed w-full z-50 transition-colors duration-500`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/tulisan.png" alt="Logo" className="h-12 mr-4" />
        </div>

        {/* Menu */}
        <ul className="lg:flex lg:space-x-6 hidden lg:block ml-4 text-sm">
          <li>
            <Link to="/" className="hover:text-gray-300 text-white px-3 py-1 block ">Beranda</Link>
          </li>
          <li className="relative group">
            <div className="hover:text-gray-300 px-3 py-1 block cursor-pointer">
              Pemerintahan
            </div>
            <ul className="absolute left-0 bg-blue-800 text-white mt-2 py-2 rounded-lg shadow-lg transition-opacity duration-150 opacity-0 group-hover:opacity-100 group-hover:block min-w-max">
              <li>
                <Link to="/sejarah" className="block px-4 py-2  text-white hover:bg-blue-700">Sejarah</Link>
              </li>
              <li>
                <Link to="/visi" className="block px-4 py-2 text-white hover:bg-blue-700">Visi dan Misi</Link>
              </li>
              <li>
                <Link to="/instansi" className="block px-4 py-2 text-white hover:bg-blue-700">Perangkat Daerah</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/layanan-publik" className="hover:text-gray-300  text-white px-3 py-1 block">Layanan Publik</Link>
          </li>
          <li className="relative group">
            <div className="hover:text-gray-300 px-3 py-1 block cursor-pointer">
              Publikasi
            </div>
            <ul className="absolute left-0 bg-blue-800 text-white mt-2 py-2 rounded-lg shadow-lg transition-opacity duration-150 opacity-0 group-hover:opacity-100 group-hover:block min-w-max">
              <li>
                <Link to="/berita" className="block px-4 py-2 text-white hover:bg-blue-700">Berita</Link>
              </li>
              <li>
                <Link to="/pengumuman" className="block px-4 py-2 text-white hover:bg-blue-700">Pengumuman</Link>
              </li>
              <li>
                <Link to="/agenda" className="block px-4 py-2 text-white hover:bg-blue-700">Agenda</Link>
              </li>
              <li>
                <Link to="/statistik" className="block px-4 py-2 text-white hover:bg-blue-700">Statistik</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <div className="hover:text-gray-300 px-3 py-1 block cursor-pointer">
              Dokumen & Peraturan
            </div>
            <ul className="absolute left-0 bg-blue-800 text-white mt-2 py-2 rounded-lg shadow-lg transition-opacity duration-150 opacity-0 group-hover:opacity-100 group-hover:block min-w-max">
              <li>
                <Link to="/perda-apbd-2024" className="block px-4 py-2 text-white hover:bg-blue-700">Perda APBD 2024</Link>
              </li>
              <li>
                <Link to="/perda-apbd-2023" className="block px-4 py-2 text-white hover:bg-blue-700">Perda APBD 2023</Link>
              </li>
              <li>
                <Link to="/apbd-kepri-2022" className="block px-4 py-2 text-white hover:bg-blue-700">APBD Kepri 2022</Link>
              </li>
              <li>
                <Link to="/opini-bpk-ri-2023" className="block px-4 py-2 text-white hover:bg-blue-700">Opini BPK RI 2023</Link>
              </li>
              <li>
                <Link to="/laporan-ipkd" className="block px-4 py-2 text-white hover:bg-blue-700">Laporan IPKD</Link>
              </li>
              <li>
                <Link to="/produk-hukum-jdih" className="block px-4 py-2 text-white hover:bg-blue-700">Produk Hukum (JDIH)</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <div className="hover:text-gray-300 px-3 py-1 block cursor-pointer">
              Galeri
            </div>
            <ul className="absolute left-0 bg-blue-800 text-white mt-2 py-2 rounded-lg shadow-lg transition-opacity duration-150 opacity-0 group-hover:opacity-100 group-hover:block min-w-max">
              <li>
                <Link to="/aset-multimedia" className="block px-4 py-2 text-white hover:bg-blue-700">Aset Multimedia</Link>
              </li>
              <li>
                <Link to="/foto-video" className="block px-4 py-2 text-white hover:bg-blue-700">Foto & Video</Link>
              </li>
              <li>
                <Link to="/ai-kepri" className="block px-4 py-2 text-white hover:bg-blue-700">AI Kepri</Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
