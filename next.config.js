const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    reactStrictMode: false,
    swcMinify: true,
    optimizeFonts: true,
    // forceSwcTransforms: true,
    // output: "export",
    // distDir: "build",
    images: {
        unoptimized: true,
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
        ],
    },
});
