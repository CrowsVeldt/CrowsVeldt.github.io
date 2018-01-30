module.exports = {
  siteMetadata: {
    title: 'Zechy\'s Personal Site',
    author: 'Zechariah Mahler'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-glamor',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark'
  ]
}
