/** @type {import('next').NextConfig} */

function override(config) {
    config.ignoreWarnings = [/Failed to parse source map/];
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
      crypto: false,
      events: false,
      path: false,
      string_decoder: false,
      http: false,
      https: false,
      url: false,
      fs: false,
      net: false,
      tls: false,
      zlib: false,
      bufferutil: false,
      "utf-8-validate": false,
    });

    config.resolve.fallback = fallback;
    return config;
  };

const nextConfig = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
      ) => {
        // Important: return the modified config
        return override(config)
      },
   
}

module.exports = nextConfig
