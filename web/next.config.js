/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "drive.google.com"},
            {hostname: "img.freepik.com"},
    ],
    },
    base_url : "https://schedules-r-us-78b737cd078f.herokuapp.com/"

}
module.exports = nextConfig
