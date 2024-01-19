const IMG_SRC_PREFIX = 'https://storage.googleapis.com/f-choir-website-assets/galleries';

// export const galleryImageSrc = (galleryId: string, src: string) =>
//   `${IMG_SRC_PREFIX}/${galleryId}/${src}.jpg`;

export const imageSrc = (path: string, src: string) =>
  !path ? src : `${IMG_SRC_PREFIX}/${path}/${src}.jpg`;
