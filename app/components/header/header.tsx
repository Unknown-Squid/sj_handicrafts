"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import headerLogo from '../../../public/logos/header logo.png';

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-full h-[80px] bg-transparent justify-between flex flex-row z-10">

      {/* Page Navbar */}
      <div className="w-2/5 h-full flex justify-center items-center">
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

      <div className="w-3/5 h-full flex flex-row gap-16 items-center">

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
      
    </div>
  );
};

export default Header;