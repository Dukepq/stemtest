/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // for the static export to work
    unoptimized: true,
  },
};

export default nextConfig;
