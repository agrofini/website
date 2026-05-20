/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/invest', destination: '/buyers', permanent: true },
    ]
  },
}
module.exports = nextConfig
