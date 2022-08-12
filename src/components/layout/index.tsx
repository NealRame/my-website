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

import NavigationBar from "./navigation-bar"
import SocialBar from "./social-bar"

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
    const [stickyNavigationBar, setStickyNavigationBar] = React.useState(false)

    const onScroll = (ev: Event) => {
        const { y: yOffset } = mainEl.current?.getBoundingClientRect() ?? { y: 0 }
        setStickyNavigationBar(yOffset < 0)
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
        <header>
            <NavigationBar siteTitle={ siteTitle } sticky={ stickyNavigationBar }/>
        </header>
        <main ref={ mainEl }>
            { children }
        </main>
        <SocialBar/>
    </>
}

export default Layout
