"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testi() {
    const EmptyArrow = () => <></>;
  const settings = {
    nextArrow: <EmptyArrow />,
    prevArrow: <EmptyArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
    "https://www.astra.co.id/Public/Operational%20Figures/car-market-nov-2023-rev1.jpg",
    "https://www.astra.co.id/Public/Files/angka%20operasional/2023/MOTOR-QUARTERLY-SEP23.png",
    "https://www.astra.co.id/Public/Files/angka%20operasional/2023/FFB-CPO-SEP-UPDATED.png",
    "https://www.astra.co.id/Public/Operational%20Figures/UNTR-Monthly-Operational-Updates-NOV23-1.jpg",
    "https://www.astra.co.id/Public/Operational%20Figures/UNTR-Monthly-Operational-Updates-NOV23-2.jpg",
    "https://www.astra.co.id/Public/Operational%20Figures/NOV23-UNITED-TRACTORS-Coal-Sales-Volume-in-thousand-tonnes.jpg",
    "https://www.astra.co.id/Public/Operational%20Figures/NOV23-UNITED-TRACTORS-Gold-Sales-Volume-in-thousand-ounces.jpg",
  ];

  
  return (
    <>
      <div className=" pt-5 xl:max-w-screen-xl lg:max-w-lg md:max-w-md sm:max-w-sm m-auto text-warp">
        <h2 className=" pb-5 font-bold xl:text-2xl md:text-sm underline text-center text-sky-700">
          ANGKA OPERASIONAL
        </h2>
        <Slider className="max-w-[1008px] m-auto rounded-lg" {...settings}>
          {slider.map((url, key) => (
            <img
              key={key}
              src={url}
              className=" max-h-[440px] w-full h-full bg-black m-auto rounded-xl"
            ></img>
          ))}
        </Slider>
      </div>
    </>
  );
}
