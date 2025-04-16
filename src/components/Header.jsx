import React, { useState, useEffect } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoWallet, IoBagHandleOutline, IoClose } from "react-icons/io5";
import { FaSearch, FaHandsHelping } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Slidepopup from "./Slidepopup"; // Ensure the component is properly imported

function Header() {
  const [toggle, setToggle] = useState(false);
  const [Searchtoggle, setSearchtoggle] = useState(false);
  const [accountpopup, setaccountpopup] = useState(false);

  const accountpopupfun = () => {
    setaccountpopup(!accountpopup);
  };

  const closeSearch = () => {
    setSearchtoggle(!Searchtoggle);
  };

  const showsidemenu = () => {
    setToggle(!toggle);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Disable scrolling when the menu is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", toggle);
  }, [toggle]);

  const [slidePopupVisible, setSlidePopupVisible] = useState(false);

  const toggleSlidePopup = () => {
    setSlidePopupVisible(!slidePopupVisible);
  };
  const navLinks = [
    { icon: <IoWallet fontSize={18} />, label: "Swiggy Corporate" },
    { icon: <FaSearch fontSize={18} onClick={closeSearch} />, label: "Search" },
    { icon: <BiSolidOffer fontSize={18} />, label: "Offers", sup: "New" },
    { icon: <FaHandsHelping fontSize={18} />, label: "Help" },
    {
      icon: <FiUser onClick={accountpopupfun} fontSize={18} />,
      label: "Mahesh",
    },
    {
      icon: <IoBagHandleOutline onClick={toggleSlidePopup} fontSize={18} />,
      label: "Cart",
    },
  ];

  // Slidepopup state

  const productsInCarts = [
    {
      id: 1, // Added unique id
      image: "2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg",
      offer: "Items at ₹179",
      title: "Pizza Hut",
      rating: 4.2,
      minTime: 30,
      maxTime: 40,
      name: "Pizzas",
      place: "New Jodhpur",
      quantity: 2,
      price: 499,
    },
    {
      id: 2, // Added unique id
      image: "75d0b3ebeb56fe2484c944e94cac7a8d.jpeg",
      offer: "₹50 OFF ABOVE ₹199",
      title: "Janta Sweet Home",
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: "Sweets, South Indian",
      place: "Shastri Nagar",
      quantity: 2,
      price: 499,
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={showsidemenu}
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          toggle ? "opacity-100 visible z-30" : "opacity-0 invisible"
        }`}
      >
        {/* Sidebar Menu */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 left-0 w-80 h-full z-40 bg-white shadow-lg transition-transform duration-500 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header with Close Icon */}
          <div className="flex items-center justify-between p-4 border-b mt-4">
            <h2 className="text-lg font-semibold">Location Search</h2>
            <IoClose
              onClick={showsidemenu}
              fontSize={24}
              className="cursor-pointer text-gray-500 hover:text-black"
            />
          </div>

          {/* Search Location Input */}
          <div className="p-4">
            <div className="flex items-center border rounded-md p-2 mb-4">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search location..."
                className="flex-1 outline-none"
              />
            </div>

            {/* Get Location Button */}
            <div
              onClick={handleGetLocation}
              className="w-full p-4 bg-white border border-black rounded-lg text-black flex items-center space-x-3 shadow-lg cursor-pointer transition-transform transform hover:scale-105 mt-3"
            >
              <MdLocationOn className="text-black text-3xl" />
              <div>
                <h3 className="font-semibold text-lg">Get Location</h3>
                <p className="text-sm opacity-90">
                  Use GPS to find your location
                </p>
              </div>
            </div>

            <div className="w-full p-4 bg-white border border-black rounded-lg text-black flex items-center space-x-3 shadow-lg cursor-pointer transition-transform transform hover:scale-105 mt-3">
              <MdLocationOn className="text-black text-3xl" />
              <div>
                <h3 className="font-semibold text-lg">Recent Location</h3>
                <p className="text-sm opacity-90">
                  Rajasthan, Jodhpur, Cheer Ghar
                </p>
              </div>
            </div>

            <div className="w-full p-4 bg-white border border-black rounded-lg text-black flex items-center space-x-3 shadow-lg cursor-pointer transition-transform transform hover:scale-105 mt-3 flex ">
              <div>
                <MdLocationOn className="text-black text-3xl" />
              </div>
              <div>
                <span>Saved Address</span>
                <h3 className="font-semibold text-lg">Home</h3>
                <p className="text-sm opacity-90">
                  Dev Bhawan 45,Vasundhra Hospital Shantipriy Nagar Shyam Nagar,
                  Jodhpur, Rajasthan, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <Slidepopup
        Slidepopupvalue={slidePopupVisible}
        Slidepopup={toggleSlidePopup}
        productsInCart={productsInCarts}
      />

      <header className="p-4 shadow-md text-[#3d4152] bg-white sticky top-0 z-20">
        <div className="container mx-auto flex items-center justify-between max-w-[1220px]">
          {/* Logo */}
          <div className="w-[150px]">
            <img
              src="images/footer-png-output.png"
              className="w-full brightness-150"
              alt="Swiggy Logo"
            />
          </div>

          {/* Location with Dropdown */}
          <div
            onClick={showsidemenu}
            className="flex items-center text-lg font-semibold cursor-pointer"
          >
            <span className="border-b-2 border-black mr-1">Cheerghar</span>,
            Jodhpur, Rajasthan, India
            <RxCaretDown
              onClick={showsidemenu}
              fontSize={22}
              className="text-[#ff5200] ml-1"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-5 items-center font-medium text-[15px]">
            <ul className="flex gap-6">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center cursor-pointer hover:text-[#ff5200] transition-colors duration-200"
                >
                  {link.icon}
                  {link.label === "Cart" ? (
                    <span onClick={toggleSlidePopup} className="ml-1">
                      {link.label}
                    </span>
                  ) : link.label === "Search" ? (
                    <span onClick={closeSearch} className="ml-1">
                      {link.label}
                    </span>
                  ) : link.label === "Mahesh" ? (
                    <span onClick={accountpopupfun} className="ml-1">
                      {link.label}
                    </span>
                  ) : (
                    <span className="ml-1">{link.label}</span>
                  )}

                  {link.sup && (
                    <sup
                      className={`ml-[3px] ${
                        link.sup === "New" ? "bg-yellow-300" : ""
                      } px-1 py-2 inline-block rounded`}
                    >
                      {link.sup}
                    </sup>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div
        className={`fixed flex justify-center cursor-pointer items-center inset-0 bg-black bg-opacity-60 transition-opacity duration-300 py-8 ${
          Searchtoggle ? "opacity-100 visible z-30" : "opacity-0 invisible"
        }`}
        onClick={closeSearch}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[1000px] z-50 bg-white p-6 rounded-lg shadow-2xl"
        >
          {/* Close Icon */}

          <div className="flex justify-end">
            <IoClose
              onClick={closeSearch} // Add a function to handle closing if needed
              fontSize={28}
              className="cursor-pointer text-gray-500 mb-3  top-4 hover:text-gray-800 transition-colors"
            />
          </div>

          {/* Search Input */}
          <div>
            <input
              type="text"
              placeholder="Search for restaurants and food"
              className="w-full p-4 pl-12 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 text-lg"
            />
          </div>

          {/* Popular Cuisines Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Popular Cuisines</h2>
            <div className="flex gap-4 overflow-x-auto items-center whitespace-nowrap px-2">
              {[
                "North_Indian_4.jpeg",
                "Pizza.jpeg",
                "Noodles.jpeg",
                "Pasta.jpeg",
                "Paratha.jpeg",
                "Biryani_2.jpeg",
                "Burger.jpeg",
                "Cakes.jpeg",
                "Chinese.jpeg",
                "Chole_Bature.jpeg",
                "Dosa.jpeg",
                "Gulab_Jamun.jpeg",
                "Ice_Creams.jpeg",
                "Idli.jpeg",
                "Khichdi.jpeg",
                "Poori.jpeg",
                "Pure_Veg.jpeg",
                "Rolls.jpeg",
                "Salad.jpeg",
                "South_Indian_4.jpeg",
              ].map((image, index) => (
                <div
                  key={index}
                  className="w-28 shrink-0 flex pb-4 flex-col items-center gap-2 hover:cursor-pointer"
                >
                  <img
                    src={`/images/${image}`}
                    alt={image.replace(".jpeg", "")}
                    className="w-full h-28 object-cover rounded-lg mb-3  hover:shadow-md transition-shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* sign popup  */}

      <div
        onClick={accountpopupfun}
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          accountpopup ? "opacity-100 visible z-30" : "opacity-0 invisible"
        }`}
      >
        {/* Sidebar Menu */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 right-0 w-96 h-full z-40 bg-white shadow-lg transition-transform duration-500 ${
            accountpopup ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">User Account</h2>
            <IoClose
              onClick={accountpopupfun}
              fontSize={24}
              className="cursor-pointer text-gray-500 hover:text-black"
            />
          </div>

          {/* User Profile Section */}
          <div className="flex flex-col items-center mt-6 px-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300">
              <img
                src="images/userimage.jpeg" // Replace with the user's profile image URL
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Mahesh Choudhary
            </h3>
            <p className="text-sm text-gray-500">maheshfullstackwebdev@gmail.com</p>
          </div>

          {/* Navigation Links */}
       

          {/* Logout Button */}
          <div className="mt-auto px-4 pb-4">
            <button
              className="w-full mt-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              onClick={() => alert("Logging out...")}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
