import {
    graphql,
    Link,
} from "gatsby"

import styled from "@emotion/styled"

import * as React from "react"

import Layout from "../../components/layout"

interface IPostEntryProps {
    frontmatter: {
        date: string
        title: string
    }
    id: string
    slug: string
}

interface IAllPostQueryProps {
    data: {
        allMdx: {
            nodes: Array<IPostEntryProps>
        }
    }
}

const Title = styled.h1`
    padding-bottom: 0;
    margin: 0;
`

const Post = ({ post }: { post: IPostEntryProps }) => {
    return <article key={ post.id }>
        <Title>
            <Link to={ `/work/${post.slug}` }>
                { post.frontmatter.title }
            </Link>
        </Title>
        Posted: { post.frontmatter.date }
    </article>
}

const WorkPage = ({ data }: IAllPostQueryProps) => (
    <Layout pageTitle="Work">
        { data.allMdx.nodes.map(node => (
            <Post post={ node } key={ node.id }/>
        )) }
    </Layout>
)

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                slug
            }
        }
    }
`

export default WorkPage
