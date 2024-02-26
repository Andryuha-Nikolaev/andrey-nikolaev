// /** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
      }
    )

    return config
  },
  reactStrictMode: false,
  images: {
    formats: ["image/webp"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
  experimental: {
    scrollRestoration: true,
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
}
