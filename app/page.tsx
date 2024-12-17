"use client";
import Image from "next/image";
import heroLogo from '../public/logos/sj handicrafts hero logo.png';
import aboutUsImage from '../public/about us image.png';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useInView } from "./hooks/useInView";
import { useState, useEffect } from "react";

export default function Home() {
  const [aboutRef, aboutVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [coreValuesRef, coreValuesVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [qualityRef, qualityVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [socialResponsibilityRef, socialResponsibilityVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [missionVisionRef, missionVisionVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [productRef, productVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselImage] = useState([
    "image1",
    "image1",
    "image1",
    "image1",
    "image1"
  ]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImage.length - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselImage.length - 1 ? 0 : prev + 1));
  };

  const [animatedSections, setAnimatedSections] = useState({
    coreValues: false,
    quality: false,
    socialResponsibility: false,
    about: false,
    missionVision: false,
    product: false
  });
  
  useEffect(() => {
    setAnimatedSections(prev => ({
      ...prev,
      coreValues: coreValuesVisible || prev.coreValues,
      quality: qualityVisible || prev.quality,
      socialResponsibility: socialResponsibilityVisible || prev.socialResponsibility,
      about: aboutVisible || prev.about,
      missionVision: missionVisionVisible || prev.missionVision,
      product: productVisible || prev.product,
    }));
  }, [coreValuesVisible, qualityVisible, socialResponsibilityVisible, aboutVisible, missionVisionVisible, productVisible]);


  return (
    <div className="bg-transparent h-700px w-full flex flex-col z-10 overflow-auto scroll-bar">

    <div className="w-full h-fit bg-black/[.55]">
        <Header />

        {/* Page Hero Display */}
        <div className="w-full h-[660px] flex">
          <div className="bg-transparent w-[42%] h-full flex justify-end relative mt-2 animate-slideInTop">
            <Image
              src={heroLogo}
              width={500}
              height={500}
              alt="background"
              className="w-[96%] h-[86%] absolute top-0 left-[15%]"
            />
          </div>

          <div className="bg-transparent w-[58%] h-full flex items-center mt-2">
            <h1 className="text-[#FFE4CC] w-[80%] text-[35px] ms-24 leading-[1.2] font-krono mb-20 animate-fadeIn">
              Creativity Crafted by the Community
            </h1>
          </div>
        </div>
      </div>

      {/* Page About Us Display */}
      <div className="w-full h-fit bg-[#FFE4CC]">
        <div className="w-full h-[650px] bg-transparent flex flex-row">
          <div
            ref={aboutRef}
            className={`w-[45%] h-full ${animatedSections.about ? "animate-fadeIn" : ""}`}
          >
            <Image
              src={aboutUsImage}
              width={500}
              height={500}
              alt="background"
              className="mt-30 w-full h-[90%] mt-16 ms-10"
            />
          </div>

          <div className="w-[55%] h-full flex flex-col ps-10 gap-20 items-center">
            <h1
              className={`text-4xl text-[#65482C] w-[60%] text-center mt-48 font-poppinsSemiBoldItalic ${
                animatedSections.about ? "animate-slideInTop" : ""
              }`}
            >
              About Us
            </h1>
            <p
              className={`text-2xl text-justify text-black w-[80%] font-poppinsMedium ${
                animatedSections.about ? "animate-slideInBottom" : ""
              }`}
            >
              Home of Handmade Crafts which is carefully meaningfully curated by our local artisans
            </p>

            <button className="btn cube cube-hover w-[40%]" type="button">
              <div className="bg-top">
                <div className="bg-inner"></div>
              </div>
              <div className="bg-right">
                <div className="bg-inner"></div>
              </div>
              <div className="bg">
                <div className="bg-inner"></div>
              </div>
              <div className="text">Explore More</div>
            </button>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="w-full h-fit bg-[#FFE4CC]">
        <div className="w-full h-[700px] bg-transparent flex flex-col items-center">
          <h1 
          ref={coreValuesRef}
          className={`text-4xl text-[#65482C] text-center mt-20 font-poppinsSemiBoldItalic opacity-0 ${
                animatedSections.coreValues ? "animate-slideInTop" : ""
              }`}>
            Core Values
          </h1>
          <div className="w-[80%] h-fit flex flex-row gap-20 mt-20">
            <div
              ref={coreValuesRef}
              className={`flex-1 flex flex-col items-center h-[400px] rounded-[20px] bg-[#AD9073] gap-5 opacity-0 ${
                animatedSections.coreValues ? "fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-xl text-center mt-10 font-poppinsBold">Excellence</h2>
              <div className="bg-white h-[150px] w-[80%] rounded-[10px]"></div>
              <p className="text-lg text-justify w-[80%] mt-5 font-poppinsMedium">
                Our local artisans pride themselves in their artisanship skills
              </p>
            </div>

            <div
              ref={qualityRef}
              className={`flex-1 flex flex-col items-center h-[400px] rounded-[20px] bg-[#AD9073] gap-5 opacity-0 ${
                animatedSections.quality ? "fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-xl text-center mt-10 font-poppinsBold">Quality</h2>
              <div className="bg-white h-[150px] w-[80%] rounded-[10px]"></div>
              <p className="text-lg text-justify w-[80%] mt-5 font-poppinsMedium">
                Our handmade products are of the highest quality
              </p>
            </div>

            <div
              ref={socialResponsibilityRef}
              className={`flex-1 flex flex-col items-center h-[400px] rounded-[20px] bg-[#AD9073] gap-5 opacity-0 ${
                animatedSections.socialResponsibility ? "fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.9s" }}
            >
              <h2 className="text-xl text-center mt-10 font-poppinsBold">Social Responsibility</h2>
              <div className="bg-white h-[150px] w-[80%] rounded-[10px]"></div>
              <p className="text-lg text-justify w-[80%] mt-5 font-poppinsMedium">
                Our commitment is to our society and community
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full h-fit bg-black/[.55]">

        <div className="w-full h-[700px] bg-transparent flex flex-col items-center">

            <div className="flex flex-row w-full h-1/2">

              <div 
                ref={missionVisionRef}
                className="w-1/2 h-full flex flex-col items-center justify-center gap-10">

                <h1 
                  className={`text-2xl text-[#FFE4CC] ${animatedSections.missionVision ? "animate-slideInTop" : ""} opacity-0`}
                >
                  Vision
                </h1>
                <p 
                  className={`w-[90%] text-xl text-justify leading-[2] text-[#FFE4CC] ${animatedSections.missionVision ? "animate-slideInBottom" : ""} opacity-0`}
                >
                  To be recognize globally as one of the producers of high-quality handicrafts and to be known as 
                  a market-driven company that focuses on excellence , quality and reliability
                </p>

              </div>

              <div className="w-1/2 h-full flex items-center justify-center mt-10">

                <div className="bg-black h-[90%] w-[90%]">

                </div>

              </div>

            </div>

            <div className="flex flex-row w-full h-1/2">

              <div className="w-1/2 h-full flex items-center justify-center">

                <div className="bg-black h-[90%] w-[90%]">

                </div>

              </div>

              <div 
              ref={missionVisionRef}
              className="w-1/2 h-full flex flex-col items-center justify-center gap-10">

                <h1 
                  className={`text-2xl text-[#FFE4CC] ${animatedSections.missionVision ? "animate-slideInTop" : ""} opacity-0`}
                >
                  Mission</h1>
                <p 
                  className={`w-[90%] text-xl text-justify leading-[2] text-[#FFE4CC] ${animatedSections.missionVision ? "animate-slideInBottom" : ""} opacity-0`}
                >
                  To promote quality handmade products and improve the living standards of local artisans
                </p>

              </div>

            </div>


        </div>

      </div>

      {/* Page Our Product Display  */}
      <div className="w-full h-fit bg-[#FFE4CC]">

        <h1 
          ref={productRef}
          className={`text-4xl text-[#65482C] w-full text-center  font-poppinsSemiBoldItalic mt-20 opacity-0 ${
            animatedSections.product ? "animate-slideInTop" : ""
          }`}
        >
          Our Products
        </h1>

        <div className="w-full h-[700px] bg-transparent flex flex-row mt-10">

          <div 
            ref={productRef}
            className="w-1/2 h-full flex flex-col gap-20 items-center mt-24"
          >
            <p 
              className={`text-xl text-black w-[90%] font-poppinsMedium text-center ${animatedSections.product ? "animate-slideInBottom" : ""} opacity-0`}
            >
              Home of Handmade Crafts which is carefully meaningfully curated by our local artisans
            </p>

            <button className="btn cube cube-hover mt-12" type="button">
              <div className="bg-top">
                <div className="bg-inner"></div>
              </div>
              <div className="bg-right">
                <div className="bg-inner"></div>
              </div>
              <div className="bg">
                <div className="bg-inner"></div>
              </div>
              <div className="text">View Product</div>
            </button>
          </div>

          <div 
            ref={productRef}
            className="w-1/2 h-full flex flex-col ps-10 gap-20 items-end me-32 relative">

              {carouselImage ? carouselImage.map((item, index) => {
                  return <div 
                          key={index}
                          className={`relative w-[70%] h-[70%] bg-black opacity-0 ${index === currentIndex ? "flex" : "hidden"} ${
                            animatedSections.product ? "fade-in-left" : ""
                          }`}
                          >
                            <div className="absolute bottom-[-5%] left-[-30%] w-[200px] h-[200px] bg-white">
                              <Image 
                                alt={`image ${index}`}
                                src={""}
                                width={500}
                                height={500}
                                />

                            </div> 
                        </div> }) : null
              }

            <div className="w-full  h-auto flex flex-row absolute top-[40%] left-[6%] justify-between">
              <button type="button" className="h-auto w-auto rounded-full bg-black/[.5] p-1" onClick={prevSlide}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 4.5L7.5 12L15 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button type="button" className="h-auto w-auto rounded-full bg-black/[.5] p-1" onClick={nextSlide}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.5L16.5 12L9 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
              
          </div>

        </div>

      </div>

      <Footer/>

    </div>
  );
}
