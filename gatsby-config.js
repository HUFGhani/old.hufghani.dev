/* eslint-disable */
const config = require(`./config/site`)
const socialMedia = require(`./config/socialMedia`)
module.exports = {
  siteMetadata: {
    ...config,
    socialMedia: {
      ...socialMedia,
    },
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: `/?source=pwa`,
        background_color: config.backgroundColor,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `./src/pages/`,
    //   },
    //   __key: `pages`,
    // },
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-minify-html`,
      options: {
        debug: true, // debug optional, default false
      },
    },
    {
      resolve: `gatsby-plugin-brotli`,
      options: {
        extensions: [`css`, `html`, `js`, `svg`],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.hufghani.dev',
        sitemap: 'https://www.hufghani.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-react-svg`,
  ],
}
