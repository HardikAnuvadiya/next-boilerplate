/** @type {import('next').NextConfig} */
const nextConfig = {
  output: {
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        // Add more paths as needed
      };
    },
  },
};

export default nextConfig;
