"use client";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import shielaProfile from "../../public/profiles/shiela profile.png";
import { useInView } from "../hooks/useInView";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import companyLogo from '../../public/logos/company logo.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function AboutUs() {
  const [youtubeRef, youtubeVisible] = useInView<HTMLIFrameElement>({ threshold: 0.5 });
  const [facebookRef, facebookVisible] = useInView<HTMLIFrameElement>({ threshold: 0.5 }); 
  const [companyAboutRef, companyAboutVisible] = useInView<HTMLIFrameElement>({ threshold: 0.5 });
  const mapRef = useRef<HTMLDivElement>(null); // Ref for the map container

  const [animatedSections, setAnimatedSections] = useState({
      youtube: false,
      facebook: false,
      companyAbout: false,
    });

    useEffect(() => {
      setAnimatedSections(prev => ({
        ...prev,
        youtube: youtubeVisible || prev.youtube,
        facebook: facebookVisible || prev.facebook,
        companyAbout: companyAboutVisible || prev.companyAbout
      }));
    }, [youtubeVisible, facebookVisible, companyAboutVisible]);
    
  useEffect(() => {
    if (youtubeVisible && youtubeRef.current) {
      const iframe = youtubeRef.current;
      const iframeWindow = iframe.contentWindow;

      if (iframeWindow) {
        iframeWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'playVideo'
          }),
          '*'
        );
      }
    }
  }, [youtubeVisible, youtubeRef]);

  useEffect(() => {
    if (facebookVisible && facebookRef.current) {
      const facebookIframe = facebookRef.current;
      const iframeWindow = facebookIframe.contentWindow;

      if (iframeWindow) {
        iframeWindow.postMessage(
          JSON.stringify({
            method: 'play'
          }),
          '*'
        );
      }
    }
  }, [facebookVisible, facebookRef]);

  // Initialize Leaflet map
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
  
      L.Icon.Default.prototype.options = {
        ...L.Icon.Default.prototype.options,
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      };
  
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
          <div className="bg-transparent w-[42%] h-full flex justify-end relative mt-2">
            <Image
              src={shielaProfile}
              width={500}
              height={500}
              alt="background"
              className="w-[60%] h-[70%] absolute top-10 left-[15%] animate-fadeIn"
            />
          </div>

          <div className="bg-transparent w-[58%] h-full flex flex-col items-center mt-2">
            <div className="flex-col flex w-full items-center justify-center gap-1 mt-10">
              <h1 className="text-[#FFE4CC] text-[35px] font-merriweatherBold animate-slideInTop">SJ HANDICRAFTS</h1>
              <p className="text-[#FFE4CC] text-[14px] font-merriweatherBoldItalic animate-slideInTop">&#34;Creativity Crafted by the Community&#34;</p>
            </div>

            <p className="text-[#FFE4CC] text-[20px] font-urbanistSemiBold w-[90%] text-justify mt-12 leading-[1.6] animate-slideInBottom">
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
          <iframe
            className={`${ animatedSections.youtube ? "animate-fadeIn" : ""} opacity-0`}
            ref={youtubeRef}
            width="90%"
            height="500"
            src={youtubeVisible ? `https://www.youtube.com/embed/ssFl9V4d-pg?autoplay=1&mute=1&${Date.now()}` : "https://www.youtube.com/embed/ssFl9V4d-pg"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>

          <iframe
            className={`mt-14 $ ${ animatedSections.facebook ? "animate-fadeIn" : ""} opacity-0`}
            ref={facebookRef}
            width="90%"
            height="500"
            src={facebookVisible ? 
              `https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Fsjhandicrafts04%2Fvideos%2F544571241626774%2F&show_text=false&width=560&t=0` 
              : `https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Fsjhandicrafts04%2Fvideos%2F544571241626774%2F&show_text=false&width=560&t=0`}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="w-full h-fit bg-[#FFE4CC]">
          <div className="h-[750px] w-full flex flex-row justify-center gap-10 bg-black/[.15]">
            <div
              ref={companyAboutRef} 
              className="w-[45%] h-full justify-center flex flex-col gap-5">
               <p className={`text-lg text-[#65482C] font-poppinsRegular ${animatedSections.companyAbout ? "animate-slideInBottom" : ""} opacity-0`}><b>Location: </b>SJ Handicrafts Trading Purok 3, Brgy, Ligao, 4504 Albay</p>
              <div ref={mapRef} className={`h-[400px] w-full bg-white rounded-lg ${animatedSections.companyAbout ? "animate-fadeIn" : ""} opacity-0`}/>
            </div>

            <div className="w-[45%] h-full flex ms-20 relative">
              <Image
                width={500}
                height={500}
                src={companyLogo}
                className={`w-[250px] h-[250px] mt-20 ${animatedSections.companyAbout ? "animate-fadeIn" : ""} opacity-0`}
                alt="Company Logo"
              />
              <p 
                className={`absolute top-[12%] right-[40%] text-2xl text-[#65482C] font-poppinsBold ${animatedSections.companyAbout ? "fade-in-left2" : ""} opacity-0`}
                style={{ animationDelay: "0.3s" }}
              >
                Core Values
              </p>
              <p 
                className={`absolute top-[20%] right-[35%] text-2xl text-[#65482C] font-poppinsBold ${animatedSections.companyAbout ? "fade-in-left2" : ""} opacity-0`}
                style={{ animationDelay: "0.4s" }}
              >
                Excellence
              </p>
              <p 
                className={`absolute top-[35%] right-[45%] text-2xl text-[#65482C] font-poppinsBold ${animatedSections.companyAbout ? "fade-in-left2" : ""} opacity-0`}
                style={{ animationDelay: "0.5s" }}
              >
                Quality
              </p>
              <p 
                className={`absolute top-[45%] right-[55%] text-2xl text-[#65482C] font-poppinsBold ${animatedSections.companyAbout ? "fade-in-left2" : ""} opacity-0`}
                style={{ animationDelay: "0.6s" }}
              >
                Social Responsibility
              </p>
            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}
