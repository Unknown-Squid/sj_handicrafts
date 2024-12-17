"use client";

import { useState } from "react";
import Header from "../components/header/header";
import Footer from ".././components/footer/footer";

// Mock data for products
const products = [
  { id: 1, name: "Basket A", category: "basket", price: 20.0, previewImage: "/images/basket-preview.jpg" },
  { id: 2, name: "Table Runner B", category: "table runner", price: 20.0, previewImage: "/images/runner-preview.jpg" },
  { id: 3, name: "Table Runner C", category: "table runner", price: 20.0, previewImage: "/images/runner-preview.jpg" },
  { id: 4, name: "Wine Holder D", category: "wine holder", price: 20.0, previewImage: "/images/holder-preview.jpg" },
  { id: 5, name: "Place Mat E", category: "place mat", price: 20.0, previewImage: "/images/mat-preview.jpg" },
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
            {["basket", "table runner", "wine holder", "place mat"].map((category) => (
              <button
                key={category}
                type="button"
                className={`text-lg font-poppinsMedium ${
                  selectedCategory === category
                    ? "text-[#65482C]"
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
                className="h-fit w-[300px] flex flex-col items-center gap-2 relative shadow-md hover:shadow-lg p-2"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(0)}
              >
                <div className="bg-black w-[90%] h-[200px]"></div>
                <p className="text-center text-[#65482C] font-poppinsMedium">{product.name}</p>
                <p className="text-center text-[#65482C] font-poppinsItalic">₱ {product.price}</p>

                {/* Preview Box */}
                {hoveredProductId === product.id && (
                  <div className="absolute bottom-[30%] left-[76%] w-[300px] h-full bg-white shadow-lg flex items-center justify-center z-10">
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
