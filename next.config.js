const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools(
    {images: {
    domains: ['cdn.builder.io','i.pinimg.com'], 

    
  },}
  );

module.exports = nextConfig;
