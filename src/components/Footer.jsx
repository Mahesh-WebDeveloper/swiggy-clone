import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* Divider */}
      <hr className="border-t border-black  mx-auto w-full max-w-[1200px]" />

      <footer className="bg-[#f0f0f5] pb-9 pt-7">
        {/* App Promotion Section */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-[1220px] gap-5 px-4">
          <div className="text-center lg:text-left text-lg font-bold">
            For a better experience, download the Swiggy app now
          </div>
          <div className="flex gap-4">
            <img
              src="images/play_store.png"
              alt="Google Play Store"
              className="w-[186px] h-[64px] hover:cursor-pointer"
            />
            <img
              src="images/app_store.png"
              alt="Apple App Store"
              className="w-[186px] h-[64px] hover:cursor-pointer"
            />
          </div>
        </div>

        {/* Footer Content Section */}
        <div className="container mx-auto mt-9 flex flex-col lg:flex-row justify-between gap-10 max-w-[1220px] px-4">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-start">
            <img
              src="images/footer-png-output.png"
              alt="Swiggy Logo"
              className="mb-3 w-auto h-auto"
            />
            <span className="text-sm">© 2024 Swiggy Limited</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-between gap-10 w-full lg:w-auto">
            {[
              {
                title: "Company",
                links: [
                  "About Us",
                  "Swiggy Corporate",
                  "Careers",
                  "Team",
                  "Swiggy One",
                  "Swiggy Instamart",
                  "Swiggy Dineout",
                  "Swiggy Genie",
                ],
              },
              {
                title: "Contact Us",
                links: ["Help & Support", "Partner with us", "Ride with us"],
              },
              {
                title: "Legal",
                links: [
                  "Terms & Conditions",
                  "Cookie Policy",
                  "Privacy Policy",
                  "Investor Relations",
                ],
              },
              {
                title: "Life at Swiggy",
                links: ["Explore with Swiggy", "Swiggy News", "Snackables"],
              },
            ].map((section, idx) => (
              <div key={idx} className="w-full md:w-auto px-4">
                <h4 className="font-bold text-lg mb-2">{section.title}</h4>
                <ul className="space-y-1 text-sm">
                  {section.links.map((link, index) => (
                    <li className="hover:cursor-pointer" key={index}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links */}
            <div className="w-full md:w-auto px-4">
              <h4 className="font-bold text-lg mb-2">Social Links</h4>
              <div className="flex space-x-3">
                {[
                  { icon: <FaInstagram />, label: "Instagram" },
                  { icon: <FaLinkedin />, label: "LinkedIn" },
                  { icon: <FaFacebook />, label: "Facebook" },
                  { icon: <FaTwitter />, label: "Twitter" },
                ].map((social, idx) => (
                  <span
                    key={idx}
                    className="w-8 h-8 hover:cursor-pointer bg-white border border-gray-300 shadow-lg rounded-full flex justify-center items-center"
                    title={social.label}
                  >
                    {social.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
