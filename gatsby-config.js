require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Blog Site`,
    description: `Kick off your next, great blogs with this beautiful site.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
    {
      resolve:'gatsby-plugin-firebase',
      options:{
        credentials: {
        apiKey:process.env.API_KEY,
        authDomain:process.env.AUTH_DOMAIN,
        projectId:process.env.PROJECT_ID,
        storageBucket:process.env.STORAGE_BUCKET,
        messagingSenderId:process.env.MESSAGING_SENDER_ID,
        appId:process.env.APP_ID,
        measurementId:process.env.MEASUREMENT_ID
        }
      }
    }
  ],
}
