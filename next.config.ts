import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js defaults the optimized image response to
    // `Content-Disposition: attachment`, which makes "Open image in new tab"
    // download the file instead of displaying it. Serve inline so gallery
    // images open in the browser.
    contentDispositionType: "inline",
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
      {
        source: "/myers-cocktail-iv-therapy",
        destination: "https://www.huntsvilleiv.com/myers-iv-therapy",
        permanent: true,
      },
      {
        source: "/weight-loss",
        destination: "/medical-weight-loss",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
