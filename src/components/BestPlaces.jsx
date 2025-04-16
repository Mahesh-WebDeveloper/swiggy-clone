import React from "react";
import FilterList from "./FilterList";

function BestPlaces() {
  const bestRestaurantsFilterList = [
    "Best Restaurants in Bangalore",
    "Best Restaurants in Pune",
    "Best Restaurants in Mumbai",
    "Best Restaurants in Delhi",
    "Best Restaurants in Hyderabad",
    "Best Restaurants in Kolkata",
    "Best Restaurants in Chennai",
    "Best Restaurants in Chandigarh",
    "Best Restaurants in Ahmedabad",
    "Best Restaurants in Jaipur",
    "Best Restaurants in Nagpur",
  ];

  return (
    <div>
      <div className="container mx-auto mt-9 flex justify-between items-center max-w-[1220px]">
        <div className="text-[25px] font-bold">
          Best Places to Eat Across Cities
        </div>
      </div>

      <div className="container flex-wrap mx-auto mt-9 flex  items-center max-w-[1220px]">
        {bestRestaurantsFilterList.map((v, i) => (
          <FilterList title={v} />
        ))}
      </div>
    </div>
  );
}

export default BestPlaces;
