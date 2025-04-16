import React from 'react';
import '../index.css';
import { RatingStar } from './RatingStar';

function ProductCard({ image, offer, title, rating, minTime, maxTime, name, place }) {
    return (
        <div className="w-[273px]  cursor-pointer shrink-0 grow-1 border rounded-lg shadow-lg p-4 flex flex-col justify-between h-[320px]"> {/* Added fixed height */}
            {/* Image Section */}
            <div className="h-[182px] group rounded-[15px] overflow-hidden relative">
                <img 
                    src={`/images/${image}`} 
                    className="object-cover w-full h-full group-hover:scale-110 duration-100" 
                    alt={title || "Restaurant Image"} 
                />
                <div className="image-overlay w-full h-full absolute top-0 text-white left-0 flex items-end p-2 text-[23px] font-bold tracking-tighter bg-gradient-to-t from-black to-transparent">
                    {offer}
                </div>
            </div>

            {/* Details Section */}
            <div className="mt-4 flex-1">
                {/* Title */}
                <h2 className="text-black text-xl font-bold truncate">{title || "No Title Available"}</h2>

                {/* Rating and Time */}
                <div className="flex items-center text-gray-600 mt-2 text-sm">
                    <span className="flex items-center">
                        {RatingStar} 
                        <span className="ml-1 font-semibold">{rating || "N/A"}</span>
                    </span>
                    <span className="ml-4 text-xs text-gray-500">
                        {minTime}-{maxTime} Min
                    </span>
                </div>

                {/* Name and Place */}
                <div className="mt-3 text-gray-700 text-sm">
                    <span className="font-medium">{name || "Unknown"}</span>, 
                    <span className="ml-1">{place || "Location Unavailable"}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
