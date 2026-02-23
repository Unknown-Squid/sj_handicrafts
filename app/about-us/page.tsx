"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useInView } from "../hooks/useInView";

// Dynamically import Leaflet (client-side only)
const L = typeof window !== "undefined" ? require("leaflet") : null;
import "leaflet/dist/leaflet.css";

// Image Imports
import shielaProfile from "../../public/profiles/shiela profile.png";
import companyLogo from "../../public/logos/company logo.png";
import VideoIframe from "../components/iframe/VideoIframe";

if (L) {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
}

export default function AboutUs() {
  const [youtubeRef, youtubeVisible] = useInView<HTMLIFrameElement>({ threshold: 0.5 });
  const [facebookRef, facebookVisible] = useInView<HTMLIFrameElement>({ threshold: 0.5 });
  const [companyAboutRef, companyAboutVisible] = useInView<HTMLDivElement>({ threshold: 0.5 });
  const mapRef = useRef<HTMLDivElement>(null);

  const [animatedSections, setAnimatedSections] = useState({
    youtube: false,
    facebook: false,
    companyAbout: false,
  });

  // Track Visibility
  useEffect(() => {
    setAnimatedSections((prev) => ({
      ...prev,
      youtube: youtubeVisible || prev.youtube,
      facebook: facebookVisible || prev.facebook,
      companyAbout: companyAboutVisible || prev.companyAbout,
    }));
  }, [youtubeVisible, facebookVisible, companyAboutVisible]);

  // Initialize Leaflet Map
  useEffect(() => {
    if (typeof window !== "undefined" && L && mapRef.current) {
      const map = L.map(mapRef.current, {
        dragging: false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        zoomControl: false,
      }).setView([13.24137, 123.56619], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([13.24137, 123.56619])
        .addTo(map)
        .bindPopup("SJ Handicrafts Location")
        .openPopup();
    }
  }, []);

  return (
    <div className="bg-transparent h-700px w-full flex flex-col z-10 overflow-auto scroll-bar">
      <div className="w-full h-fit bg-black/[.55]">
        <Header />

        <div className="w-full h-[700px] bg-[#65482C]/[.5] flex flex-row">
          <div className="bg-transparent w-full h-full flex flex-col items-center justify-center px-10 md:px-20">
            <div className="flex-col flex w-full items-center justify-center gap-1 mb-8">
              <h1 className="text-[#FFE4CC] text-[35px] font-merriweatherBold animate-slideInTop">SJ HANDICRAFTS</h1>
              <p className="text-[#FFE4CC] text-[14px] font-merriweatherBoldItalic animate-slideInTop">&#34;Creativity Crafted by the Community&#34;</p>
            </div>

            <p className="text-[#FFE4CC] text-[20px] font-urbanistSemiBold w-full max-w-4xl text-justify leading-[1.6] animate-slideInBottom">
              SJ Handicrafts were established last July 2020 at the hometown of my husband – Ligao City, Albay. We decided to settle in the province last 2019, because we fell in love with the slow paced environment and its simplicity. As we build our nest, we used ethical and sustainable products with the help of our local artisans and that started the birth of SJ Handicrafts – to support local artisans.
              <br /><br />
              Our handicraft product is carefully and meaningfully curated by our local artisans. We use local natural resources – Abaca and Seagrass.
              <br /><br />
              The individual artisanship of our handcrafted items is the paramount criterion of our brand.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-fit bg-black/[.55]">
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-16 py-16">
        <VideoIframe
          src="https://www.youtube.com/embed/ssFl9V4d-pg"
          isVisible={animatedSections.youtube}
          animationClass="animate-fadeIn"
          iframeRef={youtubeRef}
          autoplay
        />
        <VideoIframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsjhandicrafts04%2Fvideos%2F544571241626774%2F"
          isVisible={animatedSections.facebook}
          animationClass="animate-fadeIn"
          iframeRef={facebookRef}
        />
        </div>
      </div>

      <div className="w-full h-fit bg-[#FFE4CC]">
        <div className="w-full py-20 px-10">

          {/* Achievements & Awards Section */}
          <div className="w-full max-w-7xl mx-auto">
            <h2 
              className={`text-4xl text-[#65482C] font-poppinsBold text-center mb-16 ${animatedSections.companyAbout ? "animate-slideInTop" : ""} opacity-0`}
              style={{ animationDelay: "0.4s" }}
            >
              Achievements & Awards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Award Card 1 */}
              <div 
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 ${animatedSections.companyAbout ? "animate-cardSlideUp" : ""}`}
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#AD9073] to-[#65482C] rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppinsBold text-[#65482C] text-center mb-4">Excellence Award</h3>
                <p className="text-[#65482C] font-poppinsMedium text-center text-lg mb-2">2023</p>
                <p className="text-[#65482C]/80 font-poppinsRegular text-center text-sm">Recognized for outstanding craftsmanship and quality in handmade products</p>
              </div>

              {/* Award Card 2 */}
              <div 
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 ${animatedSections.companyAbout ? "animate-cardSlideUp" : ""}`}
                style={{ animationDelay: "0.6s" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#AD9073] to-[#65482C] rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppinsBold text-[#65482C] text-center mb-4">Community Impact</h3>
                <p className="text-[#65482C] font-poppinsMedium text-center text-lg mb-2">2022</p>
                <p className="text-[#65482C]/80 font-poppinsRegular text-center text-sm">Honored for supporting local artisans and sustainable practices</p>
              </div>

              {/* Award Card 3 */}
              <div 
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 ${animatedSections.companyAbout ? "animate-cardSlideUp" : ""}`}
                style={{ animationDelay: "0.7s" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#AD9073] to-[#65482C] rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppinsBold text-[#65482C] text-center mb-4">Quality Excellence</h3>
                <p className="text-[#65482C] font-poppinsMedium text-center text-lg mb-2">2023</p>
                <p className="text-[#65482C]/80 font-poppinsRegular text-center text-sm">Awarded for maintaining highest standards in product quality</p>
              </div>

              {/* Achievement Card 4 */}
              <div 
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 ${animatedSections.companyAbout ? "animate-cardSlideUp" : ""}`}
                style={{ animationDelay: "0.8s" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#AD9073] to-[#65482C] rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppinsBold text-[#65482C] text-center mb-4">Rapid Growth</h3>
                <p className="text-[#65482C] font-poppinsMedium text-center text-lg mb-2">2021-2024</p>
                <p className="text-[#65482C]/80 font-poppinsRegular text-center text-sm">Expanded from local to national recognition in 3 years</p>
              </div>

              {/* Achievement Card 5 */}
              <div 
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 ${animatedSections.companyAbout ? "animate-cardSlideUp" : ""}`}
                style={{ animationDelay: "0.9s" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#AD9073] to-[#65482C] rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppinsBold text-[#65482C] text-center mb-4">Sustainable Practices</h3>
                <p className="text-[#65482C] font-poppinsMedium text-center text-lg mb-2">2022</p>
                <p className="text-[#65482C]/80 font-poppinsRegular text-center text-sm">Certified for eco-friendly production using natural materials</p>
              </div>

              {/* Achievement Card 6 */}
              <div 
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 ${animatedSections.companyAbout ? "animate-cardSlideUp" : ""}`}
                style={{ animationDelay: "1.0s" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#AD9073] to-[#65482C] rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppinsBold text-[#65482C] text-center mb-4">Artisan Partnership</h3>
                <p className="text-[#65482C] font-poppinsMedium text-center text-lg mb-2">2020-Present</p>
                <p className="text-[#65482C]/80 font-poppinsRegular text-center text-sm">Supporting 50+ local artisans with fair trade practices</p>
              </div>
            </div>
          </div>

          {/* Location and Map Section */}
          <div
            ref={companyAboutRef} 
            className="w-full max-w-6xl mx-auto mt-16"
          >
            <p className={`text-lg text-[#65482C] font-poppinsRegular mb-5 text-center ${animatedSections.companyAbout ? "animate-slideInBottom" : ""} opacity-0`}>
              <b>Location: </b>SJ Handicrafts Trading Purok 3, Brgy, Ligao, 4504 Albay
            </p>
            <div ref={mapRef} className={`h-[400px] w-full bg-white rounded-lg shadow-lg ${animatedSections.companyAbout ? "animate-cardSlideUp" : ""} opacity-0`} style={{ animationDelay: "0.2s" }}/>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
