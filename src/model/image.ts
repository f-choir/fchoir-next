const BUCKET_URL = 'https://storage.googleapis.com/f-choir-website-assets/';

export const getImageUrl = (imgName: string, imgPath?: string) =>
  `${BUCKET_URL}${imgPath ?? ''}${imgName}.jpg`;
