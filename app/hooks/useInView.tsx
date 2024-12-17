"use client";
import { useState, useEffect, useRef, MutableRefObject } from "react";

export const useInView = <T extends HTMLElement>(
  options?: IntersectionObserverInit
): [MutableRefObject<T | null>, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<T | null>(null); // Generic ref

  useEffect(() => {
    // Ensure IntersectionObserver runs only in the browser
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );

    const currentRef = ref.current; // Copy ref.current to a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
};
