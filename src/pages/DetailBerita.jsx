import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function DetailBerita() {
  return (
    <div className="bg-gray-100 py-8 min-h-screen">
      <div className="container mx-auto px-16 max-w-7xl pt-20"> {/* Menambahkan pt-24 untuk memberi jarak dari atas */}
      
        {/* Breadcrumb Section */}
        <nav className="text-gray-500 text-sm mb-6">
          <ul className="flex items-center space-x-2">
            <li>
              <a href="#" className="hover:underline">Beranda</a>
            </li>
            <li>
              <span className="mx-2">•</span>
            </li>
            <li>
              <a href="#" className="hover:underline">Berita</a>
            </li>
            <li>
              <span className="mx-2">•</span>
            </li>
            <li>
              <span className="text-gray-900">Gubernur</span>
            </li>
          </ul>
        </nav>

        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-red-600 text-lg font-bold mb-2">Pilkada 2024</h1>
          <h2 className="text-4xl font-bold text-black mb-4 leading-tight">
            Bawaslu awasi pencalonan di Babel cegah pelanggaran administrasi
          </h2>
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <FontAwesomeIcon icon={faClock} className="mr-2" />Jumat, 30 Agustus 2024 05:36 WIB
          </div>
        </div>

        {/* Main Content Section */}
        <div>
          {/* Image Section */}
          <div className="mb-2">
            <img src="/assets/berita1.jpg" alt="Berita Detail" className="w-full h-auto rounded-md" />
            <p className="text-gray-600 text-sm text-center mt-2">Gubernur Kepulauan Riau saat meresmikan Rumah Singgah</p> {/* Caption of the image */}
          </div>

          {/* Text Section */}
          <div className="text-gray-800 text-lg leading-relaxed">
            <p className="mb-4">
              Bawaslu terus memantau proses pencalonan di Babel untuk memastikan tidak ada pelanggaran administrasi yang terjadi selama tahapan Pilkada 2024. Berbagai langkah antisipasi telah disiapkan untuk menjaga integritas proses demokrasi.
            </p>
            <p className="mb-4">
              Ketua Bawaslu Babel menyatakan bahwa pihaknya akan bersikap tegas terhadap setiap pelanggaran yang ditemukan. Langkah ini dilakukan agar Pilkada dapat berjalan dengan jujur dan adil.
            </p>
            <p className="mb-4">
              Diskominfo Kepri - Mendapatkan akses layanan kesehatan yang mudah, murah, dan ramah merupakan impian bagi seluruh masyarakat di Indonesia. Dan untuk mewujudkan layanan kesehatan yang menjadi impian masyarakat tersebut dibutuhkan komitmen yang tinggi dari pemerintah.
            </p>
            <p className="mb-4">
              Pemerintah Provinsi Kepulauan Riau bisa dibilang cukup responsif membaca kebutuhan masyarakatnya. Karena telah menyediakan 'Rumah Singgah' yang berfungsi melayani masyarakatnya yang butuh tempat tinggal sementara selama menjalani rujukan atas penyakitnya.
            </p>
            <p className="mb-4">
              Tidak tanggung-tanggung, Kepri memiliki dua unit Rumah Singgah sekaligus, yakni di Jakarta dan di Kota Batam. Sebelum ada Rumah Singgah, Masyarakat Kepri yang akan merujuk penyakitnya ke Jakarta harus merogoh kocek lebih dalam untuk tambahan biaya sewa penginapan, makan dan sebagainya.
            </p>
            <p className="mb-4">
              Begitu juga bagi masyarakat di pulau-pulau yang ingin berobat ke Kota Batam, juga demikian. Gubernur Kepulauan Riau H. Ansar Ahmad cukup paham akan kondisi masyarakatnya yang tinggal di pulau-pulau dengan penghasilan mayoritas sebagai nelayan yang pas-pasan untuk makan. Berangkat dari persoalan ini, Pemprov Kepri membangun Rumah Singgah sebagai bentuk komitmen pelayanan kepada masyarakat.
            </p>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Terpopuler</h3>
          <div className="border-b pb-4 mb-4">
            <h4 className="text-red-600 text-sm font-bold">Pilkada 2024</h4>
            <p className="text-gray-900 font-semibold text-md hover:underline cursor-pointer">
              PDIP usung Risma-Gus Han pada Pilkada Jatim 2024
            </p>
            <p className="text-gray-600 text-sm">18 jam lalu</p>
          </div>
          <div className="border-b pb-4 mb-4">
            <h4 className="text-red-600 text-sm font-bold">Pilkada 2024</h4>
            <p className="text-gray-900 font-semibold text-md hover:underline cursor-pointer">
              Kemarin, Anies ditinggalkan - Partai Buruh buka peluang koalisi baru
            </p>
            <p className="text-gray-600 text-sm">23 jam lalu</p>
          </div>
          <div className="border-b pb-4 mb-4">
            <h4 className="text-red-600 text-sm font-bold">Pilkada 2024</h4>
            <p className="text-gray-900 font-semibold text-md hover:underline cursor-pointer">
              Puan tanggapi kabar PDIP akan usung Ganjar pada Pilpres
            </p>
            <p className="text-gray-600 text-sm">2 hari lalu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
