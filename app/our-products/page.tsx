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
    <div className="bg-transparent h-700px w-full flex flex-col z-10 overflow-auto scroll-bar">
      <div className="w-full h-fit bg-black/[.55]">
        <Header />

        <div className="w-full h-[700px] bg-[#FFE4CC]">
          <div className="w-full flex flex-row items-center justify-center h-[100px] gap-10">
            {["basket", "place mat"].map((category) => (
              <button
                key={category}
                type="button"
                className={`text-lg font-poppinsMedium transition-all duration-300 ${
                  selectedCategory === category
                    ? "text-[#65482C] underline"
                    : "text-[#65482C]/[0.5] hover:text-[#65482C]"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Display filtered products */}
          <div className="w-full h-full flex flex-wrap gap-10 p-4 relative">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`h-fit w-[300px] flex flex-col items-center gap-2 relative shadow-md hover:shadow-lg p-2 transition-all duration-300 hover:scale-105 ${
                  hoveredProductId === product.id ? "z-50" : "z-10"
                }`}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(0)}
              >
                <div className="bg-black w-[90%] h-[200px] rounded-lg overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-center text-[#65482C] font-poppinsMedium">{product.name}</p>
                <p className="text-center text-[#65482C] font-poppinsItalic">₱ {product.price}</p>

                {/* Preview Box */}
                {hoveredProductId === product.id && (
                  <div className="absolute bottom-[30%] left-[76%] w-[300px] h-[300px] bg-white shadow-2xl flex items-center justify-center z-[60] rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
