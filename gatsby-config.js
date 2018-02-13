module.exports = {
  siteMetadata: {
    title: 'This Thing I Did',
    author: 'Zechariah Mahler',
    description: 'This Thing I Did - Blog',
    siteUrl: 'https://thisthingidid.surge.sh'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-glamor',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-feed'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700
            }
          }
        ]
      }
    }
  ]
}
