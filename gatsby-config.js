module.exports = {
  siteMetadata: {
    title: 'Chance Made a Travel Blog?',
    description:
      'Attempting to share the experience of existential dread.... I mean travel, adventures, regretful food comas, and any mistakes along the way. Travel advice from flights to food and fun.',
    siteUrl: 'https://chanceontravel.com',
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'uploads',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://chanceontravel.com',
        sitemap: 'https://chanceontravel.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134062036-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-TDGL42F',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    'gatsby-plugin-purgecss', // must be after other CSS plugins
    'gatsby-plugin-netlify',
    //{
    // resolve: 'gatsby-source-shopify',
    // options: {
    //   // The domain name of your Shopify shop. This is required.
    //   // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
    //   // 'gatsby-source-shopify-test-shop.myshopify.com'.
    //   shopName: 'chance-on-travel',

    //   // An API access token to your Shopify shop. This is required.
    //   // You can generate an access token in the "Manage private apps" section
    //   // of your shop's Apps settings. In the Storefront API section, be sure
    //   // to select "Allow this app to access your storefront data using the
    //   // Storefront API".
    //   // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
    //   accessToken: '508dace2e618f46a4baf492dbb9a8908',

    //   // Set verbose to true to display a verbose output on `npm run develop`
    //   // or `npm run build`. This prints which nodes are being fetched and how
    //   // much time was required to fetch and process the data.
    //   // Defaults to true.
    //   verbose: true,
    // },
    //}, // make sure to keep it last in the array
  ],
};
