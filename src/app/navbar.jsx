"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="border-b-2 sticky top-0 z-50 bg-white border-sky-200 h-16 w-full flex items-center justify-between font-semibold px-4 lg:px-9">
        <img
          src="https://www.contactcenterworld.com/images/company/PT.-Astra-International-Tbk.-600px-logo.jpg"
          className="w-[170px] h-[55px] lg:static lg:block"
        />

        <div className="hidden lg:flex gap-4 text-black no-underline items-center">
          <Link href="/" className="px-3 py-2 hover:bg-sky-200 rounded">
            Home Page
          </Link>
          <Link href="/about" className="px-3 py-2 hover:bg-sky-200 rounded">
            About Us
          </Link>
          <Link href="/services" className="px-3 py-2 hover:bg-sky-200 rounded">
            Service
          </Link>
          <Link href="/team" className="px-3 py-2 hover:bg-sky-200 rounded">
            Our Team
          </Link>
        </div>

        <button onClick={toggleSidebar} className="lg:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-y-0 right-0 w-64 z-40 transition-transform transform bg-white border-l-2 border-l-sky-200 overflow-auto lg:hidden`}
      >
        <button onClick={toggleSidebar} className="absolute top-0 right-0 p-4">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-start p-4 pt-20">
          <Link
            href="/"
            onClick={toggleSidebar}
            className="nav-link px-3 py-2 hover:bg-sky-200 rounded w-full text-left"
          >
            Home Page
          </Link>
          <Link href="/about" className="px-3 py-2 hover:bg-sky-200 rounded">
            About Us
          </Link>
          <Link href="/services" className="px-3 py-2 hover:bg-sky-200 rounded">
            Service
          </Link>
          <Link href="/team" className="px-3 py-2 hover:bg-sky-200 rounded">
            Our Team
          </Link>
        </div>
      </div>
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
        ></div>
      )}
    </>
  );
}
