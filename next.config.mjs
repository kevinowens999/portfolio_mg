/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Keep Next.js manifests in .next; static export writes the site to out.
  // Sharing out between these outputs removes manifests needed by dev.
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // simple-icons ships a 25MB / 3446-export barrel; without this, dev pulls
    // the whole thing into every page that renders a brand icon (all cards +
    // project pages), making navigation crawl. Rewrites to per-icon imports.
    optimizePackageImports: ['simple-icons', 'lucide-react'],
  },
//  basePath: '/resume',
//  assetPrefix: '/resume/',
  trailingSlash: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/.next/**', '**/out/**', '**/node_modules/**', '**/.tmp/**'],
      };
    }
    return config;
  },
};

export default nextConfig;

