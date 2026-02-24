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

// Handicrafts images from public folder
const brandLogosImages = [
  "/logos/kultura_logo.png",
  "/logos/s&r_logo.png",
  "/logos/hilton_and_resorts_logo.png",
  "/logos/lcc_logo.png",
  "/logos/puregold_logo.png",
];

export default function AboutUs() {
  const [youtubeRef, youtubeVisible] = useInView<HTMLIFrameElement>({ threshold: 0.5 });
  const [facebookRef, facebookVisible] = useInView<HTMLVideoElement>({ threshold: 0.5 });
  const [dtiImagesRef, dtiImagesVisible] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [companyAboutRef, companyAboutVisible] = useInView<HTMLDivElement>({ threshold: 0.5 });
  const [servicesRef, servicesVisible] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const [animatedSections, setAnimatedSections] = useState({
    youtube: false,
    facebook: false,
    dtiImages: false,
    companyAbout: false,
    services: false,
  });

  // Track Visibility
  useEffect(() => {
    setAnimatedSections((prev) => ({
      ...prev,
      youtube: youtubeVisible || prev.youtube,
      facebook: facebookVisible || prev.facebook,
      dtiImages: dtiImagesVisible || prev.dtiImages,
      companyAbout: companyAboutVisible || prev.companyAbout,
      services: servicesVisible || prev.services,
    }));
  }, [youtubeVisible, facebookVisible, dtiImagesVisible, companyAboutVisible, servicesVisible]);

  // Initialize Leaflet Map when section becomes visible
  useEffect(() => {
    if (typeof window !== "undefined" && L && mapRef.current && animatedSections.companyAbout && !mapInstanceRef.current) {
      // Delay to ensure container is visible and has dimensions
      const timer = setTimeout(() => {
        if (mapRef.current && !mapInstanceRef.current) {
          // Check if container has dimensions
          const rect = mapRef.current.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            try {
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

              mapInstanceRef.current = map;
              
              // Invalidate size multiple times to ensure proper rendering
              setTimeout(() => {
                if (mapInstanceRef.current) {
                  mapInstanceRef.current.invalidateSize();
                }
              }, 100);
              setTimeout(() => {
                if (mapInstanceRef.current) {
                  mapInstanceRef.current.invalidateSize();
                }
              }, 500);
            } catch (error) {
              console.error("Error initializing map:", error);
            }
          }
        }
      }, 600); // Wait for animation to complete

      return () => clearTimeout(timer);
    }
  }, [animatedSections.companyAbout]);

  return (
    <div className="bg-transparent h-700px w-full flex flex-col z-10 overflow-auto scroll-bar">
      <div className="w-full h-fit bg-black/[.55]">
        <Header />

        <div className="w-full h-[1200px] bg-[#65482C]/[.5] flex flex-row relative overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/animations/handicrafts_animation_video_1.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/[.6] z-10 shadow-[0_0_100px_50px_rgba(0,0,0,0.5)_inset,0_0_200px_100px_rgba(0,0,0,0.3)]">

          </div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-[#65482C]/[.7] z-10"></div>

          {/* Content */}
          <div className="bg-transparent w-full h-full flex flex-col items-center px-10 md:px-20 relative z-20">
            <div className="flex-col flex w-full items-center justify-center gap-1 mb-8 mt-32">
              <h1 className="text-[#FFE4CC] text-[35px] font-merriweatherBold opacity-0 animate-slideUpFadeIn" style={{ animationDelay: "0.2s" }}>SJ HANDICRAFTS</h1>
              <p className="text-[#FFE4CC] text-[14px] font-merriweatherBoldItalic opacity-0 animate-slideUpFadeIn" style={{ animationDelay: "0.4s" }}>&#34;Creativity Crafted by the Community&#34;</p>
            </div>

            <p className="text-[#FFE4CC] text-[24px] font-urbanistSemiBold w-full max-w-4xl text-justify leading-[1.6] opacity-0 animate-slideUpFadeIn" style={{ animationDelay: "0.6s" }}>
              SJ Handicrafts were established last July 2020 at the hometown of my husband – Ligao City, Albay. We decided to settle in the province last 2019, because we fell in love with the slow paced environment and its simplicity. As we build our nest, we used ethical and sustainable products with the help of our local artisans and that started the birth of SJ Handicrafts – to support local artisans.
              <br /><br />
              Our handicraft product is carefully and meaningfully curated by our local artisans. We use local natural resources – Abaca and Seagrass.
              <br /><br />
              The individual artisanship of our handcrafted items is the paramount criterion of our brand.
            </p>

            {/* Brand Logos Carousel */}
            <div className="w-full mt-16 mb-8 opacity-0 animate-slideUpFadeIn" style={{ animationDelay: "0.8s" }}>
              <h2 className="text-4xl md:text-5xl text-[#FFE4CC] font-poppinsBold text-center mb-12 mt-20">
                Our Partners
              </h2>
              <div className="relative w-full overflow-hidden group py-8">
                
                <div className="flex animate-brandCarousel group-hover:[animation-play-state:paused]">
                  {/* First set of logos */}
                  {brandLogosImages.map((logoPath, index) => {
                    const brandName = logoPath.split('/').pop()?.replace(/_/g, ' ').replace('.png', '').replace('logo', '').trim() || `Brand ${index + 1}`;
                    return (
                      <div key={`brand-1-${index}`} className="flex-shrink-0 mx-12 flex items-center justify-center h-32 w-48">
                        <Image
                          src={logoPath}
                          alt={brandName}
                          width={500}
                          height={500}
                          className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                          unoptimized
                        />
                      </div>
                    );
                  })}
                  {/* Duplicate set for seamless loop */}
                  {brandLogosImages.map((logoPath, index) => {
                    const brandName = logoPath.split('/').pop()?.replace(/_/g, ' ').replace('.png', '').replace('logo', '').trim() || `Brand ${index + 1}`;
                    return (
                      <div key={`brand-2-${index}`} className="flex-shrink-0 mx-12 flex items-center justify-center h-32 w-48">
                        <Image
                          src={logoPath}
                          alt={brandName}
                          width={500}
                          height={500}
                          className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                          unoptimized
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>

      <div className="w-full h-fit bg-black/[.55] flex flex-col justify-center items-center py-20">
        <div className="w-full max-w-7xl mx-auto px-10">
          {/* Services Section */}
          <div ref={servicesRef} className="w-full mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Service 1 */}
              <div 
                className={`relative h-[500px] rounded-2xl overflow-hidden shadow-lg opacity-0 ${animatedSections.services ? "animate-cardSlideInLeft" : ""}`}
                style={{ animationDelay: "0.4s" }}
              >
                <Image 
                  src="/images/services_image_1.png"
                  alt="Service 1"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="w-full p-8">
                    <h3 className="text-3xl text-[#FFE4CC] font-poppinsBold mb-3">
                      Services
                    </h3>
                    <p className="text-lg text-white/90 font-poppinsRegular">
                      We offer a wide range of services to our clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div 
                className={`relative h-[500px] rounded-2xl overflow-hidden shadow-lg opacity-0 ${animatedSections.services ? "animate-cardSlideInRight" : ""}`}
                style={{ animationDelay: "0.6s" }}
              >
                <Image 
                  src="/images/services_image_2.png"
                  alt="Service 2"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="w-full p-8">
                    <h3 className="text-3xl text-[#FFE4CC] font-poppinsBold mb-3">
                      Inclusive Craft
                    </h3>
                    <p className="text-lg text-white/90 font-poppinsRegular">
                      Expanding opportunities for Persons Deprived of Liberty through craftsmanship and meaningful work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Videos Section */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
            {/* YouTube Video */}
            <div className="relative w-full lg:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0">
                <VideoIframe
                  src="https://www.youtube.com/embed/ssFl9V4d-pg?si=G0ZbmxZWHrV-zkfz&start=7"
                  isVisible={animatedSections.youtube}
                  animationClass="animate-fadeIn"
                  iframeRef={youtubeRef}
                  autoplay
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end pointer-events-none">
                <div className="w-full p-8">
                  <h3 className="text-3xl text-[#FFE4CC] font-poppinsBold mb-3">
                    Our Story
                  </h3>
                  <p className="text-lg text-white/90 font-poppinsRegular">
                    Discover the journey behind our craft
                  </p>
                </div>
              </div>
            </div>

            {/* Animation Video */}
            <div className="relative w-full lg:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <video
                ref={facebookRef}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover ${animatedSections.facebook ? "animate-fadeIn" : "opacity-0"}`}
              >
                <source src="/animations/handicrafts_animation_video_2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end pointer-events-none">
                <div className="w-full p-8">
                  <h3 className="text-3xl text-[#FFE4CC] font-poppinsBold mb-3">
                    Our Craftsmanship
                  </h3>
                  <p className="text-lg text-white/90 font-poppinsRegular">
                    Experience the artistry in motion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit bg-[#FFE4CC]">
        <div className="w-full py-20 px-10">

          {/* Achievements & Awards Section */}
          <div ref={dtiImagesRef} className="w-full max-w-7xl mx-auto">
            <h2 
              className={`text-4xl text-[#65482C] font-poppinsBold text-center mb-16 ${animatedSections.dtiImages ? "animate-slideInTop" : ""} opacity-0`}
              style={{ animationDelay: "0.4s" }}
            >
              DTI Partnership & Community Engagement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Award Card 1 */}
              <div 
                className={`bg-white rounded-2xl p-0 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 overflow-hidden ${animatedSections.dtiImages ? "animate-cardFadeInScale" : ""}`}
                style={{ animationDelay: "0.5s" }}
              >
                <Image 
                  src="/images/dti_activity_image_1.png"
                  alt="DTI Activity 1"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />
              </div>

              {/* Award Card 2 */}
              <div 
                className={`bg-white rounded-2xl p-0 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 overflow-hidden ${animatedSections.dtiImages ? "animate-cardSlideInLeft" : ""}`}
                style={{ animationDelay: "0.6s" }}
              >
                <Image 
                  src="/images/dti_activity_image_2.png"
                  alt="DTI Activity 2"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />
              </div>

              {/* Award Card 3 */}
              <div 
                className={`bg-white rounded-2xl p-0 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 overflow-hidden ${animatedSections.dtiImages ? "animate-cardSlideInRight" : ""}`}
                style={{ animationDelay: "0.7s" }}
              >
                <Image 
                  src="/images/dti_activity_image_3.png"
                  alt="DTI Activity 3"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />
              </div>

              {/* Achievement Card 4 */}
              <div 
                className={`bg-white rounded-2xl p-0 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 overflow-hidden ${animatedSections.dtiImages ? "animate-cardZoomIn" : ""}`}
                style={{ animationDelay: "0.8s" }}
              >
                <Image 
                  src="/images/dti_activity_image_4.png"
                  alt="DTI Activity 4"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />
              </div>

              {/* Achievement Card 5 */}
              <div 
                className={`bg-white rounded-2xl p-0 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 overflow-hidden ${animatedSections.dtiImages ? "animate-cardSlideUp" : ""}`}
                style={{ animationDelay: "0.9s" }}
              >
                <Image 
                  src="/images/dti_activity_image_5.png"
                  alt="DTI Activity 5"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />
              </div>

              {/* Achievement Card 6 */}
              <div 
                className={`bg-white rounded-2xl p-0 shadow-lg border-2 border-[#AD9073]/30 card-hover-effect opacity-0 overflow-hidden ${animatedSections.dtiImages ? "animate-cardFadeInScale" : ""}`}
                style={{ animationDelay: "1.0s" }}
              >
                <Image 
                  src="/images/dti_activity_image_6.png"
                  alt="DTI Activity 6"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location and Map Section */}
      <div className="w-full h-fit bg-transparent py-20">
        <div className="w-full max-w-6xl mx-auto px-10">
          <div
            ref={companyAboutRef} 
            className="w-full"
          >
            <h2 className={`text-4xl text-[#FFE4CC] font-poppinsBold text-center mb-8 ${animatedSections.companyAbout ? "animate-slideInTop" : ""} opacity-0`} style={{ animationDelay: "0.2s" }}>
              Visit Us
            </h2>
            <p className={`text-lg text-[#FFE4CC] font-poppinsRegular mb-8 text-center ${animatedSections.companyAbout ? "animate-slideInBottom" : ""} opacity-0`} style={{ animationDelay: "0.3s" }}>
              <b>Location: </b>SJ Handicrafts Trading Purok 3, Brgy, Ligao, 4504 Albay
            </p>
            <div 
              ref={mapRef} 
              className={`h-[500px] w-full bg-white rounded-lg shadow-lg ${animatedSections.companyAbout ? "animate-cardSlideUp" : ""} ${animatedSections.companyAbout ? "opacity-100" : "opacity-0"}`} 
              style={{ animationDelay: "0.4s", position: "relative", zIndex: 1, minHeight: "500px" }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
