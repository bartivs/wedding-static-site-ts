import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `wedding-static-site`,
    siteUrl: `https://www.yourdomain.tld`,
    image: `./src/images/icon.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `png`, `jpg`],
          placeholder: `none`,
          // background: 'none',
          breakpoints: [750, 1080, 1366, 1920],
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
