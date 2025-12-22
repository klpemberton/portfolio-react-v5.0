import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ImageGallery.module.css';
import { INTERSECTION_ROOT_MARGIN, INTERSECTION_THRESHOLD } from './data';
import { classNames } from '../../lib/classNames';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  onLoad?: () => void;
}

const LazyImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  onLoad,
}: LazyImageProps) => {
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldLoad) return;

    const node = imgRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.unobserve(node);
          }
        });
      },
      {
        rootMargin: INTERSECTION_ROOT_MARGIN,
        threshold: INTERSECTION_THRESHOLD,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [shouldLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div
      ref={imgRef}
      className={classNames(styles['lazy-image-wrapper'], className)}
    >
      {shouldLoad ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={classNames(
            styles['gallery-image'],
            isLoaded ? styles['image-loaded'] : styles['image-loading']
          )}
          onLoad={handleLoad}
          loading={priority ? 'eager' : 'lazy'}
        />
      ) : (
        <div className={styles['lazy-image-placeholder']} aria-hidden="true" />
      )}
    </div>
  );
};

export default LazyImage;
