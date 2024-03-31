/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a1ex.vip',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
