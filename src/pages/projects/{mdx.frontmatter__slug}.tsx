import {
    graphql,
} from "gatsby"

import * as React from "react"

import Layout from "@/components/layout"
import {
    Section,
} from "@/components/section"

interface IContentQueryData {
    data: {
        mdx: {
            frontmatter: {
                date: string
                title: string
            }
            body: string
        }
    },
    children: React.ReactNode
}

const Content = ({ data, children }: IContentQueryData) => {
    return <Layout pageTitle={ data.mdx.frontmatter.title }>
        <Section>
            { children }
        </Section>
    </Layout>
}

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                date(formatString: "D MMMM, YYYY")
                title
            }
            body
        }
    }
`

export default Content
