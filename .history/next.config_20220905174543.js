/** @type {import('next').NextConfig} */
//next.config.js
const { withContentlayer } = require('next-contentlayer');

const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki/themes/monokai.json");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media-exp1.licdn.com'],
    dangerouslyAllowSVG: true,
  }


}

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
  options: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
    rehypePlugins: [],
  },
  },
  
})

module.exports = withMDX({
  pageExtensions: [
    "ts", "tsx", "js", 
    "jsx", "md", "mdx"
  ],
})



module.exports = withContentlayer(nextConfig)