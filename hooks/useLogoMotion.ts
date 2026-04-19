"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

type UseLogoMotionOptions = {
  logoCount: number;
  breakpoint?: number;
  isPaused?: boolean;
};

export function useLogoMotion({
  logoCount,
  breakpoint = 880,
  isPaused = false,
}: UseLogoMotionOptions) {
  const logoRefs = useRef<(HTMLElement | null)[]>([]);
  const [isLogoMotionEnabled, setIsLogoMotionEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const updateLogoMotion = () => {
      setIsLogoMotionEnabled(mediaQuery.matches);
    };

    updateLogoMotion();
    mediaQuery.addEventListener("change", updateLogoMotion);

    return () => {
      mediaQuery.removeEventListener("change", updateLogoMotion);
    };
  }, [breakpoint]);

  const getDirection = (index: number) => {
    const sourceStep = index + 1 + Math.floor(index / 4);
    return sourceStep % 2 === 0 ? -1 : 1;
  };

  const applyLogoTransforms = (x: number, y: number) => {
    if (!isLogoMotionEnabled || isPaused) {
      return;
    }

    logoRefs.current.forEach((logo, index) => {
      if (!logo) {
        return;
      }

      const direction = getDirection(index);
      const jitterX = ((index * 13) % 13) - 2;
      const jitterY = ((index * 17) % 13) - 2;

      logo.style.transform = `translate(${x * direction + jitterX}px, ${y * direction + jitterY}px)`;
    });
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!isLogoMotionEnabled || isPaused) {
      return;
    }

    const x = event.clientX / 30;
    const y = event.clientY / 30;

    applyLogoTransforms(x, y);
  };

  useEffect(() => {
    if (!isLogoMotionEnabled || isPaused) {
      return;
    }

    logoRefs.current.forEach((logo, index) => {
      if (!logo) {
        return;
      }

      const direction = getDirection(index);
      const jitterX = ((index * 13) % 13) - 2;
      const jitterY = ((index * 17) % 13) - 2;

      logo.style.transform = `translate(${7 * direction + jitterX}px, ${-5 * direction + jitterY}px)`;
    });
  }, [isLogoMotionEnabled, isPaused, logoCount]);

  const setLogoImageRef =
    (index: number) => (element: HTMLImageElement | null) => {
      logoRefs.current[index] = element;
    };

  return {
    isLogoMotionEnabled,
    handleMouseMove,
    setLogoImageRef,
  };
}
