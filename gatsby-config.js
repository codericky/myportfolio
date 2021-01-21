const path = require(`path`)

module.exports = {
  siteMetadata:{
    title: `Areta Informatics College`,
    author: `Developer Ricky areta net`,
    description: `Web Blog Developer  Technology Information`
      },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
  ],
}