export interface GalleryPhoto {
  alt?: string;
  src: string;
  width: number;
  height: number;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: '/kp32.jpg',
    width: 3,
    height: 4,
    alt: 'Gifford Pinchot National Forest',
  },
  {
    src: '/kp30.jpg',
    width: 4,
    height: 3,
    alt: 'Mt St Helens Summit',
  },
  {
    src: '/kp23.jpg',
    width: 3,
    height: 4,
    alt: 'Gifford Pinchot National Forest',
  },
  {
    src: '/kp24.jpg',
    width: 4,
    height: 3,
    alt: 'Cape Perpetua, Oregon Coast',
  },
  {
    src: '/kp25.jpg',
    width: 3,
    height: 4,
    alt: 'Cape Perpetua, Oregon Coast',
  },
  {
    src: '/kp31.jpg',
    width: 3,
    height: 5,
    alt: 'Columbia River Gorge',
  },
  {
    src: '/kp19.jpg',
    width: 4,
    height: 3,
    alt: 'Cape Meares, Oregon Coast',
  },
  {
    src: '/kp21.jpg',
    width: 4,
    height: 3,
    alt: "Mauna Kea Summmit and Observatory, Big Island, Hawai'i",
  },
  {
    src: '/kp15.jpg',
    width: 4,
    height: 3,
    alt: 'Silver Star Summit, Gifford Pinchot National Forest, WA',
  },
  {
    src: '/kp8.jpg',
    width: 4,
    height: 3,
    alt: 'Washougal River, Washougal, WA',
  },
  {
    src: '/kp5.jpg',
    width: 3,
    height: 4,
    alt: 'Archer Creek, Columbia Gorge, WA',
  },
  {
    src: '/kp0.jpg',
    width: 5,
    height: 3,
    alt: 'Nacimiento-Fergusson Rd, Big Sur, CA',
  },
  {
    src: '/kp1.jpg',
    width: 4,
    height: 3,
    alt: 'Stanislaus River, Calaveras Big Trees, CA',
  },
  {
    src: '/kp3.jpg',
    width: 4,
    height: 3,
    alt: "South flank, Wy'east (Mt. Hood), OR",
  },
];

export const printPortfolioPhotos: GalleryPhoto[] = [
  {
    src: '/bira.png',
    width: 4,
    height: 3,
    alt: 'Bira project',
  },
  {
    src: '/longslanding.jpg',
    width: 3,
    height: 5,
    alt: 'Longs Landing project',
  },
  {
    src: '/salad.jpg',
    width: 4,
    height: 3,
    alt: 'Salad project',
  },
  {
    src: '/vance.png',
    width: 3,
    height: 3,
    alt: 'Vance project',
  },
  {
    src: '/vintwearhouse.png',
    width: 5,
    height: 3,
    alt: 'Vint Wearhouse project',
  },
  {
    src: '/eldercare.jpg',
    width: 3,
    height: 4,
    alt: 'Eldercare project',
  },
  {
    src: '/dancecircus.jpg',
    width: 4,
    height: 3,
    alt: 'Dance Circus project',
  },
  {
    src: '/walters.png',
    width: 5,
    height: 3,
    alt: 'Walters project',
  },
];

export const LIGHTBOX_BASE_HEIGHT = 1200;
export const THUMBNAIL_BASE_HEIGHT = 300;
export const PRIORITY_IMAGE_COUNT = 3;

export const INTERSECTION_ROOT_MARGIN = '100px';
export const INTERSECTION_THRESHOLD = 0.01;
