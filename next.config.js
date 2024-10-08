/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

// module.exports = withPWA({
//         pwa: {
//             dest: 'public',
//             register: true,
//             skipWaiting: true,
//         },
//     })
// const nextConfig = {
//     reactStrictMode: true,
// }

// module.exports = nextConfig

const nextConfig = {
    ...withPWA({
        dest: "public",
        register: true,
        skipWaiting: true,
    }),
};