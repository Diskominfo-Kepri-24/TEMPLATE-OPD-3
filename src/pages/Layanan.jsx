import React from 'react';
import '../App.css'; // Pastikan path ini sesuai dengan lokasi file CSS Anda

const Card = ({ title, description, link }) => (
  <div className="card bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-600">{description}</p>
    <a href={link} className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Selengkapnya</a>
  </div>
);

const Layanan = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mt-20 mb-10">Layanan PPID Pemerintah Provinsi Kepulauan Riau</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card 
          title="Permohonan Informasi"
          description="Sampaikan permohonan informasi secara online dengan baik dan benar."
          link="/permohonan-informasi"
        />
        <Card 
          title="Daftar Informasi Publik"
          description="Lihat daftar Instansi tujuan atau PPID Pelaksana di Provinsi Kepulauan Riau."
          link="/daftar-informasi-publik"
        />
        <Card 
          title="Daftar PPID Pelaksana"
          description="Harap cek daftar informasi sebelum mengajukan permintaan informasi."
          link="/ppid-pelaksana"
        />
        <Card 
          title="SIMANJA Kepri"
          description="Sistem Informasi Manajemen Kinerja Pemerintah Provinsi Kepulauan Riau."
          link="/simanja-kepri"
        />
        <Card 
          title="SIAP Kepri"
          description="Sistem Informasi Aktivitas Presensi Pemerintah Provinsi Kepulauan Riau."
          link="/siap-kepri"
        />
        <Card 
          title="SIAAPE Kepri"
          description="Sistem Aplikasi Administrasi Pemerintahan Elektronik Provinsi Kepulauan Riau."
          link="/siaape-kepri"
        />
        <Card 
          title="SIJABAT Kepri"
          description="Sistem Informasi Jabatan di Pemerintahan Provinsi Kepulauan Riau."
          link="/sijabat-kepri"
        />
        <Card 
          title="Si-Desi Kepri"
          description="Sistem Informasi Helpdesk Pemerintah Provinsi Kepulauan Riau."
          link="/si-desi-kepri"
        />
        <Card 
          title="Tanda Tangan Elektronik (TTE)"
          description="Tanda Tangan Elektronik (TTE) Aparatur Sipil Negara (ASN)."
          link="/tte"
        />
      </div>
    </div>
  );
};

export default Layanan;
