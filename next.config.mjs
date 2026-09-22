/** @type {import('next').NextConfig} */

const isGithubPagesBuild =
  process.env.NODE_ENV === 'production' &&
  process.env.GITHUB_ACTIONS === 'true';

const repo = 'websites-demo';

const basePath = isGithubPagesBuild ? `/${repo}` : '';

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  basePath,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  trailingSlash: true,

  allowedDevOrigins: [
    'local-origin.dev',
    '*.local-origin.dev',
    '192.168.1.30',
  ],
};

export default nextConfig;