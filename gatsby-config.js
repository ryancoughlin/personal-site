module.exports = {
  siteMetadata: {
    title: `I like Google fonts`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `caladea`,
          `bebas neue`,
          `lora`,
          `sen`,
          `inter\:400, 400i,800,900`,
        ],
        display: "swap",
      },
    },
  ],
}
