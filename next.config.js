/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/brunojsc.github.io/brunojs",
  reactStrictMode: true,
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
