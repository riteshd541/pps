"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import FloatingBtn from "./FloatingBtn";
import ScrollToTop from "./ScrollToTop";

const Header = ({ backgroundColor }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const PageRoutes = [
    { id: 1, routeName: "Home", pageUrl: "/" },
    { id: 2, routeName: "About Us", pageUrl: "/about" },
    { id: 3, routeName: "Blogs", pageUrl: "/blog" },
    { id: 4, routeName: "Portfolio", pageUrl: "/portfolio" },
    { id: 5, routeName: "Testimonials", pageUrl: "/testimonials" },
    { id: 6, routeName: "Contact Us", pageUrl: "/contact" },
    { id: 7, routeName: "Career", pageUrl: "/careers" },
  ];

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [drawerOpen]);

  return (
    <>
      <FloatingBtn />
      <ScrollToTop />
      <header
        className={`absolute top-0 left-0 w-full z-50 ${
          backgroundColor ? backgroundColor : "bg-transparent"
        }`}
      >
        {/* Desktop Header */}
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 lg:px-0">
          <div className="cursor-pointer">
            <img
              src="/final.png"
              alt="Logo"
              className="w-[160px] sm:w-[200px]"
              onClick={() => router.push("/")}
            />
          </div>

          <div className="hidden lg:flex space-x-8">
            {PageRoutes.map((pr) => (
              <Link key={pr.id} href={pr.pageUrl}>
                <p
                  className={`${
                    pathname === pr.pageUrl ? "text-blue-400" : "text-white"
                  } text-lg font-normal hover:text-blue-400 transition-colors`}
                >
                  {pr.routeName}
                </p>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {drawerOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/80 z-50 flex">
            <div className="bg-black/90 w-64 h-full p-5 space-y-6 text-white">
              <div className="flex justify-between items-center">
                <img src="/final.png" alt="Logo" className="w-[160px]" />
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {PageRoutes.map((pr) => (
                  <Link key={pr.id} href={pr.pageUrl}>
                    <p
                      className={`${
                        pathname === pr.pageUrl ? "text-blue-400" : "text-white"
                      } text-lg font-semibold block hover:text-blue-400 transition-colors`}
                      onClick={() => setDrawerOpen(false)}
                    >
                      {pr.routeName}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Click outside to close */}
            <div className="flex-1" onClick={() => setDrawerOpen(false)}></div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
