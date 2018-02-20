module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ryan Coughlin',
        short_name: 'Ryan Coughlin',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#ffd14e',
        display: 'minimal-ui'
      }
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`oswald\:700`, `arapey\:400`, `lora\:400`]
      }
    }
  ]
}
