/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "drive.google.com"},
            {hostname: "img.freepik.com"},
    ],
    },
}

module.exports = nextConfig
