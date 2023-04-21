/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["about.twitter.com","upload.wikimedia.org"]
  },
  swcMinify: true,
}

module.exports = nextConfig
