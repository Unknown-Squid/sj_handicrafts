"use client";
import Image from "next/image";
import heroLogo from '../public/logos/sj handicrafts hero logo.png';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PartnersCarousel from "./components/partners-carousel/PartnersCarousel";
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
  const [isMobile, setIsMobile] = useState(false);
  const aboutImages = [handicraftImages[0], handicraftImages[1], handicraftImages[2], handicraftImages[3], handicraftImages[4]];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <div className="bg-transparent min-h-screen w-full flex flex-col z-10 overflow-auto scroll-bar">

     <div className="w-full h-fit bg-black/[.55]">
        <Header />

        {/* Page Hero Display */}
        <div className="w-full min-h-[1200px]flex flex-col justify-center items-center overflow-hidden">
 
          <div className="bg-transparent w-full h-auto flex justify-center items-center relative mt-2">
            <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] opacity-0 animate-zoomIn flex-shrink-0" style={{ animationDelay: "0.2s" }}>
              <Image
                src={heroLogo}
                width={800}
                height={800}
                alt="background"
                className="w-full h-full animate-float"
                style={{ animationDelay: "1.8s" }}
              />
            </div>
          </div>

          <div className="bg-transparent w-full h-auto flex items-center justify-center px-4">
            <h1 className="text-[#FFE4CC] w-full text-[32px] sm:text-[42px] lg:text-[65px] leading-[1.2] font-krono mb-10 lg:mb-20 text-center animate-slideInLeft animate-glow" style={{ animationDelay: "0.5s" }}>
              <span className="inline-block opacity-0 animate-textReveal" style={{ animationDelay: "0.8s" }}>Creativity</span>{" "}
              <span className="inline-block opacity-0 animate-textReveal" style={{ animationDelay: "1.0s" }}>Crafted</span>{" "}
              <span className="inline-block opacity-0 animate-textReveal" style={{ animationDelay: "1.2s" }}>by</span>{" "}
              <span className="inline-block opacity-0 animate-textReveal" style={{ animationDelay: "1.4s" }}>the</span>{" "}
              <span className="inline-block opacity-0 animate-textReveal" style={{ animationDelay: "1.6s" }}>Community</span>
            </h1>
          </div>

          {/* Partners Carousel - Full Width */}
          <div className="w-full h-fit overflow-hidden">
            <PartnersCarousel showTitle={true} animationDelay="2.0s" className="!mt-0" />
          </div>
        </div>
      </div>


      {/* Page About Us Display */}
      <div className="w-full h-fit vh bg-[#FFE4CC] flex justify-center py-10 md:py-0">
        <div className="w-[95%] md:w-[80%] min-h-[800px] md:h-[1200px] bg-transparent flex flex-col md:flex-row items-center gap-8 md:gap-0">

          <div
            ref={aboutRef}
            className={`w-full md:w-[45%] h-[400px] md:h-full flex items-center justify-center relative ${animatedSections.about ? "animate-fadeIn" : ""}`}
          >
            
            {/* Image Carousel - Domino Flow */}
            <div className="relative w-full h-full flex items-center justify-center px-4 md:px-4">

              <div 
                className="flex items-center gap-2 md:gap-4 transition-transform duration-800 ease-out"
                style={{
                  transform: isMobile 
                    ? `translateX(calc(50% - 60px - ${aboutImageIndex * 130}px))`
                    : `translateX(calc(50% - 150px - ${aboutImageIndex * 184}px))`
                }}
              >
                {aboutImages.map((img, index) => {
                  const isActive = index === aboutImageIndex;
                  const offset = index - aboutImageIndex;
                  
                  return (
                    <div
                      key={index}
                      className={`flex-shrink-0 transition-all duration-500 relative ${
                        isActive ? 'scale-100 z-10 opacity-100' : 'scale-75 opacity-25 z-0 hidden md:block'
                      }`}
                      style={{
                        width: isMobile ? '120px' : '180px',
                        height: isMobile ? '300px' : '440px',
                        marginLeft: offset === 0 ? '0' : offset > 0 ? (isMobile ? '-10px' : '-20px') : (isMobile ? '10px' : '20px')
                      }}
                    >
                      <Image
                        src={img}
                        width={500}
                        height={500}
                        alt={`About us image ${index + 1}`}
                        className={`w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500 ${
                          isActive ? "ring-2 md:ring-4 ring-[#65482C] shadow-2xl brightness-100" : "brightness-75"
                        }`}
                        unoptimized={typeof img === 'string'}
                      />
                      {isActive && (
                        <div className="absolute inset-0 border-2 md:border-4 border-[#65482C] rounded-lg pointer-events-none" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <button 
                type="button" 
                className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-lg bg-[#65482C] hover:bg-[#8B6F47] text-[#FFE4CC] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg border-2 border-[#AD9073]/50 hover:border-[#AD9073]"
                onClick={prevAboutImage}
                disabled={isAboutImageTransitioning}
                aria-label="Previous image"
              >
                <svg width="18" height="18" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 4.5L7.5 12L15 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button 
                type="button" 
                className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-lg bg-[#65482C] hover:bg-[#8B6F47] text-[#FFE4CC] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg border-2 border-[#AD9073]/50 hover:border-[#AD9073]"
                onClick={nextAboutImage}
                disabled={isAboutImageTransitioning}
                aria-label="Next image"
              >
                <svg width="18" height="18" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.5L16.5 12L9 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-[-30px] md:bottom-[-40px] left-1/2 -translate-x-1/2 z-20 flex gap-2">
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

          <div className="w-full md:w-[55%] h-full flex flex-col gap-8 md:gap-20 items-center justify-center px-4 md:px-0 md:ml-10">
            <h1
              className={`text-3xl md:text-4xl text-[#65482C] w-full md:w-[60%] text-center font-poppinsSemiBoldItalic ${
                animatedSections.about ? "animate-slideInTop" : ""
              }`}
            >
              About Us
            </h1>
            <p
              className={`text-lg md:text-2xl text-justify text-black w-full md:w-[80%] font-poppinsMedium ${
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
              <span className="text-[1.5rem] md:text-[1.3rem] lg:text-[2rem]">Explore More</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Core Values Section */}
      <div className="w-full h-fit bg-black/[.55] flex justify-center py-10 md:py-0">
        <div className="w-[95%] md:w-[80%] min-h-[1400px] md:h-[1200px] flex flex-col items-center justify-center">

          <h1 
          ref={coreValuesRef}
          className={`text-3xl md:text-4xl text-[#FFE4CC] text-center font-poppinsSemiBoldItalic opacity-0 ${
                animatedSections.coreValues ? "animate-slideInTop" : ""
              }`}>
            Core Values
          </h1>
          
          <div className="w-full h-fit flex flex-col md:flex-row gap-8 md:gap-20 mt-10 md:mt-20">

            <div
              ref={coreValuesRef}
              className={`w-full md:flex-1 flex flex-col items-center min-h-[500px] md:h-[600px] rounded-[20px] bg-[#AD9073] gap-5 opacity-0 ${
                animatedSections.coreValues ? "fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-lg md:text-xl text-center font-poppinsBold mt-6 md:mt-10">Excellence</h2>
              <div className="bg-white h-[250px] md:h-[350px] w-[90%] md:w-[80%] rounded-[10px] overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image 
                  src={excellenceImage}
                  alt="Excellence in handicrafts"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transition-transform duration-300"
                  unoptimized
                />
              </div>
              <p className="text-base md:text-lg text-justify w-[90%] md:w-[80%] mt-3 md:mt-5 font-poppinsMedium">
                Our local artisans pride themselves in their artisanship skills
              </p>
            </div>

            <div
              ref={qualityRef}
              className={`w-full md:flex-1 flex flex-col items-center min-h-[500px] md:h-[600px] rounded-[20px] bg-[#AD9073] gap-5 opacity-0 ${
                animatedSections.quality ? "fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-lg md:text-xl text-center mt-6 md:mt-10 font-poppinsBold">Quality</h2>
              <div className="bg-white h-[250px] md:h-[350px] w-[90%] md:w-[80%] rounded-[10px] overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image 
                  src={qualityImage}
                  alt="Quality handicrafts"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transition-transform duration-300"
                  unoptimized
                />
              </div>
              <p className="text-base md:text-lg text-justify w-[90%] md:w-[80%] mt-3 md:mt-5 font-poppinsMedium">
                Our handmade products are of the highest quality
              </p>
            </div>

            <div
              ref={socialResponsibilityRef}
              className={`w-full md:flex-1 flex flex-col items-center min-h-[500px] md:h-[600px] rounded-[20px] bg-[#AD9073] gap-5 opacity-0 ${
                animatedSections.socialResponsibility ? "fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.9s" }}
            >
              <h2 className="text-lg md:text-xl text-center mt-6 md:mt-10 font-poppinsBold">Social Responsibility</h2>
              <div className="bg-white h-[250px] md:h-[350px] w-[90%] md:w-[80%] rounded-[10px] overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image 
                  src={socialResponsibilityImage}
                  alt="Social responsibility in handicrafts"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transition-transform duration-300"
                  unoptimized
                />
              </div>
              <p className="text-base md:text-lg text-justify w-[90%] md:w-[80%] mt-3 md:mt-5 font-poppinsMedium">
                Our commitment is to our society and community
              </p>
            </div>

          </div>

        </div>
      </div>


      <div className="w-full h-fit bg-[#FFE4CC] py-10 md:py-0">

        <div className="w-full min-h-[1000px] md:h-[1200px] bg-transparent flex flex-col items-center gap-8 md:gap-0">

            <div className="flex flex-col md:flex-row w-[95%] md:w-[80%] min-h-[400px] md:h-[40%] gap-6 md:gap-0">

              <div 
                ref={missionVisionRef}
                className="w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-6 md:gap-10 order-2 md:order-1">

                <h1
                  className={`text-3xl md:text-4xl text-[#65482C] w-full md:w-[60%] text-center font-poppinsSemiBoldItalic ${
                    animatedSections.missionVision ? "animate-slideInTop" : ""
                  }`}
                >
                  Mission
                </h1>
                <p
                  className={`text-lg md:text-2xl text-justify text-black w-full md:w-[80%] font-poppinsMedium ${
                    animatedSections.missionVision ? "animate-slideInBottom" : ""
                  }`}
                >
                  To promote quality handmade products and improve 
                  the living standards of local artisans
                </p>

              </div>

              <div className="w-full md:w-1/2 h-[300px] md:h-full flex items-center justify-center mt-0 md:mt-10 order-1 md:order-2">

                <div className={`bg-black h-full md:h-[70%] w-full md:w-[80%] rounded-lg overflow-hidden opacity-0 ${
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

            <div className="flex flex-col md:flex-row w-[95%] md:w-[80%] min-h-[400px] md:h-[40%] gap-6 md:gap-0">

              <div className="w-full md:w-1/2 h-[300px] md:h-full flex items-center justify-center order-1 md:order-1">

                <div className={`bg-black h-full md:h-[70%] w-full md:w-[80%] rounded-lg overflow-hidden opacity-0 ${
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
              className="w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-6 md:gap-10 order-2 md:order-2">


                <h1
                  className={`text-3xl md:text-4xl text-[#65482C] w-full md:w-[60%] text-center font-poppinsSemiBoldItalic ${
                    animatedSections.missionVision ? "animate-slideInTop" : ""
                  }`}
                >
                  Vision
                </h1>
                <p
                  className={`text-lg md:text-2xl text-justify text-black w-full md:w-[80%] font-poppinsMedium ${
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
      <div className="w-full h-fit bg-black/[.30] flex justify-center py-10 md:py-0">
        <div className="w-[95%] md:w-[80%] h-full">

          <h1 
          ref={productRef}
          className={`text-3xl md:text-4xl text-[#FFE4CC] text-center font-poppinsSemiBoldItalic mt-10 md:mt-20 opacity-0 ${
                animatedSections.product ? "animate-slideInTop" : ""
              }`}>
            Our Products
          </h1>

          <div className="w-full min-h-[800px] md:h-[700px] bg-transparent flex flex-col md:flex-row mt-6 md:mt-10 gap-8 md:gap-0">

            <div 
              ref={productRef}
              className="w-full md:w-1/2 h-full flex flex-col gap-8 md:gap-20 items-center mt-0 md:mt-24 order-2 md:order-1 px-4 md:px-0"
            >
              <p 
                className={`text-2xl md:text-[42px] text-[#FFE4CC] w-full md:w-[90%] font-poppinsMedium text-left leading-tight ${animatedSections.product ? "animate-slideInBottom" : ""} opacity-0`}
              >
                Home of Handmade Crafts which is carefully meaningfully curated by our local artisans
              </p>

              <Link 
                href="/our-products"
                className={`btn mt-4 md:mt-12 ${animatedSections.product ? "animate-zoomIn" : "opacity-0"}`}
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-[1.5rem] md:text-[1.3rem] lg:text-[2rem]">View Products</span>
              </Link>
            </div>

            <div 
              ref={productRef}
              className="w-full md:w-1/2 h-[400px] md:h-full flex flex-col ps-0 md:ps-10 gap-8 md:gap-20 items-center md:items-end me-0 md:me-32 relative order-1 md:order-2">

                {carouselImage ? carouselImage.map((item, index) => {
                    return <div 
                            key={`${item}-${currentIndex}-${index}`}
                            className={`relative w-[85%] md:w-[70%] h-[85%] md:h-[70%] bg-black transition-all duration-800 ${
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
                              <div className="absolute bottom-[-8%] md:bottom-[-5%] left-[-20%] md:left-[-30%] w-[120px] h-[120px] md:w-[200px] md:h-[200px] bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110 animate-float hidden md:block">
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

              <div className="w-full h-auto flex flex-row absolute top-[45%] md:top-[40%] left-1/2 md:left-[6%] -translate-x-1/2 md:translate-x-0 justify-between px-4 md:px-0">
                <button 
                  type="button" 
                  className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-[#65482C] hover:bg-[#8B6F47] text-[#FFE4CC] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg border-2 border-[#AD9073]/50 hover:border-[#AD9073]" 
                  onClick={prevSlide}
                >
                  <svg width="18" height="18" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 4.5L7.5 12L15 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button 
                  type="button" 
                  className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-[#65482C] hover:bg-[#8B6F47] text-[#FFE4CC] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg border-2 border-[#AD9073]/50 hover:border-[#AD9073]" 
                  onClick={nextSlide}
                >
                  <svg width="18" height="18" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
