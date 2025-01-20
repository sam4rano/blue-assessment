import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async rewrites() {
    return [
      {
        source: '/api/proxy/user-manager/:path*',
        destination: 'http://20.126.3.61:3400/user-manager/:path*'
      },
      {
        source: '/api/proxy/configuration/:path*',
        destination: 'http://20.126.3.61:3400/configuration/:path*'
      },
      {
        source: '/api/proxy/order-and-delivery/:path*',
        destination: 'http://20.126.3.61:3400/order-and-delivery/:path*'
      }
    ]
  }
};

export default nextConfig;


