/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'wishbuddy.netlify.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
