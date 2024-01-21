/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'www.contactcenterworld.com',
          },
          {
            hostname: 'source.unsplash.com',
          },
          {
            hostname: 'www.astra.co.id',
          },
          {
            hostname: 'qmfinancial.com',
          },
          {
            hostname: 'yt3.googleusercontent.com',
          },
          {
            hostname: 'images.unsplash.com',
          },
          {
            hostname: 'cdn0-production-images-kly.akamaized.net'
          },
          {
            hostname: 'static.promediateknologi.id',
          },
          {
            hostname: 'assets.kompasiana.com',
          },
          {
            hostname: 'assets-global.website-files.com',
          },
          {
            hostname: 'i1.rgstatic.net',
          }
        ],
      },
}

module.exports = nextConfig
