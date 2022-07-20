/** @jsx jsx */
/** @jsxFrag React.Fragment */

import styled from "@emotion/styled"
import {
    type Theme,
    jsx,
    useTheme,
} from "@emotion/react"

import {
    CSSTransition,
} from "react-transition-group"

import {
    FontAwesomeIcon,
} from "@fortawesome/react-fontawesome"

import {
    faBars,
    faEnvelope,
    faXmark,
} from "@fortawesome/free-solid-svg-icons"

import {
    type ITheme,
} from "../../style"

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
    background-color: transparent;
    border: none;
    color: ${color("foreground")};
    cursor: pointer;
    outline: none;
    padding: 0;

    &:focus {
        color: ${color("focus")};
    }
    &:hover {
        color: ${color("hover")};
    }
`

const Title = styled.h1`
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
`

interface INavigationBarProps {
    pageMenuActive: boolean
    onPageMenuClicked: () => void
    siteTitle: string
}

const NavigationBar = ({
    pageMenuActive,
    onPageMenuClicked,
    siteTitle
}: INavigationBarProps) => {
    const theme = useTheme()

    return <div css={{
        boxSizing: "border-box",

        display: "grid",
        gridTemplateColumns: "min-content 100fr min-content",

        padding: "1rem",

        zIndex: 2,
    }}>
        <Button
            onClick={ onPageMenuClicked }>
            <FontAwesomeIcon
                icon={ pageMenuActive ? faXmark : faBars }
                size="3x"
                fixedWidth
            />
        </Button>
        <CSSTransition
            in={ pageMenuActive }
            timeout={ fadeDuration({ theme }) + slideDuration({ theme }) }
        ><Title>{ siteTitle }</Title></CSSTransition>
    </div>
}

export default NavigationBar