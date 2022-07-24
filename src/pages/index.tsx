/** @jsx jsx */
/** @jsxFrag React.Fragment */

import {
    graphql,
} from "gatsby"

import styled from "@emotion/styled"
import {
    jsx,
} from "@emotion/react"

import Layout from "../components/layout"
import {
    About,
    Contact,
    Greetings,
    WorkSection,
} from "../components/sections"

import {
    mediaQueryMinWidth,
} from "../style"

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

const SectionsWrapper = styled.div`
    ${mediaQueryMinWidth("medium")} {
        & > section:last-child {
            min-height: 100vh;
        }
    }
`

const IndexPage = ({ data }: IAllPostQueryProps) => {
    return <Layout>
        <Greetings anchor="/#about"/>
        <SectionsWrapper css={{ minHeight: "100vh" }}>
            <About/>
            <Contact/>
            <WorkSection data={ data }/>
        </SectionsWrapper>
    </Layout>
}

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

export default IndexPage
