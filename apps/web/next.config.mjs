/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@chaii/ui"],
  experimental: {
    typedRoutes: true,
  }
};

export default nextConfig;
