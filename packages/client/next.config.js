/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    AUTH_URL: process.env.AUTH_URL,
    BACKEND_URL: process.env.BACKEND_URL
  },
};
