"use client"
import React from "react";
import { FaLinkedin, FaCity, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" mb-0 w-full bg-sky-950 text-white p-4 z-50">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <p className="font-bold">
          © PT ASTRA International Tbk 2024.
          <br className="md:hidden" />{" "}
          Kebijakan Privasi dan Ketentuan Layanan
        </p>
        <div className="flex flex-wrap justify-center space-x-0 space-y-2 md:space-x-4 md:space-y-0 mt-2">
          <a
            href="https://www.linkedin.com/company/pt-astra-international-tbk"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300" 
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="/kebijakan-privasi"
            aria-label="Kebijakan Privasi"
            className="hover:text-gray-300"
          >
            <FaCity size={24} />
          </a>
          <a
            href="tel:+620000000"
            aria-label="Telepon"
            className="hover:text-gray-300"
          >
            <FaPhone size={24} />
          </a>
          <a
            href="mailto:info@astra.co.id"
            aria-label="Email"
            className="hover:text-gray-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
