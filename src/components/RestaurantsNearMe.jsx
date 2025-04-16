import React from "react";
import FilterList from "./FilterList";

function RestaurantsNearMe() {
  const RestaurantsNearMeFilterList = ["Explore Restaurants Near Me",
   " Explore Top Rated Restaurants Near Me"]
  

  return (
    <div>
      <div className="container mx-auto mb-6 mt-9 flex justify-between items-center max-w-[1220px]">
        <div className="text-[25px] font-bold">
        Explore Every Restaurants Near Me

        </div>
      </div>

      <div className="container mb-6 flex-wrap mx-auto mt-9 flex  items-center max-w-[1220px]">
        {RestaurantsNearMeFilterList.map((v, i) => (
          <FilterList title={v} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantsNearMe;
