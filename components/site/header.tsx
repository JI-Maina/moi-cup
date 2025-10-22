"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const menuItems = [
  // { name: "About", href: "/about" },
  //   { name: "Tournament Info", href: "/tournament-info" },
  { name: "Registration Guidelines", href: "/guidelines" },
  { name: "Partners & Sponsors", href: "/partners" },
  // { name: "News & Announcements", href: "/news" },
  { name: "Media & Gallery", href: "/gallery" },
];

const tournamentItems = [
  { name: "Fixtures & Standings", href: "/fixtures" },
  { name: "Participating Teams", href: "/teams" },
];

export const SiteHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-50 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 lg:px-8",
            isScrolled
              ? "bg-[#0B1E4A]/95 max-w-7xl rounded-2xl border border-[#F58220]/20 backdrop-blur-xl"
              : "bg-transparent"
          )}
        >
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            {/* Logo - Left Side */}
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-3 z-30"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#F58220] rounded-full flex items-center justify-center p-1">
                  <Image
                    src="/moi-cup-logo.png"
                    alt="MOI CUP Logo"
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-2xl font-black font-montserrat tracking-tight">
                  MOI CUP
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center justify-end">
              <ul className="flex items-center gap-4 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-[#F58220] font-medium block duration-150 transition-colors px-3 py-2 whitespace-nowrap"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}

                {/* Tournament Sections with Dropdown Indicator */}
                <li className="relative group">
                  <div className="flex items-center space-x-1 text-white/80 hover:text-[#F58220] font-medium cursor-pointer px-3 py-2 transition-colors duration-150">
                    <span>Tournament</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 mt-2 w-48 bg-[#0B1E4A] border border-[#F58220]/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-lg z-40">
                    {tournamentItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-white/80 hover:text-[#F58220] hover:bg-white/5 transition-colors duration-150 border-b border-white/5 last:border-b-0"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState == true ? "Close Menu" : "Open Menu"}
              className="relative z-30 block cursor-pointer p-2 lg:hidden"
            >
              <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 text-white duration-200" />
              <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 text-white -rotate-180 scale-0 opacity-0 duration-200" />
            </button>

            {/* Mobile Menu */}
            <div
              className={cn(
                "fixed inset-0 bg-[#0B1E4A] z-20 transition-all duration-300 transform",
                menuState ? "translate-x-0" : "translate-x-full",
                "lg:hidden"
              )}
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <ul className="space-y-6 text-base flex-1">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-white/80 hover:text-[#F58220] block py-3 duration-150 font-medium text-lg border-b border-white/10"
                        onClick={() => setMenuState(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}

                  {/* Tournament Sections in Mobile */}
                  <li className="pt-4">
                    <p className="text-[#F58220] font-bold text-sm uppercase tracking-wider mb-4">
                      Tournament
                    </p>
                    <div className="space-y-4">
                      {tournamentItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="text-white/70 hover:text-[#F58220] block py-2 duration-150 pl-4 text-lg border-b border-white/5"
                          onClick={() => setMenuState(false)}
                        >
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </li>
                </ul>

                {/* Close button for mobile */}
                <div className="pt-8 border-t border-white/10">
                  <button
                    onClick={() => setMenuState(false)}
                    className="w-full py-3 text-white/80 hover:text-[#F58220] font-medium text-lg"
                  >
                    Close Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
