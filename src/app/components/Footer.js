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
              Privacy Policy
            </a>
          </div>

          {/* Right side - Contact */}
          <div className="text-center md:text-right">
            <div className="text-lg mb-2">+91 83182 53621</div>
            <a
              href="mailto:hello@houseontheclouds.com"
              className="text-lg hover:underline"
            >
              help@pictureperfectstudio.com
            </a>
          </div>
        </div>

        {/* Optional divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} House on the Clouds. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
