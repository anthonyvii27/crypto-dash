/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
        removeConsole: {
            exclude: ["error"]
        },
    },
    swcMinify: false,
    staticPageGenerationTimeout: 0,
    reactStrictMode: true,
    images: {},
    eslint: {
        dirs: ["."]
    }
}

module.exports = nextConfig;