/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media1.giphy.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname:   "lh3.googleusercontent.com", 
        port: '',
        pathname: '/**',
      }
    ]
  },

  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;