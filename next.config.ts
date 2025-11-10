import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/shared/configs/next-intl/i18n.ts',
);

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: false,
  webpack: (config, options) => {
    config.module.rules.push({
      exclude: /node_modules/,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgoConfig: {
              plugins: [
                { name: 'convertColors', params: { currentColor: true } },
              ],
            },
          },
        },
      ],
    });

    config.module.rules.push({
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'static/media',
      },
      test: /\.(mp4)$/i,
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
