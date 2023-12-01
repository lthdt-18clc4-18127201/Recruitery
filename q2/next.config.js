/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev_home.recruitery.co'
            },
            {
                protocol: 'https',
                hostname: 'kit.fontawesome.com'
            },{
                protocol: 'https',
                hostname: 'unicons.iconscout.com'
            },{
                protocol: 'https',
                hostname: 'www.vietnamworks.com'
            },{
                protocol: 'https',
                hostname: 'upload.wikimedia.org'
            },
        ]
    },
    reactStrictMode: false
}

module.exports = nextConfig
