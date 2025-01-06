/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: config CDN trong version cu < 14
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "apistore.cybersoft.edu.vn",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
