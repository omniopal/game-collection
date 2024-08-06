/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    images: {
      // TODO
      unoptimized: true,
    },
    basePath: '/game-collection',
  }
   
  export default nextConfig