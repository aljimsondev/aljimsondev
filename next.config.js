/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env === "PRODUCTION" ? "/aljimsondev" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
