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
        <main>
            { children }
        </main>
        <SocialBar/>
    </>
}

export default Layout
