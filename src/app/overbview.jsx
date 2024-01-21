"use client"
import Image from 'next/image';
export default function Overview() {
  return (
    <>
      <div className="relative pt-2 max-w-screen-2xl m-auto">
        <Image
          src="https://cdn0-production-images-kly.akamaized.net/tKvxN6uqn5y-f_3PePA_X4jwiyQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3153677/original/019791700_1592280960-Astra_1.jpg"
          className=" rounded-md w-full" alt='astra' width={500} height={500}
        />

        <div className=" pt-5 max-w-screen-xl m-auto text-warp">
          <div className=" pb-5 font-bold text-2xl text-center text-sky-700">
            ASTRA Internasional<br/>
            <span className=" italic font-normal underline">enterprice at your service</span>
          </div>
          <p className=" text-sky-700 text-xl">
            PT Astra International Tbk didirikan di Jakarta pada tahun 1957
            sebagai sebuah perusahaan perdagangan umum dengan nama Astra
            International Inc. Pada tahun 1990, telah dilakukan perubahan nama
            menjadi PT Astra International Tbk, dalam rangka penawaran umum
            perdana saham Perseroan kepada masyarakat, yang dilanjutkan dengan
            pencatatan saham Perseroan di Bursa Efek Indonesia dengan
            menggunakan ticker ASII. Nilai kapitalisasi pasar Astra pada akhir
            tahun 2021 adalah sebesar Rp231 triliun.
          </p>
          <br/>
          <br/>

          <div className="">
            Sesuai anggaran dasar Perseroan, kegiatan usaha yang dapat
            dijalankan oleh Perusahaan mencakup perdagangan umum, perindustrian,
            pertambangan, pengangkutan, pertanian, pembangunan, jasa dan
            konsultasi. Hingga tahun 2022, Astra telah mengembangkan bisnisnya
            dengan menerapkan model bisnis yang berbasis sinergi dan
            terdiversifikasi pada tujuh segmen usaha, terdiri dari:
            <br />
            <br />
            <ul className=" list-disc pl-14">
              <li>Otomotif.</li>
              <li>Jasa Keuangan.</li>
              <li>Alat Berat,</li>
              <li>Pertambangan,</li>
              <li>Konstruksi & Energi.</li>
              <li>Agribisnis. </li>
              <li>Infrastruktur dan Logistik.</li>
              <li>Teknologi Informasi.</li>
              <li>Properti.</li>{" "}
            </ul>
            <br />
            Dengan bisnis yang beragam, Astra telah menyentuh berbagai aspek
            kehidupan bangsa melalui produk dan layanan yang dihasilkan. Dalam
            keseharian hidup, masyarakat Indonesia menggunakan sepeda motor dan
            mobil, jalan tol, printer, hingga layanan pembiayaan, perbankan dan
            asuransi milik Astra. Pelaku bisnis bermitra dengan Astra
            memanfaatkan berbagai kendaraan komersial, alat berat, layanan
            logistik, sistem teknologi informasi dan jasa pertambangan dari
            Astra. Berbagai produk yang dihasilkan, antara lain minyak kelapa
            sawit, batu bara dan kendaraan bermotor, senantiasa diekspor
            sehingga Astra dapat berkontribusi dalam menyumbangkan devisa bagi
            negara.
            <br />
            <br />
            <div className=" flex justify-center items-center">
              <Image
                src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/11/25/2482785424.jpg"
                className=" items-center justify-center" alt='person'  width={500} height={500}
              />
            </div>
            <br />
            <br />
            Saat ini, kegiatan operasional bisnis yang tersebar di seluruh
            Indonesia dikelola melalui 270 anak perusahaan, ventura bersama dan
            entitas asosiasi, dengan didukung oleh 198.203 karyawan. Sebagai
            salah satu grup usaha terbesar nasional saat ini, Astra telah
            membangun reputasi yang kuat melalui penawaran rangkaian produk dan
            layanan berkualitas, dengan memperhatikan pelaksanaan tata kelola
            perusahaan dan tata kelola lingkungan yang baik. Astra senantiasa
            beraspirasi untuk menjadi perusahaan kebanggaan bangsa yang berperan
            serta dalam upaya untuk meningkatkan kesejahteraan masyarakat
            Indonesia. Oleh karena itu, kegiatan bisnis Astra berupaya
            menerapkan perpaduan yang berimbang pada aspek komersial bisnis dan
            sumbangsih non-bisnis melalui program tanggung jawab sosial yang
            berkelanjutan di bidang kesehatan, pendidikan, lingkungan,
            kewirausahaan serta teknologi.
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </>
  );
}
