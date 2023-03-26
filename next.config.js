/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
  
    prependData: `@import "./base.scss";`,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
