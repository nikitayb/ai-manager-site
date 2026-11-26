/** @type {import('next').NextConfig} */
const isPagesBuild = process.env.CF_PAGES === '1';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isPagesBuild ? { output: 'export', trailingSlash: true } : {}),
};

export default nextConfig;
