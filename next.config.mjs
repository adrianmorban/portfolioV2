/** @type {import('next').NextConfig} */
import mdx from '@next/mdx';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

const withMDX = mdx({
  extension: /\.mdx?$/,
});

export default withMDX({
  ...nextConfig, // Combina nextConfig con la configuración de MDX
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
