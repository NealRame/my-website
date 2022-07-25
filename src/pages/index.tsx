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
    Work,
} from "../components/sections"

import {
    mediaQueryMinWidth,
} from "../style"

const Sections = styled.div`
    ${mediaQueryMinWidth("medium")} {
        & > section:last-child {
            min-height: 100vh;
        }
    }
`

const IndexPage = ({ data }: IAllWorkQueryProps) => {
    return <Layout>
        <Greetings anchor="/#about"/>
        <Sections css={{ minHeight: "100vh" }}>
            <About/>
            <Contact/>
            <Work data={ data }/>
        </Sections>
    </Layout>
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    description
                    github
                    title
                }
                id
                slug
            }
        }
    }
`

export default IndexPage
