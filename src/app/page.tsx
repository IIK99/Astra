"use client"
import Image from "next/image";
import Overview from "./overbview";
import Testi from "./testi";

export default function Beranda() {
  return (
    <>
      <div className="relative pt-2 w-screen m-auto">
        <Image
          src="/images/MenaraAstra.jpeg"
          className="w-full h-auto rounded-md"
          alt="Menara Astra" width={1000} height={1000}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-center p-5 pb-12">
          <div className="bg-slate-950 bg-opacity-50 rounded p-4 text-white text-center text-xl md:text-3xl sm:text-sm font-bold">
            <p>
              Cita-cita Astra adalah untuk membangun sebuah bisnis yang lebih
              sustainable, yang dapat berkontribusi dalam memperkuat pertumbuhan
              dan ketahanan ekonomi Indonesia serta mendukung kesejahteraan
              sosial masyarakat yang inklusif. Astra meningkatkan langkah
              perjalanan sustainability, yang memadukan fokus kami pada
              masyarakat dengan fokus pada iklim dan planet.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2 p-4 flex flex-col items-center max-w-screen-2xl m-auto">
        <p className=" text-sky-700 font-bold text-2xl mb-4 md:text-xl sm:text-sm">
          MARS ASTRA
        </p>
        <div className=" m-auto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2yFEM_suxNQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="shadow-lg shadow-black rounded"
          ></iframe>
        </div>
      </div>
      <Overview />
      <Testi />
    </>
  );
}
