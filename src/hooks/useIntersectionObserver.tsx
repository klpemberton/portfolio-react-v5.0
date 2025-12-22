import { RefObject, useEffect, useState, useMemo } from 'react';

interface IntersectionObserverOptions {
  root: Element | Document | null | undefined;
  rootMargin: string;
  threshold: number;
}

const useIntersectionObserver = (
  observerOptions: IntersectionObserverOptions,
  targetElement: RefObject<Element | null>
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const memoizedOptions = useMemo(
    () => ({
      root: observerOptions.root,
      rootMargin: observerOptions.rootMargin,
      threshold: observerOptions.threshold,
    }),
    [
      observerOptions.root,
      observerOptions.rootMargin,
      observerOptions.threshold,
    ]
  );

  useEffect(() => {
    const node = targetElement.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, memoizedOptions);

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [targetElement, memoizedOptions]);

  return entry;
};

export default useIntersectionObserver;
