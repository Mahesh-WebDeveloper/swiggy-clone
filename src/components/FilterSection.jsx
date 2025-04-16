import React from "react";

function FilterSection({catname,imgsrc,icon}) {
  return (
    <div className="flex items-center justify-center">
      {/* Filter Button */}
      <div className="py-2  ms-3 px-4 rounded-full border border-gray-300 shadow-md flex items-center space-x-3 cursor-pointer bg-gradient-to-r  text-black hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out font-bolder">
        <span className="text-sm font-semibold tracking-wide">{catname}</span>
        {icon && icon}
        {imgsrc &&  <div className="w-[16px] h-[16px]">
          <img
            className="h-full w-full object-contain"
            src={imgsrc}
            alt="Filter settings"
          />
        </div> }
       
      </div>
    </div>
  );
}

export default FilterSection;
