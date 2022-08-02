module.exports = {
  siteMetadata: {
    siteUrl: "https://sklad2.sushihiro.kz/",
    title: "Заявка на склад Суши Хиро",
    author: `Konstantin Moroz`,
    description: "Сервис для отправки заявки на продукты на склад Суши Хиро",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-vanilla-extract",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter WordPress Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://api.sushihiro.kz/graphql'
      }
    }
  ],
}
