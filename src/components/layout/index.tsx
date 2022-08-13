/** @jsx jsx */
/** @jsxFrag React.Fragment */

import {
    graphql,
    useStaticQuery,
} from "gatsby"

import {
    jsx,
} from "@emotion/react"

import * as React from "react"
import {
    Helmet,
} from "react-helmet"

import GlobalStyle from "@/components/global-style"

import Header from "./header"
import Footer from "./footer"
import SocialLinks from "./social-links"

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

    const mainEl = React.useRef<HTMLDivElement>(null)
    const [stickedHeader, setStickedHeader] = React.useState(false)

    const onScroll = (ev: Event) => {
        const { y: yOffset } = mainEl.current?.getBoundingClientRect() ?? { y: 0 }
        setStickedHeader(yOffset < 0)
    }

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    })

    return <>
        <GlobalStyle/>
        <Helmet>
            <title>
                { [siteTitle, pageTitle].filter(Boolean).join(" - ") }
            </title>
        </Helmet>
        <Header siteTitle={ siteTitle } sticked={ stickedHeader }/>
        <main ref={ mainEl }>
            { children }
        </main>
        <SocialLinks/>
        <Footer/>
    </>
}

export default Layout
