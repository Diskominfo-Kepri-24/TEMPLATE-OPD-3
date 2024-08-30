import React, { useEffect, useState } from 'react';
import ShareButton from '../components/ShareButton';
import '../App.css'; // Pastikan path ini sesuai dengan lokasi file CSS Anda

const Layanan = () => {
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
      handleScroll(); // Initial check in case the element is already in view
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      {/* Darker background section */}
      <div className={`text-black p-4 rounded-md mb-5 fade-in ${isVisible ? 'visible' : ''}`}>
        <h1 className="text-left text-3xl font-bold">Tentang Kepri</h1>
        
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-semibold">Profil Singkat Provinsi Kepulauan Riau</h2>
          <ShareButton />
        </div>
      </div>
      
      {/* Cream background section */}
      <div className={`bg-cream-brown-light text-gray-900 p-4 rounded-md fade-in ${isVisible ? 'visible' : ''}`}>
        <p className="mb-4 font-bold text-center pt-5">
          Terbentang dari Selat Malaka hingga ke Laut Natuna, Provinsi Kepulauan Riau termasuk wilayah strategis karena berbatasan dengan Singapura, Vietnam, Malaysia, dan Kamboja. Daerah ini juga kaya akan potensi sumber daya alam di bidang minyak dan gas, serta maritim.
        </p>
        <p className="mb-4 text-justify pt-5">
          Kepulauan Riau (disingkat Kepri) adalah sebuah provinsi yang ada di Indonesia. Provinsi Kepulauan Riau berbatasan dengan Vietnam dan Kamboja di sebelah Utara; Malaysia dan provinsi Kalimantan Barat di sebelah Timur; provinsi Kepulauan Bangka Belitung dan Jambi di Selatan; negara Singapura, Malaysia dan provinsi Riau di sebelah Barat. Provinsi ini termasuk provinsi kepulauan di Indonesia. Tahun 2020, penduduk Kepulauan Riau berjumlah 2.064.564 jiwa, dengan kepadatan 252 jiwa/km², dan 58% penduduknya berada di kota Batam.
        </p>
        <p className="mb-4 text-justify">
          Secara keseluruhan wilayah Kepulauan Riau terdiri dari 5 kabupaten, dan 2 kota, 52 kecamatan serta 299 kelurahan/desa dengan jumlah 2.408 pulau besar, dan kecil yang 30% belum bernama, dan berpenduduk. Adapun luas wilayahnya sebesar 8.201,72 km², sekitar 96% merupakan lautan, dan hanya sekitar 4% daratan.
        </p>

        <h2 className="text-2xl text-left font-semibold mt-8 mb-2">Nama</h2>
        <p className="mb-4 text-justify">
          Asal usul nama Kepulauan Riau berasal dari nama Riau. Riau diduga berasal dari kata "riuh" yang berarti ramai. Hal ini dikarenakan daerah Kepulauan Riau dahulunya merupakan pusat perdagangan dan keramaian. Lalu nama ini berkembang dengan digunakannya nama Riau pada nama Kesultanan Lingga. Pada masa kolonial, kata Riau dituliskan "Riouw", sesuai dengan ejaan bahasa Belanda.
        </p>
        <p className="mb-4 text-justify">
          Setelah proklamasi kemerdekaan, wilayah Riau (Kepulauan Riau saat ini) disatukan dengan wilayah Kesultanan Siak di daratan Sumatra. Dahulunya, hal ini dilakukan karena gerakan Ganyang Malaysia sehingga mempermudah hubungan dari wilayah kepulauan ke daratan Sumatra.
        </p>
        <p className="mb-4 text-justify">
          Namun, seiring berjalannya waktu, nama Riau digunakan oleh wilayah Kesultanan Siak di daratan Sumatra, sementara Kepulauan Riau memekarkan diri. Kata kepulauan ditambahkan di depan kata Riau karena wilayah yang sebagian besar lautan atau berbentuk kepulauan.
        </p>
        <p className="mb-4 text-justify">
          Asal usul nama Riau juga menuai polemik di antara budayawan Riau dan Kepulauan Riau. Kedua kubu ini menilai bahwa nama Riau berasal dari provinsinya masing-masing dengan versi sejarah yang berbeda.
        </p>

        <h2 className="text-2xl text-left font-semibold mt-8 mb-2">Sejarah</h2>
        <h3 className="text-xl text-left font-semibold mt-6 mb-2">Sejarah sebelum pembentukan provinsi</h3>
        <p className="mb-4 text-justify">
          Masa sejarah di Kepulauan Riau dimulai dengan ditemukannya Prasasti Pasir Panjang di Kabupaten Karimun yang terdapat semboyan pemujaan melalui tapak kaki Buddha. Hal ini diduga berhubungan dengan Kerajaan Melayu di Sumatra. Buddha diperkirakan masuk melalui pedagang dari Tiongkok dan India.
        </p>
        <p className="mb-4 text-justify">
          Masa Islam di Kepulauan Riau berkembang dengan berdirinya Kesultanan Riau-Lingga. Kesultanan ini berasaskan Melayu Islam dan Islam sendiri dikenal setelah dibawa oleh pedagang dari Gujarat, India, dan Arab.
        </p>
        <p className="mb-4 text-justify">
          Masa Kolonial sangat berpengaruh dalam sejarah Kepulauan Riau. Julukan Hawaii Van Lingga yang diberikan kepada pulau Penuba, penggunaan uang tersendiri bagi Kepulauan Riau, dan terbentuknya Karesidenan Riouw menjadi bukti pengaruh kuat para kolonial di Kepulauan Riau. Pada tahun 1922, Afdeeling Tanjung Pinang membawahi empat onder-afdeeling yang terdiri dari:
        </p>
        <ul className="list-disc list-inside mb-4 text-justify">
          <li>Onder-Afdeeling Tanjung Pinang,</li>
          <li>Onder-Afdeeling Karimun,</li>
          <li>Onder-Afdeeling Lingga, dan</li>
          <li>Onder-Afdeeling Pulau Tujuh yang dibagi ke dalam dua ressort, yakni ressort Kepulauan Anambas dan ressort Kepulauan Natuna.</li>
        </ul>
        <p className="mb-4 text-justify">
          Adapun Afdeeling Indragiri yang terdiri dari Kuantan, Indragirische Bovenlanden dan Indragirische Benedenlanden, yang pada awal mulanya merupakan satu kesatuan dengan Kepulauan Riau, pada akhirnya, sesudah tahun 1950-an, dimasukkan ke dalam Riau.
        </p>
        <p className="mb-4 text-justify">
          Setelah masa kemerdekaan, Kepulauan Riau bergabung dengan wilayah Kesultanan Siak di daratan Sumatra sehingga membentuk provinsi Riau. Dahulunya, Kepulauan Riau juga menggunakan mata uang tersendiri bernama Uang Kepulauan Riau (KR). Namun secara perlahan, penggunaan mata uang ini dihentikan dan digantikan dengan mata uang Rupiah.
        </p>
        <p className="mb-4 text-justify">
          Setelah lama bergabung dengan Riau, Kepulauan Riau akhirnya memutuskan untuk memisahkan diri dengan membentuk Badan Perjuangan Pembentukan Provinsi Kepulauan Riau (BP3KR). Perjuangan BP3KR akhirnya membuahkan hasil dengan pemekaran provinsi Kepulauan Riau dari Riau pada tanggal 24 September 2002.
        </p>

        <h3 className="text-xl text-left font-semibold mt-6 mb-2">Sejarah setelah pembentukan provinsi</h3>
        <p className="mb-4 text-justify">
          Kepulauan Riau merupakan provinsi baru hasil pemekaran dari provinsi Riau. Provinsi Kepulauan Riau terbentuk berdasarkan Undang-undang Nomor 25 tahun 2002 merupakan provinsi ke-32 di Indonesia yang mencakup Kota Tanjungpinang, Kota Batam, Kabupaten Bintan, Kabupaten Karimun, Kabupaten Natuna, Kabupaten Kepulauan Anambas, dan Kabupaten Lingga.
        </p>

        {/* Batas wilayah table */}
        <h2 className="text-2xl text-left font-semibold mt-8 mb-2">Batas Wilayah</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-6 border-b font-medium text-left">Arah</th>
                <th className="py-3 px-6 border-b font-medium text-left">Batas Wilayah</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="text-left py-3 px-6 border-b">Utara</td>
                <td className="text-left py-3 px-6 border-b">Laut Natuna Utara, Laut Natuna, Kamboja, Vietnam</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="text-left py-3 px-6 border-b">Timur</td>
                <td className="text-left py-3 px-6 border-b">Pulau Kalimantan, Kalimantan Barat, Malaysia Timur, Selat Karimata</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="text-left py-3 px-6 border-b">Selatan</td>
                <td className="text-left py-3 px-6 border-b">Selat Berhala, Kepulauan Bangka Belitung</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="text-left py-3 px-6 border-b">Barat</td>
                <td className="text-left py-3 px-6 border-b">Pulau Sumatra, Riau, Jambi, Malaysia Barat, Singapura</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl text-left font-semibold mt-8 mb-2">Geografi</h2>
        <p className="mb-4 text-justify">
          Secara geografis provinsi Kepulauan Riau berbatasan dengan negara tetangga, yaitu Singapura, Malaysia, dan Vietnam yang memiliki luas wilayah 251.810,71 km² dengan 96 persennya adalah perairan dengan 1.350 pulau besar, dan kecil telah menunjukkan kemajuan dalam penyelenggaraan kegiatan pemerintahan, pembangunan, dan kemasyarakatan. Ibu kota provinsi Kepulauan Riau berkedudukan di Tanjungpinang. Provinsi ini terletak pada jalur lalu lintas transportasi laut, dan udara yang strategis, dan terpadat pada tingkat internasional serta pada bibir pasar dunia yang memiliki peluang pasar. Titik tertinggi di Kepulauan Riau adalah Gunung Daik (1.165 mdpl) yang terdapat di pulau Lingga.
        </p>

        <h2 className="text-2xl text-left font-semibold mt-8 mb-2">Sumber Daya Alam</h2>
        <p className="mb-4 text-justify">
          Kepri memiliki potensi sumber daya alam mineral, dan energi yang relatif cukup besar, dan bervariasi baik berupa bahan galian A (strategis) seperti minyak bumi, dan gas alam, bahan galian B (vital) seperti timah, bauksit, dan pasir besi, maupun bahan galian golongan C seperti granit, pasir, dan kuarsa.
        </p>

        <h2 className="text-2xl text-left font-semibold mt-8 mb-2">Pemerintahan</h2>
        <p className="mb-4 text-justify">
          Gubernur bertanggungjawab atas wilayah provinsi Kepulauan Riau. Saat ini, gubernur atau kepala daerah yang menjabat di provinsi Kepulauan Riau ialah Ansar Ahmad, dengan wakil gubernur Marlin Agustina. Mereka menang pada Pemilihan umum Gubernur Kepulauan Riau 2020. Ansar merupakan gubernur Kepulauan Riau ke-5, sejak provinsi ini dibentuk. Ansar dan Marlin dilantik oleh presiden Republik Indonesia, Joko Widodo di Istana Negara Jakarta pada 25 Februari 2021, untuk masa jabatan 2021-2024.
        </p>

        {/* Tabel Gubernur dan Wakil Gubernur */}
        <h2 className="text-2xl text-left font-semibold mt-8 mb-2">Gubernur dan Wakil Gubernur</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-6 border-b font-medium text-left">Foto</th>
                <th className="py-3 px-6 border-b font-medium text-left">Gubernur</th>
                <th className="py-3 px-6 border-b font-medium text-left">Mulai Jabatan</th>
                <th className="py-3 px-6 border-b font-medium text-left">Akhir Jabatan</th>
                <th className="py-3 px-6 border-b font-medium text-left">Periode</th>
                <th className="py-3 px-6 border-b font-medium text-left">Foto</th>
                <th className="py-3 px-6 border-b font-medium text-left">Wakil Gubernur</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">
                  <img src="assets/logo.png" alt="Gubernur" className="w-32 h-32 object-cover rounded-full"/>
                </td>
                <td className="py-3 px-6 border-b">Ansar Ahmad</td>
                <td className="py-3 px-6 border-b">25 Februari 2021</td>
                <td className="py-3 px-6 border-b">Petahana</td>
                <td className="py-3 px-6 border-b">1 Periode (2021 - 2024)</td>
                <td className="py-3 px-6 border-b">
                  <img src="assets/logo.png" alt="Gubernur" className="w-32 h-32 object-cover rounded-full"/>
                </td>
                <td className="py-3 px-6 border-b">Marlin Agustina</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl text-left font-semibold mt-8 mb-2">Perwakilan</h2>
        <p className="mb-4 text-justify">
        DPRD Kepulauan Riau beranggotakan 45 orang yang dipilih melalui pemilihan umum setiap lima tahun sekali. Pimpinan DPRD Kepulauan Riau terdiri dari 1 Ketua dan 3 Wakil Ketua yang berasal dari partai politik pemilik jumlah kursi dan suara terbanyak. Anggota DPRD Kepulauan Riau yang sedang menjabat saat ini adalah hasil Pemilu 2019 yang dilantik pada 9 September 2019 oleh Wakil Ketua Pengadilan Tinggi Pekanbaru, Moch. Eka Kartika, di Ruang Sidang Utama Gedung DPRD Provinsi Kepulauan Riau. Komposisi anggota DPRD Kepulauan Riau periode 2019-2024 terdiri dari 10 partai politik dimana PDI Perjuangan dan Partai Golkar adalah partai politik pemilik kursi terbanyak yaitu masing-masing 8 kursi, kemudian disusul oleh Partai Keadilan Sejahtera dan Partai NasDem yang masing-masing meraih 6 kursi.
        </p>

        <h2 className="text-2xl text-left font-semibold mt-8 mb-2">Kabupaten dan Kota</h2>
        <p className="mb-4 text-justify">
        Provinsi Kepulauan Riau merupakan salah satu provinsi di Pulau Sumatra. Provinsi Kepulauan Riau terdiri ata 5 kabupaten dan 2 kota. Berikut adalah daftar kabupaten dan kota di provinsi Kepulauan Riau.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-6 border-b font-medium text-left">No.</th>
                <th className="py-3 px-6 border-b font-medium text-left">Kabupaten/Kota</th>
                <th className="py-3 px-6 border-b font-medium text-left">Pusat Pemerintahan</th>
                <th className="py-3 px-6 border-b font-medium text-left">Bupati/Wali Kota</th>
                <th className="py-3 px-6 border-b font-medium text-left">Lambang</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">1</td>
                <td className="py-3 px-6 border-b">Kabupaten Bintan</td>
                <td className="py-3 px-6 border-b">Bandar Seri Bentan</td>
                <td className="py-3 px-6 border-b">Roby Kurniawan</td>
                <td className="py-3 px-6 border-b">
                  <img src="assets/logo.png" alt="Lambang Bintan" className="w-32 h-32 object-cover" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">2</td>
                <td className="py-3 px-6 border-b">Kabupaten Karimun</td>
                <td className="py-3 px-6 border-b">Tanjung Balai Karimun</td>
                <td className="py-3 px-6 border-b">Aunur Rafiq</td>
                <td className="py-3 px-6 border-b">
                  <img src="assets/logo.png" alt="Lambang Karimun" className="w-32 h-32 object-cover" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">3</td>
                <td className="py-3 px-6 border-b">Kabupaten Kepulauan Anambas</td>
                <td className="py-3 px-6 border-b">Tarempa</td>
                <td className="py-3 px-6 border-b">Abdul Haris</td>
                <td className="py-3 px-6 border-b">
                  <img src="assets/logo.png" alt="Lambang Anambas" className="w-32 h-32 object-cover" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">4</td>
                <td className="py-3 px-6 border-b">Kabupaten Lingga</td>
                <td className="py-3 px-6 border-b">Daik</td>
                <td className="py-3 px-6 border-b">M. Nizar</td>
                <td className="py-3 px-6 border-b">
                  <img src="assets/logo.png" alt="Lambang Lingga" className="w-32 h-32 object-cover" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">5</td>
                <td className="py-3 px-6 border-b">Kabupaten Natuna</td>
                <td className="py-3 px-6 border-b">Ranai</td>
                <td className="py-3 px-6 border-b">Wan Siswandi</td>
                <td className="py-3 px-6 border-b">
                  <img src="assets/logo.png" alt="Lambang Natuna" className="w-32 h-32 object-cover" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">6</td>
                <td className="py-3 px-6 border-b">Kota Batam</td>
                <td className="py-3 px-6 border-b">-</td>
                <td className="py-3 px-6 border-b">Muhammad Rudi</td>
                <td className="py-3 px-6 border-b">
                  <img src="assets/logo.png" alt="Lambang Batam" className="w-32 h-32 object-cover" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">7</td>
                <td className="py-3 px-6 border-b">Kota Tanjungpinang</td>
                <td className="py-3 px-6 border-b">-</td>
                <td className="py-3 px-6 border-b">Hasan, S.Sos</td>
                <td className="py-3 px-6 border-b">
                  <img src="assets/logo.png" alt="Lambang Tanjungpinang" className="w-32 h-32 object-cover" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Layanan;
