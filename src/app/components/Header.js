"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // ✅ Correct for App Router
import Link from "next/link";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // this replaces router.pathname

  const PageRoutes = [
    { id: 1, routeName: "Home", pageUrl: "/" },
    { id: 2, routeName: "Services", pageUrl: "/services" },
    { id: 3, routeName: "About Us", pageUrl: "/about-us" },
    {
      id: 4,
      routeName: "Clients",
      pageUrl: "/client-",
    },
    { id: 5, routeName: "Contact Us", pageUrl: "/contact-us" },
    { id: 6, routeName: "Join our Team", pageUrl: "/join-our-team" },
  ];

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <header className="bg-black shadow-md">
      {/* Desktop Header */}
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 lg:px-0">
        <div className="cursor-pointer">
          <img
            src="/pps-logo-w.png"
            alt="Logo"
            className="w-20"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="hidden lg:flex space-x-8">
          {PageRoutes.map((pr) => (
            <Link key={pr.id} href={pr.pageUrl}>
              <p
                className={`${
                  pathname === pr.pageUrl ? "text-blue-500" : "text-gray-700"
                } text-lg font-semibold hover:text-blue-500 transition-colors`}
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
            className="text-gray-700"
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
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full p-5 space-y-6">
            <div className="flex justify-between">
              <img src="/pps-logo.png" alt="Logo" className="w-20" />
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-gray-700"
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
                      pathname === pr.pageUrl
                        ? "text-blue-500"
                        : "text-gray-700"
                    } text-lg font-semibold block hover:text-blue-500 transition-colors`}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {pr.routeName}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
