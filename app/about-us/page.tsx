"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useInView } from "../hooks/useInView";

// Image Imports
import shielaProfile from "../../public/profiles/shiela profile.png";
import companyLogo from "../../public/logos/company logo.png";

// Default Leaflet Icon Settings
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Reusable Video Iframe Component
function VideoIframe({
  src,
  isVisible,
  animationClass,
  iframeRef,
  autoplay = false,
}: {
  src: string;
  isVisible: boolean;
  animationClass: string;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  autoplay?: boolean;
}) {
  const videoSrc = autoplay && isVisible ? `${src}&autoplay=1&mute=1&${Date.now()}` : src;

  return (
    <iframe
      className={`${isVisible ? animationClass : "opacity-0"}`}
      ref={iframeRef}
      width="90%"
      height="500"
      src={videoSrc}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
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
    if (mapRef.current) {
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
        {/* Hero Section */}
        <div className="w-full h-[700px] bg-[#65482C]/[.5] flex">
          <div className="w-[42%] flex justify-end relative mt-2">
            <Image
              src={shielaProfile}
              width={500}
              height={500}
              alt="background"
              className="w-[60%] h-[70%] absolute top-10 left-[15%] animate-fadeIn"
            />
          </div>
          <div className="w-[58%] flex flex-col items-center mt-2">
            <div className="flex-col w-full items-center justify-center gap-1 mt-10 text-[#FFE4CC]">
              <h1 className="text-[35px] font-merriweatherBold animate-slideInTop">SJ HANDICRAFTS</h1>
              <p className="text-[14px] font-merriweatherBoldItalic animate-slideInTop">
                &#34;Creativity Crafted by the Community&#34;
              </p>
            </div>
            <p className="text-[20px] font-urbanistSemiBold w-[90%] text-justify mt-12 leading-[1.6] animate-slideInBottom">
              SJ Handicrafts were established last July 2020 at the hometown of my husband – Ligao City, Albay...
            </p>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="w-full h-fit bg-black/[.55] py-16 flex flex-col items-center gap-16">
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

      {/* Company Information Section */}
      <div className="w-full bg-[#FFE4CC]">
        <div className="h-[750px] flex justify-center gap-10 bg-black/[.15]">
          <div ref={companyAboutRef} className="w-[45%] flex flex-col gap-5">
            <p className={`text-lg font-poppinsRegular ${animatedSections.companyAbout ? "animate-slideInBottom" : ""}`}>
              <b>Location: </b>SJ Handicrafts Trading Purok 3, Brgy, Ligao, 4504 Albay
            </p>
            <div ref={mapRef} className="h-[400px] w-full bg-white rounded-lg" />
          </div>

          {/* Core Values */}
          <div className="w-[45%] relative">
            <Image
              width={500}
              height={500}
              src={companyLogo}
              className={`w-[250px] h-[250px] mt-20 ${animatedSections.companyAbout ? "animate-fadeIn" : ""}`}
              alt="Company Logo"
            />
            {["Core Values", "Excellence", "Quality", "Social Responsibility"].map((value, index) => (
              <p
                key={index}
                className={`absolute top-[${12 + index * 8}%] right-[${40 + index * 5}%] text-2xl font-poppinsBold ${
                  animatedSections.companyAbout ? "fade-in-left2" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
