const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: '/Sanju-Rangodage-Photography',
  assetPrefix: isProd ? '/Sanju-Rangodage-Photography/' : '',
}

export default nextConfig
