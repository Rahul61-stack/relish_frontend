/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
          port: '',
          pathname: "/pw/**",
        },
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
          port: '',
          pathname: "/Rahul61-stack/Images/main/RELISH/**"
        }
      ],
    },
}