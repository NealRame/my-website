import path from "path"

import { NodePluginArgs } from "gatsby"

exports.onCreateWebpackConfig = ({ actions }: NodePluginArgs) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
    })
}
