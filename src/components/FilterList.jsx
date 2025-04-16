import React from "react";

function FilterList({ title }) {
  return (
    <div className="">
      <div className="px-6  hover:cursor-pointer hover:bg-gray-100 hover:scale-95 my-2 py-4 border border-gray-300 shadow-lg rounded-xl bg-white text-gray-800 ms-3 font-semibold text-lg text-center">
        {title}
      </div>
    </div>
  );
}

export default FilterList;
