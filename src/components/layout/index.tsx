/** @jsx jsx */
/** @jsxFrag React.Fragment */

import {
    graphql,
    useStaticQuery,
    Link,
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
    mediaQuery,
} from "../../style"

import GlobalStyle from "../global-style"

const Container = styled.div`
    display: grid;

    grid-template-rows: auto 100fr;

    overflow: hidden;

    margin: auto;
    padding: 0;

    width: 100%;
    min-height: 100vh;
`

const Header = styled.header`
    display: grid;

    grid-template-rows: min-content 100fr;

    width: 100vw;
`

const Main = styled.main`
    box-sizing: border-box;

    margin: 0 auto;
    padding: 0 1rem;

    width: 100%;

    ${mediaQuery("medium")} {
        width: ${props => (props.theme as ITheme).breakpoints.medium}px;
    }

    ${mediaQuery("large")} {
        width: ${props => (props.theme as ITheme).breakpoints.large}px;
    }
`

const NavigationPanelSite = ({ active }: { active: boolean}) => {
    return <NavigationPanel active={ active } menu="site">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/work/">Work</Link></li>
    </NavigationPanel>
}

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

    const [pageMenuActive, setPageMenuActive] = React.useState(false)

    return <>
        <GlobalStyle/>
        <Helmet>
            <title>
                { [siteTitle, pageTitle].filter(Boolean).join(" - ") }
            </title>
        </Helmet>
        <Container>
            <Header>
                <NavigationBar
                    pageMenuActive={ pageMenuActive }
                    onPageMenuClicked={ () => setPageMenuActive(!pageMenuActive) }
                    siteTitle={ siteTitle }
                />
                <NavigationPanelSite active={ pageMenuActive }/>
            </Header>
            <SocialBar/>
            <Main>
                { children }
            </Main>
        </Container>
    </>
}

export default Layout
