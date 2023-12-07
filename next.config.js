/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  basePath: "/",
  reactStrictMode: true,
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
