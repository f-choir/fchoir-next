/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'custom',
    loaderFile: './src/model/cloudinaryLoader.ts',
  },
};

module.exports = nextConfig;
