/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
      {
        hostname: "media3.giphy.com",
      },
      {
        hostname: "media4.giphy.com",
      },
      {
        hostname: "media2.giphy.com",
      },
      {
        hostname: "media0.giphy.com",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
