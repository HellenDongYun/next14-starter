/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: ["https://images.unsplash.com/photo-:id"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
