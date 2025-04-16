import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import ProductCard from "./ProductCard";
import { useRef } from "react";
import { BestRestaurantChains } from "../Api/RestaurantChains";

function TopRest() {
  const containerRef = useRef(null); // Reference to the scrollable container

  // Function to scroll left
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  // Function to scroll right
  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <>
      <div className="container z-0  mx-auto mt-9 flex justify-between items-center max-w-[1220px]">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Jodhpur
        </div>
        <div className="flex">
          <div
            className="bg-[#e2e2e7] h-[30px] cursor-pointer w-[30px] rounded-full mx-2 flex items-center justify-center"
            onClick={scrollLeft}
          >
            <FaArrowLeft />
          </div>
          <div
            className="bg-[#e2e2e7] h-[30px] cursor-pointer w-[30px] rounded-full mx-2 flex items-center justify-center"
            onClick={scrollRight}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div
        style={{
          overflowX: "auto",
          msOverflowStyle: "none", // For IE and Edge
          scrollbarWidth: "none",
          // For Firefox
        }}
        ref={containerRef}
        className="container gap-8 overflow-x-auto mx-auto mt-9 mb-9 flex justify-between items-center max-w-[1220px]"
      >
        {BestRestaurantChains.map((v, i) => (
          <ProductCard key={i} {...v} />
        ))}
      </div>
      <div className="max-w-[1220px] mx-auto ">
        <hr />
      </div>
    </>
  );
}

export default TopRest;
