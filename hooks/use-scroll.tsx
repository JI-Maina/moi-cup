"use client";

import { useEffect, useState } from "react";

export const useScrollPersist = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") return;

    // Restore scroll position after hydration
    const savedScrollY = localStorage.getItem("moiCupScrollY");
    if (savedScrollY) {
      // Use setTimeout to ensure this runs after React hydration
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollY, 10));
      }, 10);
    }

    let ticking = false;
    let saveTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      if (!ticking) {
        requestAnimationFrame(() => {
          // Debounce the localStorage save
          clearTimeout(saveTimeout);
          saveTimeout = setTimeout(() => {
            localStorage.setItem("moiCupScrollY", scrollY.toString());
          }, 150);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(saveTimeout);
    };
  }, []);

  return isScrolled;
};
