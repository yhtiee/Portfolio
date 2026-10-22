import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is now a single page. Old section URLs land on the right spot of it.
  async redirects() {
    return [
      { source: "/projects", destination: "/#work", permanent: true },
      { source: "/blogs", destination: "/", permanent: true },
      { source: "/blogs/:path*", destination: "/", permanent: true },
      { source: "/hackathons", destination: "/", permanent: true },
      { source: "/hackathons/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
