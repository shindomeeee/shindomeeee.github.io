require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@pages": `${__dirname}/src/pages`,
        "@images": `${__dirname}/src/images`,
        "@components": `${__dirname}/src/components`,
        "@defines": `${__dirname}/src/defines`,
        "@actions": `${__dirname}/src/actions`,
        "@containers": `${__dirname}/src/containers`,
        "@states": `${__dirname}/src/states`,
        "@thunks": `${__dirname}/src/thunks`,
        "@stores": `${__dirname}/src/stores`,
        "@styles": `${__dirname}/src/styles`
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-124571274-1"
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("postcss-preset-env")({ stage: 0 })]
      }
    }
  ]
};
