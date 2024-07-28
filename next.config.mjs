/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
                eslint : {
            ignoreDuringBuilds: true,
        },
        remotePatterns : [
            {
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname : "avatars.githubusercontent.com"
            }
        ]
    }
};

export default nextConfig;
