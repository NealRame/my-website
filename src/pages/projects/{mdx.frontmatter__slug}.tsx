import {
    graphql,
    type PageProps,
} from "gatsby"

import * as React from "react"

import Layout from "@/components/layout"
import {
    Section,
} from "@/components/section"

const Content = ({ children }: PageProps) => {
    return <Layout>
        <Section>
            { children }
        </Section>
    </Layout>
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export { Head } from "@/components/head"

export default Content
