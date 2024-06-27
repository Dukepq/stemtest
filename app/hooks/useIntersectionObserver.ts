import { useEffect, useState, useRef, RefObject } from "react";

export default function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit & { initialIntercepting?: boolean }
) {
  const [isObserved, setIsObserved] = useState(
    options.initialIntercepting || false
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsObserved(entry.isIntersecting);
      },
      {
        root: options.root,
        rootMargin: options.rootMargin,
        threshold: options.threshold,
      }
    );
  }, [setIsObserved, options.root, options.rootMargin, options.threshold]);

  useEffect(() => {
    if (observerRef.current && ref.current) {
      observerRef.current.observe(ref.current);
    }
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  return isObserved;
}
