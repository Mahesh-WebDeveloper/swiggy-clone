import React, { useEffect, useState, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductCard from "./ProductCard";

import { BestRestaurantChains } from "../Api/RestaurantChains";
import FilterSection from "./FilterSection";

function OnlineDelivery() {
  const [isSticky, setIsSticky] = useState(false);
  const filterSectionRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (filterSectionRef.current) {
        const filterSectionOffset = filterSectionRef.current.offsetTop;
        if (window.scrollY >= filterSectionOffset) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div  ref={filterSectionRef} className="container mx-auto mt-9 flex justify-between items-center max-w-[1220px]">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Jodhpur
        </div>
      </div>

      <div
       
        className={`z-[12] transition-all duration-300 ${
          isSticky ? "sticky  top-0 z-[99999999999] bg-white shadow-md" : ""
        }`}
      >
        <div className="container  mx-auto flex items-center max-w-[1220px] py-[20px]">
          <FilterSection catname={"Filter"} imgsrc={"images/settings-sliders.png"} />
          <FilterSection catname={"Sort By"} icon={<MdKeyboardArrowDown />} />
          <FilterSection catname={"Fast Devilery"} />
          <FilterSection catname={"New on Swiggy"} />
          <FilterSection catname={"Rating 4.0+"} />
          <FilterSection catname={"Pure Veg"} />
          <FilterSection catname={"Offers"} />
          <FilterSection catname={"Rs. 300-Rs. 600"} />
          <FilterSection catname={"Less than Rs. 300"} />
        </div>
      </div>

      <div className="container gap-8 flex-wrap mx-auto mt-9 mb-9 flex items-center max-w-[1220px]">
        {BestRestaurantChains.map((v, i) => (
          <ProductCard key={i} {...v} />
        ))}
      </div>
      <div className="max-w-[1220px] mx-auto">
        <hr />
      </div>
    </>
  );
}

export default OnlineDelivery;
