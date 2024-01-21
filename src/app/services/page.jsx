"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Services() {
  const EmptyArrow = () => <></>;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <EmptyArrow />,
    prevArrow: <EmptyArrow />,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const slider = [
    "https://www.astra.co.id/Public/Images/home/slider/2023/ASTRA---LFA-APA-1280x559.jpg",
    "https://www.astra.co.id/Public/Images/home/slider/2023/ASTRAMOMENTUM-KVSATUINDO.png",
    "https://www.astra.co.id/Public/Images/home/slider/2022/2022-inspirasi-1280x559.jpg",
  ];
  return (
    <>
      <div className=" m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-10 w-full">
          <div className="bg-blue-700 text-white py-10 px-5 max-xl:w-[330] max-xl:h-full">
            <div className=" max-w-screen-xl mx-auto">
              <h2 className="text-center text-3xl font-bold mb-6">BISNIS</h2>
              <p className="text-center mb-10 text-xl font-semibold">
                Astra saat ini memiliki 197.447 karyawan pada 270 anak
                perusahaan, perusahaan asosiasi dan pengendalian bersama entitas
                yang menjalankan tujuh segmen usaha di Indonesia
              </p>

              <div className=" grid xl:grid-cols-2 justify-center gap-5">
                <div className=" w-30 h-30 bg-blue-400 pb-3 rounded-lg shadow-md hover:scale-110 transition-all duration-500">
                  <img
                    src="https://source.unsplash.com/1500x1500?bmw"
                    alt="Otomotif"
                    className=" mb-1 rounded-lg w-full h-[88%]"
                  />
                  <h3 className=" font-semibold text-sm text-center">
                    Otomotif
                  </h3>
                </div>

                <div className=" w-30 h-30 bg-blue-400 pb-3 rounded-lg shadow-md hover:scale-110 transition-all duration-500">
                  <img
                    src="https://source.unsplash.com/1500x1500?financial"
                    alt="Jasa Keuangan"
                    className="mb-1 rounded-lg w-full h-[88%]"
                  />
                  <h3 className=" font-semibold text-sm text-center">
                    Jasa keuangan
                  </h3>
                </div>

                <div className=" w-30 h-30 bg-blue-400 pb-3 rounded-lg shadow-md hover:scale-110 transition-all duration-500">
                  <img
                    src="https://source.unsplash.com/1500x1500?energy"
                    alt="Energy"
                    className="mb-1 rounded-lg w-full h-[88%]"
                  />
                  <h3 className=" font-semibold text-sm text-center">Energy</h3>
                </div>

                <div className=" w-30 h-30 bg-blue-400 pb-3 rounded-lg shadow-md hover:scale-110 transition-all duration-500">
                  <img
                    src="https://source.unsplash.com/1500x1500?agribusiness"
                    alt="agribusiness"
                    className="mb-1 rounded-lg w-full h-[88%]"
                  />
                  <h3 className=" font-semibold text-sm text-center">
                    Agribusiness
                  </h3>
                </div>

                <div className=" w-30 h-30 bg-blue-400 pb-3 rounded-lg shadow-md hover:scale-110 transition-all duration-500">
                  <img
                    src="https://source.unsplash.com/1500x1500?bridge"
                    alt="Infrastrukture"
                    className="mb-1 rounded-lg w-full h-[88%]"
                  />
                  <h3 className=" font-semibold text-sm text-center">
                    Insfrastructure
                  </h3>
                </div>

                <div className=" w-30 h-30 bg-blue-400 pb-3 rounded-lg shadow-md hover:scale-110 transition-all duration-500">
                  <img
                    src="https://source.unsplash.com/1500x1500?tecnology"
                    alt="tecnology"
                    className="mb-1 rounded-lg w-full h-[88%]"
                  />
                  <h3 className=" font-semibold text-sm text-center">
                    Teknologi Informasi
                  </h3>
                </div>

                <div className=" w-30 h-30 bg-blue-400 pb-3 rounded-lg shadow-md hover:scale-110 transition-all duration-500">
                  <img
                    src="https://source.unsplash.com/1500x1500?properties"
                    alt="properties"
                    className="mb-1 rounded-lg w-full h-[88%]"
                  />
                  <h3 className=" font-semibold text-sm text-center">
                    Properti
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className=" max-w-screen-xl mx-auto mt-10">
            <Slider className="max-w-[1008px] m-auto rounded-lg" {...settings}>
              {slider.map((url, key) => (
                <img
                  key={key}
                  src={url}
                  className=" max-h-[440px] w-full h-full bg-black m-auto rounded-xl"
                ></img>
              ))}
            </Slider>
            <br />
            <br />
            <h2 className="text-center text-3xl font-bold mb-6 text-sky-700 underline">
              KOMUNITAS ASTRA
            </h2>{" "}
            <div className="max-w-screen-xl mx-auto py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                <div className="relative cursor-pointer bg-white rounded shadow-lg overflow-hidden group">
                  <img
                    className="w-full h-[300px] object-cover group-hover:opacity-50"
                    src="https://qmfinancial.com/wp-content/uploads/2022/12/career-cushioning-1170x700.jpg"
                    alt="ASTRA KARIER"
                  />
                  <div className="absolute inset-0 px-6 py-4 top-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-black text-center">
                      <p className="font-bold text-md text-wrap">
                        MARI KEMBANGKAN MASA DEPAN BERSAMA!
                      </p>
                      <p className=" text-wrap">
                        Fondasi kami, idemu, bers ama-sama kita maju dan
                        berkembang untuk menciptakan masa depan bersama.
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-4 relative bg-blue-500">
                    <div className="font-bold text-xl mb-2 text-white text-center">
                      ASTRA KARIER
                    </div>
                  </div>
                </div>

                <div className="relative cursor-pointer bg-white rounded shadow-lg overflow-hidden group">
                  <img
                    className="w-full h-[300px] object-cover group-hover:opacity-50"
                    src="https://yt3.googleusercontent.com/ytc/AIf8zZQ79g2xhIupyIhVy964wrX0OPEyP_VSyO2jRtkFJg=s900-c-k-c0x00ffffff-no-rj"
                    alt="SATU INDONESIA"
                  />
                  <div className="absolute inset-0 px-6 py-4 top-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-black text-center">
                      <p className="font-bold text-md text-wrap">
                        SATU INDONESIA
                      </p>
                      <p className=" text-wrap">
                        Satukan semangat membangun tunas-tunas bangsa tumbuh
                        menjadi generasi penerus yang berani menghadapi
                        tantangan masa depan!
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-4 relative bg-red-500">
                    <div className="font-bold text-xl mb-2 text-white text-center">
                      SATU INDONESIA
                    </div>
                  </div>
                </div>

                <div className="relative cursor-pointer bg-white rounded shadow-lg overflow-hidden group">
                  <img
                    className="w-full h-[300px] object-cover group-hover:opacity-50"
                    src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"
                    alt="BLOG DAN ARTIKEL"
                  />
                  <div className="absolute inset-0 px-6 py-4 top-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-black text-center">
                      <p className="font-bold text-md text-wrap">
                        BLOG & ARTIKEL
                      </p>
                      <p className=" text-wrap">
                        Baca artikel menarik dari Astra
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-4 relative bg-blue-500">
                    <div className="font-bold text-xl mb-2 text-white text-center">
                      BLOG & ARTIKEL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
