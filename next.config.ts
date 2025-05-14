
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // Allow data URIs for generated images
    domains: ['localhost'], // Required for `next/image` with `src` as data URI in dev. For prod, this might not be needed if served differently.
    // For data URIs, you might not need to specify domains if they are handled correctly by next/image.
    // If issues arise with data URIs, ensure your Next.js version supports them well.
    // The `domains` config is more for external URLs. Data URIs are self-contained.
    // However, to be safe, and as `next/image` can be particular:
    // It's often better to upload generated images to a storage service and use their URLs.
    // For this example, we'll rely on next/image handling data URIs.
    // If `next/image` complains about data URIs, you might need to set unoptimized: true for those images
    // or find an alternative way to display them, or use a loader.
    // The most direct way for data URIs to work with `next/image` is that they should just work.
    // No specific `domains` entry is usually needed for "data:" scheme.
  },
};

export default nextConfig;

