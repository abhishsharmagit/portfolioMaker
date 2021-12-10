/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    AUTH_URL: process.env.AUTH_URL,
    BACKEND_URL: process.env.BACKEND_URL,
  },
  eslint: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreDuringBuilds: true,
  },
};
