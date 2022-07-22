/** @jsx jsx */
/** @jsxFrag React.Fragment */

import styled from "@emotion/styled"
import {
    css,
    jsx,
    useTheme,
} from "@emotion/react"

import * as React from "react"
import {
    CSSTransition
} from "react-transition-group"

import {
    type ITheme,
    glow,
    mediaQueryMinWidth,
    mediaQueryMaxWidth,
} from "../../style"

const navigationPanelFadeDuration = (theme: ITheme) => {
    return theme.navigationPanel.fadeTransitionDuration
}

const navigationPanelSlideDuration = (theme: ITheme) => {
    return theme.navigationPanel.slideTransitionDuration
}

const LinkList = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    font-family: lores-12;

    list-style: none;

    padding: 0;
    margin: 0;

    width: 100%;

    & > li > a {
        text-transform: uppercase;
        &:hover {
            text-shadow: ${props => glow((props.theme as ITheme).navigationPanel.colors.foreground)};
        }
    }

    ${mediaQueryMaxWidth("small")} {
        align-content: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        font-size: 2rem;
        font-weight: 900;

        min-height: 100vh;

        & > li.title {
            display: none;
        }
    }
`

const navigationStyle = (theme: ITheme) => {
    const fadeDuration = `${navigationPanelFadeDuration(theme)}ms`
    const slideDuration = `${navigationPanelSlideDuration(theme)}ms`

    return css({
        [mediaQueryMaxWidth("small")]: {
            backgroundColor: theme.navigationPanel.colors.background,

            display: "none",
            opacity: 0,

            position: "absolute",
            left: 0,
            top: 0,

            width: "100vw",
            height: "100vh",

            zIndex: 1,

            "&.enter": {
                display: "block",
                "& > ul": {
                    transform: "translateY(-100%)",
                },
            },
    
            "&.enter-active": {
                display: "block",
                opacity: 1,
                transition: `opacity ${fadeDuration} ease-in-out`,
    
                "& > ul": {
                    transform: "translateY(0)",
                    transition: `transform ${slideDuration} ease-in-out ${fadeDuration}`,
                },
            },

            "&.enter-done": {
                display: "block",
                opacity: 1,
            },
    
            "&.exit": {
                display: "block",
                opacity: 1,
            },
    
            "&.exit-active": {
                display: "block",
                opacity: 0,
                transition: `opacity ${fadeDuration} ease-in-out ${slideDuration}`,
    
                "& > ul": {
                    transform: "translateY(-100%)",
                    transition: `transform ${slideDuration} ease-in-out`,
                }
            },
        },

        [mediaQueryMinWidth("medium")]: {
            display: "block",
            opacity: 1,
        },
    })
}

interface INavigationProps {
    active: boolean
    children: React.ReactNode
}

const NavigationPanel = ({ active, children }: INavigationProps) => {
    const theme = useTheme() as ITheme

    const navEl = React.useRef<HTMLDivElement>(null)
    const listEl = React.useRef<HTMLUListElement>(null)

    return <CSSTransition
        in={ active }
        nodeRef={ navEl }
        timeout={ navigationPanelFadeDuration(theme) + navigationPanelSlideDuration(theme) }
    >
        <nav css={ navigationStyle(theme) } ref={ navEl }>
            <LinkList ref={ listEl }>{ children }</LinkList>
        </nav>
    </CSSTransition>
}

export default NavigationPanel
