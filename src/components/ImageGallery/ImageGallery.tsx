import { useState, useCallback, useMemo, forwardRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
  GalleryPhoto,
  LIGHTBOX_BASE_HEIGHT,
  THUMBNAIL_BASE_HEIGHT,
  PRIORITY_IMAGE_COUNT,
} from './data';
import LazyImage from './LazyImage';
import styles from './ImageGallery.module.css';
import { calculateAspectRatio, calculateDimensions } from './utils';

interface ImageGalleryProps {
  images: GalleryPhoto[];
  showGallery: boolean;
}

const ImageGallery = forwardRef<HTMLDivElement, ImageGalleryProps>(
  ({ images, showGallery }, ref) => {
    const [index, setIndex] = useState(-1);

    const slides = useMemo(
      () =>
        images.map((photo) => {
          const aspectRatio = calculateAspectRatio(photo.width, photo.height);
          const baseHeight = LIGHTBOX_BASE_HEIGHT;
          return {
            src: photo.src,
            alt: photo.alt || '',
            ...calculateDimensions(aspectRatio, baseHeight),
          };
        }),
      [images]
    );

    const thumbnailDimensions = useMemo(
      () =>
        images.map((photo) => {
          const aspectRatio = calculateAspectRatio(photo.width, photo.height);
          const baseHeight = THUMBNAIL_BASE_HEIGHT;
          return {
            ...calculateDimensions(aspectRatio, baseHeight),
          };
        }),
      [images]
    );

    const openLightbox = useCallback((index: number) => {
      setIndex(index);
    }, []);

    const closeLightbox = useCallback(() => {
      setIndex(-1);
    }, []);

    if (!showGallery) {
      return <div ref={ref} />;
    }

    return (
      <>
        <div ref={ref} className={styles.gallery}>
          {images.map((photo, photoIndex) => {
            const { width, height } = thumbnailDimensions[photoIndex];

            return (
              <div
                key={photo.src}
                className={styles['gallery-item']}
                onClick={() => openLightbox(photoIndex)}
              >
                <LazyImage
                  src={photo.src}
                  alt={photo.alt || `Gallery image ${photoIndex + 1}`}
                  width={width}
                  height={height}
                  priority={photoIndex < PRIORITY_IMAGE_COUNT}
                  className={styles['gallery-item-wrapper']}
                />
              </div>
            );
          })}
        </div>

        <Lightbox
          open={index >= 0}
          close={closeLightbox}
          index={index}
          slides={slides}
        />
      </>
    );
  }
);

ImageGallery.displayName = 'ImageGallery';
export default ImageGallery;
