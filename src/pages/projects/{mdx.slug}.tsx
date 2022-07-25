import {
    graphql,
} from "gatsby"
import {
    MDXRenderer,
} from "gatsby-plugin-mdx"

import * as React from "react"

import Layout from "../../components/layout"
import {
    Section,
} from "../../components/section"

interface IContentQueryData {
    data: {
        mdx: {
            frontmatter: {
                date: string
                title: string
            }
            body: string
        }
    }
}

const Content = ({ data }: IContentQueryData) => {
    return <Layout pageTitle={ data.mdx.frontmatter.title }>
        <Section>
            <MDXRenderer>{ data.mdx.body }</MDXRenderer>
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
