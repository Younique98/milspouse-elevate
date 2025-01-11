import path from 'path';

interface WebpackConfig {
  resolve: {
    alias: {
      [key: string]: string;
    };
  };
}

interface NextConfig {
  experimental: {
    turbo: boolean;
  };
  webpack: (config: WebpackConfig) => WebpackConfig;
}

const nextConfig: NextConfig = {
  experimental: {
    turbo: true
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/features'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@api': path.resolve(__dirname, './src/app/api'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@types': path.resolve(__dirname, './src/types'),
      '@prisma': path.resolve(__dirname, './src/lib/prisma'),
      '@config': path.resolve(__dirname, './src/config'),
    }
    return config;
  }
}

export default nextConfig;

