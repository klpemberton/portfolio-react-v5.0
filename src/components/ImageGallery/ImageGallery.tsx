import { useMemo, forwardRef } from 'react';
import {
  GalleryPhoto,
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

    if (!showGallery) {
      return <div ref={ref} />;
    }

    return (
      <div ref={ref} className={styles.gallery}>
        {images.map((photo, photoIndex) => {
          const { width, height } = thumbnailDimensions[photoIndex];

          return (
            <div
              key={photo.src}
              className={styles['gallery-item']}
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
    );
  }
);

ImageGallery.displayName = 'ImageGallery';
export default ImageGallery;
