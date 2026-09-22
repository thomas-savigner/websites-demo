/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const repo = websites-demo;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repo}` : '',
  trailingSlash: true,
  allowedDevOrigins: [
    'local-origin.dev', '*.local-origin.dev', '192.168.1.30'
  ],
};

export default nextConfig;
