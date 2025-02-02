"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        smoothWheel: true, // Smooth scroll for mouse wheel
        // smoothTouch: true, // Smooth scroll for touch devices
        duration: .4, // Slow & smooth
        easing: (t: number) => 1 - Math.pow(1 - t, 3), // Controlled easing
        infinite: false, // No infinite loop
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => lenis.destroy();
    }
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
