/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProduction ? "/brunojsc.github.io/brunojs" : "",
  reactStrictMode: true,
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
