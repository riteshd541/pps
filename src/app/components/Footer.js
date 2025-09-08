import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Brand and social */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">
              PICTURE PERFECT STUDIO
            </h2>
            <p>
              Address: Sec -14 near Bank of Baroda, Indira Nagar, <br />{" "}
              Lucknow, Uttar Pradesh 226016
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <span className="text-xs">©</span>
              <span className="text-sm">f</span>
              <span className="text-green-500">✓</span>
            </div>
          </div>

          {/* Middle - Locations and links */}
          <div className="mb-8 md:mb-0 text-center">
            <div className="uppercase tracking-wider mb-2">
              Lucknow · Uttar Pradesh
            </div>
            <a href="#" className="text-sm hover:underline">
              About Us
            </a>{" "}
            <br />
            <a href="#" className="text-sm hover:underline">
              Portfolio
            </a>{" "}
            <br />
            <a href="# " className="text-sm hover:underline">
              Contact
            </a>
          </div>

          {/* Right side - Contact */}
          <div className="text-center md:text-right">
            <div className="text-lg mb-2">+91 7905746104 (Sulok Sharan)</div>
            <div className="text-lg mb-2">+91 8318253621 (Alok Sharan)</div>
            <a
              href="mailto:hello@houseontheclouds.com"
              className="text-lg hover:underline"
            >
              ppslko7080@gmail.com
            </a>
          </div>
        </div>

        {/* Optional divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Picture Perfect Studio. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
