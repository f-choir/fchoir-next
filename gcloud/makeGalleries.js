const fs = require('fs');
const { Storage } = require('@google-cloud/storage');

const BUCKET_NAME = 'f-choir-website-assets';

function hasGallery(id, galleries) {
  return Boolean(galleries.find((gallery) => gallery.id === id));
}

function imageFrom(id) {
  return { imageUrl: id, alt: 'alt text' };
}

async function parseBucketContents() {
  const storage = new Storage();
  const bucketFiles = await storage.bucket(BUCKET_NAME).getFiles();

  const galleries = [];
  bucketFiles[0]
    .map((bucketFile) => bucketFile.id.replaceAll('%2F', '/'))
    .filter((id) => {
      const elems = id.split('/');
      return elems[0] === 'galleries' && elems[elems.length - 1] !== '';
    })
    .forEach((validId) => {
      const elems = validId.split('/').slice(1);
      if (hasGallery(elems[0], galleries)) {
        galleries.find((gallery) => gallery.id === elems[0])?.images.push(imageFrom(elems[1]));
      } else {
        galleries.push({
          id: elems[0],
          title: elems[0],
          heroImageIndex: 0,
          images: [imageFrom(`${elems[1]}`)],
        });
      }
    });
  return galleries;
}

async function writeJson() {
  const content = await parseBucketContents();
  fs.rename('./src/data/galleries.json', './src/data/_old_galleries.json', (err) => {
    if (err) console.error(err);
  });
  fs.writeFile('./src/data/galleries.json', JSON.stringify(content), (err) => {
    if (err) console.error(err);
  });
}

writeJson().catch(console.error);
