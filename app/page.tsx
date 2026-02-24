"use client";
import Image from "next/image";
import heroLogo from '../public/logos/sj handicrafts hero logo.png';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useInView } from "./hooks/useInView";
import { useState, useEffect } from "react";
import Link from "next/link";

// Handicrafts images from public folder
const handicraftImages = [
  "/images/about_us_image_1.jpg",
  "/images/about_us_image_2.jpg",
  "/images/about_us_image_3.jpg",
  "/images/about_us_image_4.jpg",
  "/images/about_us_image_5.jpg",
];

// Handicrafts images from public folder
const productImages = [
  "/products/baskets/basket1.jpg",
  "/products/baskets/basket2.jpg",
  "/products/placemats/placemat1.jpg",
  "/products/placemats/placemat2.jpg",
  "/products/placemats/placemat3.jpg",
];

const visionImage = "/images/vision_image.jpg";
const missionImage = "/images/mission_image.jpg";
const excellenceImage = "/images/excellence_image.jpg";
const qualityImage = "/images/quality_image.jpg";
const socialResponsibilityImage = "/images/social_responsibility_image.jpg";

export default function Home() {
  const [aboutRef, aboutVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [coreValuesRef, coreValuesVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [qualityRef, qualityVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [socialResponsibilityRef, socialResponsibilityVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [missionVisionRef, missionVisionVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [productRef, productVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselImage] = useState(productImages);
  const [isCarouselTransitioning, setIsCarouselTransitioning] = useState(false);

  const [aboutImageIndex, setAboutImageIndex] = useState(0);
  const [isAboutImageTransitioning, setIsAboutImageTransitioning] = useState(false);
  const [aboutImageDirection, setAboutImageDirection] = useState<'left' | 'right'>('right');
  const aboutImages = [handicraftImages[0], handicraftImages[1], handicraftImages[2], handicraftImages[3], handicraftImages[4]];

  const prevSlide = () => {
    if (isCarouselTransitioning) return;
    setIsCarouselTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? carouselImage.length - 1 : prev - 1));
    setTimeout(() => setIsCarouselTransitioning(false), 800);
  };
  
  const nextSlide = () => {
    if (isCarouselTransitioning) return;
    setIsCarouselTransitioning(true);
    setCurrentIndex((prev) => (prev === carouselImage.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsCarouselTransitioning(false), 800);
  };

  const prevAboutImage = () => {
    if (isAboutImageTransitioning) return;
    setIsAboutImageTransitioning(true);
    setAboutImageDirection('left');
    setAboutImageIndex((prev) => (prev === 0 ? aboutImages.length - 1 : prev - 1));
    setTimeout(() => setIsAboutImageTransitioning(false), 800);
  };

  const nextAboutImage = () => {
    if (isAboutImageTransitioning) return;
    setIsAboutImageTransitioning(true);
    setAboutImageDirection('right');
    setAboutImageIndex((prev) => (prev === aboutImages.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAboutImageTransitioning(false), 800);
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
        <div className="w-full h-screen flex">
          <div className="bg-transparent w-[42%] h-full flex justify-end relative mt-2">
            <div className="w-[96%] h-[86%] absolute top-0 left-[15%] opacity-0 animate-zoomIn" style={{ animationDelay: "0.2s" }}>
              <Image
                src={heroLogo}
                width={500}
                height={500}
                alt="background"
                className="w-full h-full animate-float"
                style={{ animationDelay: "1.8s" }}
              />
            </div>
          </div>

          <div className="bg-transparent w-[58%] h-full flex mt-64">
            <h1 className="text-[#FFE4CC] w-[80%] text-[65px] ms-24 leading-[1.2] font-krono mb-20 animate-slideInLeft animate-glow" style={{ animationDelay: "0.5s" }}>
              <span className="inline-block opacity-0 animate-textReveal" style={{ animationDelay: "0.8s" }}>Creativity</span>{" "}
              <span className="inline-block opacity-0 animate-textReveal" style={{ animationDelay: "1.0s" }}>Crafted</span>{" "}
              <span className="inline-block opacity-0 animate-textReveal" style={{ animationDelay: "1.2s" }}>by</span>{" "}
              <span className="inline-block opacity-0 animate-textReveal" style={{ animationDelay: "1.4s" }}>the</span>{" "}
              <span className="inline-block opacity-0 animate-textReveal" style={{ animationDelay: "1.6s" }}>Community</span>
            </h1>
          </div>
        </div>
      </div>


      {/* Page About Us Display */}
      <div className="w-full h-fit vh bg-[#FFE4CC] flex justify-center">
        <div className="w-[80%] h-[1200px] bg-transparent flex flex-row items-center">

          <div
            ref={aboutRef}
            className={`w-[45%] h-full flex items-center relative ${animatedSections.about ? "animate-fadeIn" : ""}`}
          >
            
            {/* Image Carousel - Domino Flow */}
            <div className="relative w-full h-fit flex items-center justify-center px-4">

              <div 
                className="flex items-center gap-4 transition-transform duration-800 ease-out"
                style={{
                  transform: `translateX(calc(50% - 150px - ${aboutImageIndex * 184}px))`
                }}
              >
                {aboutImages.map((img, index) => {
                  const isActive = index === aboutImageIndex;
                  const offset = index - aboutImageIndex;
                  
                  return (
                    <div
                      key={index}
                      className={`flex-shrink-0 transition-all duration-500 relative ${
                        isActive ? 'scale-100 z-10 opacity-100' : 'scale-75 opacity-25 z-0'
                      }`}
                      style={{
                        width: '180px',
                        height: '440px',
                        marginLeft: offset === 0 ? '0' : offset > 0 ? '-20px' : '20px'
                      }}
                    >
                      <Image
                        src={img}
                        width={500}
                        height={500}
                        alt={`About us image ${index + 1}`}
                        className={`w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500 ${
                          isActive ? "ring-4 ring-[#65482C] shadow-2xl brightness-100" : "brightness-75"
                        }`}
                        unoptimized={typeof img === 'string'}
                      />
                      {isActive && (
                        <div className="absolute inset-0 border-4 border-[#65482C] rounded-lg pointer-events-none" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <button 
                type="button" 
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-lg bg-[#65482C] hover:bg-[#8B6F47] text-[#FFE4CC] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg border-2 border-[#AD9073]/50 hover:border-[#AD9073]"
                onClick={prevAboutImage}
                disabled={isAboutImageTransitioning}
                aria-label="Previous image"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 4.5L7.5 12L15 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button 
                type="button" 
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-lg bg-[#65482C] hover:bg-[#8B6F47] text-[#FFE4CC] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg border-2 border-[#AD9073]/50 hover:border-[#AD9073]"
                onClick={nextAboutImage}
                disabled={isAboutImageTransitioning}
                aria-label="Next image"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.5L16.5 12L9 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === aboutImageIndex 
                        ? "w-6 bg-[#65482C]" 
                        : "w-2 bg-[#65482C]/40 hover:bg-[#65482C]/60"
                    }`}
                    onClick={() => {
                      if (!isAboutImageTransitioning && index !== aboutImageIndex) {
                        setIsAboutImageTransitioning(true);
                        setAboutImageDirection(index > aboutImageIndex ? 'right' : 'left');
                        setAboutImageIndex(index);
                        setTimeout(() => setIsAboutImageTransitioning(false), 800);
                      }
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          <div className="w-[55%] h-full flex flex-col gap-20 items-center justify-center ml-10">
            <h1
              className={`text-4xl text-[#65482C] w-[60%] text-center font-poppinsSemiBoldItalic ${
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

            <Link 
              href="/about-us"
              className={`btn ${animatedSections.about ? "animate-zoomIn" : "opacity-0"}`}
              style={{ animationDelay: "0.6s" }}
            >
              <span className="text">Explore More</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Core Values Section */}
      <div className="w-full h-fit bg-black/[.55] flex justify-center">
        <div className="w-[80%] h-[1200px] flex flex-col items-center justify-center">

          <h1 
          ref={coreValuesRef}
          className={`text-4xl text-[#FFE4CC] text-center font-poppinsSemiBoldItalic opacity-0 ${
                animatedSections.coreValues ? "animate-slideInTop" : ""
              }`}>
            Core Values
          </h1>
          
          <div className="w-full h-fit flex flex-row gap-20 mt-20">

            <div
              ref={coreValuesRef}
              className={`flex-1 flex flex-col items-center h-[600px] rounded-[20px] bg-[#AD9073] gap-5 opacity-0 ${
                animatedSections.coreValues ? "fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-xl text-center font-poppinsBold mt-10">Excellence</h2>
              <div className="bg-white h-[350px] w-[80%] rounded-[10px] overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image 
                  src={excellenceImage}
                  alt="Excellence in handicrafts"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transition-transform duration-300"
                  unoptimized
                />
              </div>
              <p className="text-lg text-justify w-[80%] mt-5 font-poppinsMedium">
                Our local artisans pride themselves in their artisanship skills
              </p>
            </div>

            <div
              ref={qualityRef}
              className={`flex-1 flex flex-col items-center h-[600px] rounded-[20px] bg-[#AD9073] gap-5 opacity-0 ${
                animatedSections.quality ? "fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-xl text-center mt-10 font-poppinsBold">Quality</h2>
              <div className="bg-white h-[350px] w-[80%] rounded-[10px] overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image 
                  src={qualityImage}
                  alt="Quality handicrafts"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transition-transform duration-300"
                  unoptimized
                />
              </div>
              <p className="text-lg text-justify w-[80%] mt-5 font-poppinsMedium">
                Our handmade products are of the highest quality
              </p>
            </div>

            <div
              ref={socialResponsibilityRef}
              className={`flex-1 flex flex-col items-center h-[600px] rounded-[20px] bg-[#AD9073] gap-5 opacity-0 ${
                animatedSections.socialResponsibility ? "fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.9s" }}
            >
              <h2 className="text-xl text-center mt-10 font-poppinsBold">Social Responsibility</h2>
              <div className="bg-white h-[350px] w-[80%] rounded-[10px] overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image 
                  src={socialResponsibilityImage}
                  alt="Social responsibility in handicrafts"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transition-transform duration-300"
                  unoptimized
                />
              </div>
              <p className="text-lg text-justify w-[80%] mt-5 font-poppinsMedium">
                Our commitment is to our society and community
              </p>
            </div>

          </div>

        </div>
      </div>


      <div className="w-full h-fit bg-[#FFE4CC]">

        <div className="w-full h-[1200px] bg-transparent flex flex-col items-center">

            <div className="flex flex-row w-[80%] h-[40%]">

              <div 
                ref={missionVisionRef}
                className="w-1/2 h-full flex flex-col items-center justify-center gap-10">

                <h1
                  className={`text-4xl text-[#65482C] w-[60%] text-center font-poppinsSemiBoldItalic ${
                    animatedSections.missionVision ? "animate-slideInTop" : ""
                  }`}
                >
                  Mission
                </h1>
                <p
                  className={`text-2xl text-justify text-black w-[80%] font-poppinsMedium ${
                    animatedSections.missionVision ? "animate-slideInBottom" : ""
                  }`}
                >
                  To promote quality handmade products and improve 
                  the living standards of local artisans
                </p>

              </div>

              <div className="w-1/2 h-full flex items-center justify-center mt-10">

                <div className={`bg-black h-[70%] w-[80%] rounded-lg overflow-hidden opacity-0 ${
                  animatedSections.missionVision ? "animate-zoomIn" : ""
                }`}
                style={{ animationDelay: "0.3s" }}
                >
                  <Image 
                    src={missionImage}
                    alt="Vision for handicrafts"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    unoptimized
                  />
                </div>

              </div>

            </div>

            <div className="flex flex-row w-[80%] h-[40%]">

              <div className="w-1/2 h-full flex items-center justify-center">

                <div className={`bg-black h-[70%] w-[80%] rounded-lg overflow-hidden opacity-0 ${
                  animatedSections.missionVision ? "animate-zoomIn" : ""
                }`}
                style={{ animationDelay: "0.3s" }}
                >
                  <Image 
                    src={visionImage}
                    alt="Mission for handicrafts"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    unoptimized
                  />
                </div>

              </div>

              <div 
              ref={missionVisionRef}
              className="w-1/2 h-full flex flex-col items-center justify-center gap-10">


                <h1
                  className={`text-4xl text-[#65482C] w-[60%] text-center font-poppinsSemiBoldItalic ${
                    animatedSections.missionVision ? "animate-slideInTop" : ""
                  }`}
                >
                  Vision
                </h1>
                <p
                  className={`text-2xl text-justify text-black w-[80%] font-poppinsMedium ${
                    animatedSections.missionVision ? "animate-slideInBottom" : ""
                  }`}
                >
                  To be recognize globally as one of the producers of high-quality handicrafts and to be known as 
                  a market-driven company that focuses on excellence , quality and reliability
                </p>

              </div>

            </div>


        </div>

      </div>

      {/* Page Our Product Display  */}
      <div className="w-full h-fit bg-black/[.30] flex justify-center">
        <div className="w-[80%] h-full">

          <h1 
          ref={productRef}
          className={`text-4xl text-[#FFE4CC] text-center font-poppinsSemiBoldItalic mt-20 opacity-0 ${
                animatedSections.product ? "animate-slideInTop" : ""
              }`}>
            Our Products
          </h1>

          <div className="w-full h-[700px] bg-transparent flex flex-row mt-10">

            <div 
              ref={productRef}
              className="w-1/2 h-full flex flex-col gap-20 items-center mt-24"
            >
              <p 
                className={`text-[42px] text-justify text-[#FFE4CC] w-[90%] font-poppinsMedium text-center ${animatedSections.product ? "animate-slideInBottom" : ""} opacity-0`}
              >
                Home of Handmade Crafts which is carefully meaningfully curated by our local artisans
              </p>

              <Link 
                href="/our-products"
                className={`btn mt-12 ${animatedSections.product ? "animate-zoomIn" : "opacity-0"}`}
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text">View Products</span>
              </Link>
            </div>

            <div 
              ref={productRef}
              className="w-1/2 h-full flex flex-col ps-10 gap-20 items-end me-32 relative">

                {carouselImage ? carouselImage.map((item, index) => {
                    return <div 
                            key={`${item}-${currentIndex}-${index}`}
                            className={`relative w-[70%] h-[70%] bg-black transition-all duration-800 ${
                              index === currentIndex 
                                ? "flex opacity-100 animate-carouselFade" 
                                : "hidden opacity-0"
                            }`}
                            >
                              <Image 
                                alt={`handicraft product ${index + 1}`}
                                src={item}
                                width={800}
                                height={600}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                unoptimized
                              />
                              <div className="absolute bottom-[-5%] left-[-30%] w-[200px] h-[200px] bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110 animate-float">
                                <Image 
                                  alt={`handicraft product ${index + 1} preview`}
                                  src={item}
                                  width={200}
                                  height={200}
                                  className="w-full h-full object-cover"
                                  unoptimized
                                />
                              </div> 
                          </div> }) : null
                }

              <div className="w-full  h-auto flex flex-row absolute top-[40%] left-[6%] justify-between">
                <button 
                  type="button" 
                  className="h-12 w-12 rounded-lg bg-[#65482C] hover:bg-[#8B6F47] text-[#FFE4CC] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg border-2 border-[#AD9073]/50 hover:border-[#AD9073]" 
                  onClick={prevSlide}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 4.5L7.5 12L15 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button 
                  type="button" 
                  className="h-12 w-12 rounded-lg bg-[#65482C] hover:bg-[#8B6F47] text-[#FFE4CC] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg border-2 border-[#AD9073]/50 hover:border-[#AD9073]" 
                  onClick={nextSlide}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4.5L16.5 12L9 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
                
            </div>

          </div>

        </div>

      </div>

      <Footer/>

    </div>
  );
}
