/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { Link } from "gatsby"

import styled from "@emotion/styled"
import {
    type Theme,
    jsx,
    useTheme,
} from "@emotion/react"

import * as React from "react"

import {
    CSSTransition,
} from "react-transition-group"

import {
    FontAwesomeIcon,
} from "@fortawesome/react-fontawesome"

import {
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons"

import {
    type ITheme,
    mediaQueryMinWidth,
    mediaQueryMaxWidth,
} from "../../style"

import NavigationPanel from "./navigation-panel"

/* style helpers *************************************************************/

function color<T extends { theme: Theme }>(
    c: keyof ITheme["navigationBar"]["colors"]
): ({ theme }: T) => string {
    return ({ theme }) => (theme as ITheme).navigationBar.colors[c]
}

function fadeDuration<T extends { theme: Theme }>({
    theme
}: T): number {
    return (theme as ITheme).navigationPanel.fadeTransitionDuration
}

function slideDuration<T extends { theme: Theme }>({
    theme
}: T): number {
    return (theme as ITheme).navigationPanel.slideTransitionDuration
}

/*****************************************************************************/

const Button = styled.button`
    display: none;
    ${mediaQueryMaxWidth("small")} {
        display: inline;

        background-color: transparent;
        border: none;
    
        color: ${props => (props.theme as ITheme).navigationPanel.colors.foreground};
    
        cursor: pointer;
        outline: none;
        padding: 0;
    
        z-index: 2;
    
        &:focus {
            color: ${color("focus")};
        }
        &:hover {
            color: ${color("hover")};
        }
    }
`

const Title = styled.h1`
    display: none;

    ${mediaQueryMaxWidth("small")} {
        display: inline;

        color: ${color("header")};

        font-family: lores-9-wide, sans-serif;
        font-size: 2rem;
        font-weight: 900;
    
        margin: 0;
    
        text-align: center;
    
        &.enter {
            opacity: 1;
        }
        &.enter-active {
            opacity: 0;
            transition: opacity ${fadeDuration}ms ease-in-out;
        }
        &.enter-done {
            opacity: 0;
        }
        &.exit {
            opacity: 0;
        }
        &.exit-active {
            opacity: 1;
            transition-property: opacity;
            transition-delay: ${slideDuration}ms;
            transition-duration: ${fadeDuration}ms;
            transition-timing-function: ease-in-out;
        }
        &.exit-done {
            opacity: 1;
        }
    }
`

interface INavigationBarProps {
    siteTitle: string
}

const NavigationBar = ({ siteTitle }: INavigationBarProps) => {
    const theme = useTheme()
    const [pageMenuActive, setPageMenuActive] = React.useState(false)

    return <div css={{
        boxSizing: "border-box",

        padding: "1rem",

        [mediaQueryMaxWidth("small")]: {
            display: "grid",
            gridTemplateColumns: "min-content 100fr",
            alignItems: "baseline",
        },
    }}>
        <Button
            onClick={ () => setPageMenuActive(!pageMenuActive) }>
            <FontAwesomeIcon
                icon={ pageMenuActive ? faXmark : faBars }
                size="2x"
                fixedWidth
            />
        </Button>
        <CSSTransition
            in={ pageMenuActive }
            timeout={ fadeDuration({ theme }) + slideDuration({ theme }) }
        ><Title>{ siteTitle }</Title></CSSTransition>
        <NavigationPanel active={ pageMenuActive }>
            <li className="title">Neal.Rame.</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/work/">Work</Link></li>
        </NavigationPanel>
    </div>
}

export default NavigationBar