/** @jsx jsx */
/** @jsxFrag React.Fragment */

import {
    graphql,
    useStaticQuery,
} from "gatsby"

import styled from "@emotion/styled"
import {
    jsx,
} from "@emotion/react"

import * as React from "react"
import {
    Helmet,
} from "react-helmet"

import NavigationBar from "./navigation-bar"
import NavigationPanel from "./navigation-panel"
import SocialBar from "./social-bar"

import {
    type ITheme,
    mediaQueryMinWidth,
} from "../../style"

import GlobalStyle from "../global-style"

const Main = styled.main`
    box-sizing: border-box;

    margin: 0 auto;
    padding: 0 1rem;

    width: 100%;

    ${mediaQueryMinWidth("medium")} {
        width: ${props => (props.theme as ITheme).breakpoints.medium}px;
    }

    ${mediaQueryMinWidth("large")} {
        width: ${props => (props.theme as ITheme).breakpoints.large}px;
    }
`

interface ILayoutProps {
    children: React.ReactNode
    pageTitle?: string
}

const Layout = ({ children, pageTitle }: ILayoutProps) => {
    const { site: { siteMetadata: { title: siteTitle }}} = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return <>
        <GlobalStyle/>
        <Helmet>
            <title>
                { [siteTitle, pageTitle].filter(Boolean).join(" - ") }
            </title>
        </Helmet>
        <header>
            <NavigationBar siteTitle={ siteTitle } />
        </header>
        <Main>
            { children }
        </Main>
        <SocialBar/>
    </>
}

export default Layout
