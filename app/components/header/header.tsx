"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import headerLogo from '../../../public/logos/header logo.png';
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="w-full h-[80px] bg-transparent justify-between flex flex-row z-10">

        {/* Page Navbar */}
        <div className="w-2/5 lg:w-2/5 h-full flex justify-center items-center">
          { 
            isActive("/") ? null : <button
            className={`flex flex-row items-center gap-2 opacity-60 hover:opacity-100`}
            onClick={() => window.location.href = "/"}
          >
            <Image
              src={headerLogo}
              width={100}
              height={100}
              alt="Header Logo"
              className="w-[55px] h-[55px]"
            />
            <div className="flex flex-col items-start">
              <p className="font-merriweatherBoldItalic text-sm">SJ</p>
              <p className="font-merriweatherBoldItalic text-sm ms-3">HANDICRAFTS</p>
            </div>
          </button>
          }
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex w-3/5 h-full flex-row gap-16 items-center">

          <a
            href="/about-us"
            className={`text-base ${
              isActive("/about-us")
                ? "text-[#ECECEC]" // Active link color
                : "text-[#ECECEC]/[.6]" // Inactive link color
            } hover:text-[#ECECEC] font-poppinsMedium`}
          >
            About Us
          </a>

          <a
            href="/our-products"
            className={`text-base ${
              isActive("/our-products")
                ? "text-[#ECECEC]"
                : "text-[#ECECEC]/[.6]"
            } hover:text-[#ECECEC] font-poppinsMedium`}
          >
            Our Products
          </a>

          <a
            href="/contact-us"
            className={`text-base ${
              isActive("/contact-us")
                ? "text-[#ECECEC]"
                : "text-[#ECECEC]/[.6]"
            } hover:text-[#ECECEC] font-poppinsMedium`}
          >
            Contact Us
          </a>

        </div>

        {/* Mobile Menu Button - Hidden on desktop */}
        <div className="flex lg:hidden w-3/5 h-full items-center justify-end pr-4">
          <button
            onClick={toggleSidebar}
            className="text-[#ECECEC] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#65482C] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Close Button */}
          <button
            onClick={closeSidebar}
            className="absolute top-4 right-4 text-[#FFE4CC] p-2"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-8">
            <a
              href="/about-us"
              onClick={closeSidebar}
              className={`text-lg py-3 px-4 rounded-lg transition-all ${
                isActive("/about-us")
                  ? "text-[#FFE4CC] bg-[#8B6F47] font-poppinsBold"
                  : "text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:bg-[#8B6F47]/50 font-poppinsMedium"
              }`}
            >
              About Us
            </a>

            <a
              href="/our-products"
              onClick={closeSidebar}
              className={`text-lg py-3 px-4 rounded-lg transition-all ${
                isActive("/our-products")
                  ? "text-[#FFE4CC] bg-[#8B6F47] font-poppinsBold"
                  : "text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:bg-[#8B6F47]/50 font-poppinsMedium"
              }`}
            >
              Our Products
            </a>

            <a
              href="/contact-us"
              onClick={closeSidebar}
              className={`text-lg py-3 px-4 rounded-lg transition-all ${
                isActive("/contact-us")
                  ? "text-[#FFE4CC] bg-[#8B6F47] font-poppinsBold"
                  : "text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:bg-[#8B6F47]/50 font-poppinsMedium"
              }`}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;