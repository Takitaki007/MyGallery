/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "96.9.81.187",
        port: "8085",
        pathname: "/api/v1/file/preview-file/**",
      },
    ],
  },
};

export default nextConfig;
