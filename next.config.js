/** @type {import("next").NextConfig} */

const path = require("path");
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: false,
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    esmExternals: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};

module.exports = nextConfig;
