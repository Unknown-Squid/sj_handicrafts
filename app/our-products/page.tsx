"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from ".././components/footer/footer";

// Products from public folder
const products = [
  { id: 1, name: "Basket 1", category: "basket", price: 20.0, image: "/products/baskets/basket1.jpg" },
  { id: 2, name: "Basket 2", category: "basket", price: 25.0, image: "/products/baskets/basket2.jpg" },
  { id: 3, name: "Placemat 1", category: "place mat", price: 15.0, image: "/products/placemats/placemat1.jpg" },
  { id: 4, name: "Placemat 2", category: "place mat", price: 15.0, image: "/products/placemats/placemat2.jpg" },
  { id: 5, name: "Placemat 3", category: "place mat", price: 15.0, image: "/products/placemats/placemat3.jpg" },
];

export default function OurProducts() {
  const [selectedCategory, setSelectedCategory] = useState("basket");
  const [hoveredProductId, setHoveredProductId] = useState(0);

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="bg-transparent min-h-screen w-full flex flex-col z-10 overflow-x-hidden">
      <div className="w-full min-h-screen h-fit bg-black/[.55] overflow-x-hidden">
        <Header />

        <div className="w-full min-h-fit h-full p-6 md:p-10 bg-[#FFE4CC] pb-8 md:pb-10 overflow-x-hidden">
          {/* Category Buttons */}
          <div className="w-full h-fit flex flex-row items-center justify-center min-h-[80px] md:min-h-[100px] gap-6 md:gap-10 px-4 mb-4 md:mb-6">
            {["basket", "place mat"].map((category) => (
              <button
                key={category}
                type="button"
                className={`text-base md:text-lg font-poppinsMedium transition-all duration-300 px-4 py-2 rounded-lg ${
                  selectedCategory === category
                    ? "text-[#65482C] bg-[#AD9073]/30 underline font-poppinsBold"
                    : "text-[#65482C]/[0.5] hover:text-[#65482C] hover:bg-[#AD9073]/20"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Display filtered products */}
          <div className="w-full min-h-fit h-fit flex flex-wrap justify-center items-start gap-6 md:gap-10 p-4 md:p-8 relative overflow-visible">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`h-fit w-full sm:w-[280px] md:w-[300px] flex flex-col items-center gap-3 relative shadow-md hover:shadow-lg p-3 md:p-2 transition-all duration-300 hover:scale-105 mb-4 md:mb-0 ${
                  hoveredProductId === product.id ? "z-50" : "z-10"
                }`}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(0)}
              >
                <div className="bg-black w-full md:w-[90%] h-[200px] md:h-[200px] rounded-lg overflow-hidden relative flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-center text-[#65482C] font-poppinsMedium text-sm md:text-base flex-shrink-0">{product.name}</p>
                <p className="text-center text-[#65482C] font-poppinsItalic text-sm md:text-base flex-shrink-0">₱ {product.price}</p>

                {/* Preview Box - Hidden on mobile, shown on desktop hover */}
                <div
                  className={`hidden md:flex absolute top-0 right-0 translate-x-full mr-4 w-[250px] lg:w-[300px] h-[250px] lg:h-[300px] bg-white shadow-2xl items-center justify-center z-60 rounded-lg overflow-hidden transition-all duration-300 ease-out ${
                    hoveredProductId === product.id
                      ? "opacity-100 scale-100 delay-300"
                      : "opacity-0 scale-90 pointer-events-none delay-0"
                  }`}
                  style={{ maxHeight: 'calc(100vh - 2rem)' }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
