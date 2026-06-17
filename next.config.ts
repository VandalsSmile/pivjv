import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/nad--and-niagen",
        destination: "https://www.huntsvilleiv.com/nad-niagen-special",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
