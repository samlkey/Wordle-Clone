/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    basePath: isProd ? '/Wordle-Clone' : '',
    assetPrefix: isProd ? '/Wordle-Clone/' : '',
}

module.exports = nextConfig
