const BUCKET_URL = 'https://storage.googleapis.com/f-choir-website-assets/';

// TODO can be stripped out?
export const getImageUrl = (imgName: string, imgPath?: string) =>
  `${BUCKET_URL}${imgPath ?? ''}${imgName}.jpg`;
