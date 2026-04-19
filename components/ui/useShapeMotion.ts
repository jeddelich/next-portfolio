"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

type UseShapeMotionOptions = {
  shapeCount: number;
  breakpoint?: number;
  isPaused?: boolean;
};

export function useShapeMotion({
  shapeCount,
  breakpoint = 880,
  isPaused = false,
}: UseShapeMotionOptions) {
  const shapeRefs = useRef<(HTMLElement | null)[]>([]);
  const [isShapeMotionEnabled, setIsShapeMotionEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const updateShapeMotion = () => {
      setIsShapeMotionEnabled(mediaQuery.matches);
    };

    updateShapeMotion();
    mediaQuery.addEventListener("change", updateShapeMotion);

    return () => {
      mediaQuery.removeEventListener("change", updateShapeMotion);
    };
  }, [breakpoint]);

  const getDirection = (index: number) => {
    const sourceStep = index + 1 + Math.floor(index / 4);
    return sourceStep % 2 === 0 ? -1 : 1;
  };

  const applyShapeTransforms = (x: number, y: number) => {
    if (!isShapeMotionEnabled || isPaused) {
      return;
    }

    shapeRefs.current.forEach((shape, index) => {
      if (!shape) {
        return;
      }

      const direction = getDirection(index);
      const jitterX = ((index * 13) % 13) - 2;
      const jitterY = ((index * 17) % 13) - 2;

      shape.style.transform = `translate(${x * direction + jitterX}px, ${y * direction + jitterY}px)`;
    });
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!isShapeMotionEnabled || isPaused) {
      return;
    }

    const x = event.clientX / 30;
    const y = event.clientY / 30;

    applyShapeTransforms(x, y);
  };

  useEffect(() => {
    if (!isShapeMotionEnabled || isPaused) {
      return;
    }

    shapeRefs.current.forEach((shape, index) => {
      if (!shape) {
        return;
      }

      const direction = getDirection(index);
      const jitterX = ((index * 13) % 13) - 2;
      const jitterY = ((index * 17) % 13) - 2;

      shape.style.transform = `translate(${7 * direction + jitterX}px, ${-5 * direction + jitterY}px)`;
    });
  }, [isShapeMotionEnabled, isPaused, shapeCount]);

  const setShapeImageRef =
    (index: number) => (element: HTMLImageElement | null) => {
      shapeRefs.current[index] = element;
    };

  return {
    isShapeMotionEnabled,
    handleMouseMove,
    setShapeImageRef,
  };
}
