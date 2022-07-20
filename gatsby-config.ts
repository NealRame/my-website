import type { GatsbyConfig } from "gatsby"

import * as dotenv from "dotenv"

dotenv.config()

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Neal.Rame.`,
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-mdx",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png",
            }
        }, {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                },
            },
        }, {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "work",
                path: `${__dirname}/src/work`,
            }
        },
    ],
}

export default config
