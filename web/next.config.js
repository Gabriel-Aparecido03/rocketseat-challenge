const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    remotePatterns : [
      { hostname : "storage.googleapis.com" }
    ]
  }
}

module.exports = nextConfig
