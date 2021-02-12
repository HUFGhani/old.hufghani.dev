/* eslint-disable */
const config = require(`./config/site`)
module.exports = {
  siteMetadata: {
    ...config,
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
        start_url: config.url,
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
  ],
}
