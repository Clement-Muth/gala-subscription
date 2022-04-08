const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
const withTM = require("next-transpile-modules")(["components"]);

const nextConfig = {
  env: {
    IS_DEV: process.env.IS_DEV,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGEING_SENDER_ID: process.env.MESSAGEING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    API_KEY_VISION: process.env.API_KEY_VISION,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
  },
  trailingSlash: true,
  compress: true,
  // swcMinify: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true
  }
};

module.exports = withPlugins(
  [
    {
      key: "X-Frame-Options",
      value: "SAMEORIGIN"
    },
    {
      key: "X-XSS-Protection",
      value: "1; mode=block"
    },
    {
      key: "Access-Control-Allow-Origin",
      value: "*"
    },
    {
      key: "Referrer-Policy",
      value: "SAMEORIGIN"
    },
    withPWA,
    {
      pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development"
      }
    },
    withTM,
    {
      reactStrictMode: true
    },
    [
      (withOffline,
      {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // 4Mb
        transformManifest: (manifest) => ["/"].concat(manifest), // add the homepage to the cache
        generateInDevMode: false,
        workboxOpts: {
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
              handler: "CacheFirst",
              options: {
                cacheName: "images",
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                  purgeOnQuotaError: true
                }
              }
            },
            {
              urlPattern: /^https:\/\/(use|p)\.typekit\.net\/.+$/,
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "typekit-cache",
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      })
    ]
  ],
  nextConfig
);
