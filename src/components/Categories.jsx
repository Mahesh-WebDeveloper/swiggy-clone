import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Apicategorydata } from "../Api/Category";

function Categories() {
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
      {/* Header Section */}
      <div className="container mx-auto mt-9 flex justify-between items-center max-w-[1220px]">
        <div className="text-[25px] font-bold">Mahesh, what's on your mind?</div>
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

      {/* Categories Section */}
      <div
        ref={containerRef}
        className="container mx-auto mt-6 overflow-x-auto max-w-[1220px] scrollbar-hide"
        style={{
          overflowX: "auto",
          msOverflowStyle: "none", // For IE and Edge
          scrollbarWidth: "none",
          // For Firefox
        }}
      >
        <div className="flex hover:cursor-pointer items-center gap-6 whitespace-nowrap">
          {Apicategorydata.map((item, index) => (
            <div key={index} className="w-[180px] hover:cursor-pointer shrink-0 text-center">
              <img
                src={`/images/${item.image}`}
                alt={item.path.replace("-", " ")}
                className="w-full h-[180] object-cover rounded-lg"
              />
              {/* <p className="mt-2 text-sm capitalize font-medium">
                {item.path.replace("-", " ")}
              </p> */}
            </div>
          ))}
        </div>
        <hr/>
      </div>
    </>
  );
}

export default Categories;
