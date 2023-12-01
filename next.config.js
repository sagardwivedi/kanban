/** @type {import('next').NextConfig} */
const nextConfig = {};

const withBundle = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundle(nextConfig);
