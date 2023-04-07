/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        pathname: '/di8zdyqjp/image/upload/**',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
