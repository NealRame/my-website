import {
    graphql,
    Link,
} from "gatsby"

import styled from "@emotion/styled"

import * as React from "react"

import {
    StyledSection,
} from "../styled-section"

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

const Title = styled.h2`
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

export const Work = ({ data }: IAllPostQueryProps) => (
    <StyledSection id="work">
        <h1>Work</h1>
        { data.allMdx.nodes.map(node => <Post post={ node } key={ node.id }/>) }
    </StyledSection>
)
