/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    'local-origin.dev', '*.local-origin.dev', '192.168.1.30'
  ],
};

export default nextConfig;
