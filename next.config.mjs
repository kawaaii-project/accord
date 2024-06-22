import withMDX from '@next/mdx';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const mdxPlugin = withMDX({
    extension: /\.mdx$/
});
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withVanillaExtract(mdxPlugin(nextConfig));
