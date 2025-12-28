import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // Important for learning - we'll observe double renders
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // Add bundle analyzer here if needed
  //   }
  //   return config
  // },
}

export default nextConfig

