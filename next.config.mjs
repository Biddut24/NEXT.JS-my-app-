/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpaperaccess.com',
      },
      {
        protocol: 'https',
        hostname: 'wallup.net',
      },
      {
        protocol: 'https',
        hostname: 'wallpaperbetter.com',
      },
      {
        protocol: 'https',
        hostname: 'get.wallhere.com',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hdwallpapers.in',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
