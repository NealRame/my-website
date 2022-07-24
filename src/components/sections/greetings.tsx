/** @jsx jsx */
/** @jsxFrag React.Fragment */

import styled from "@emotion/styled"
import {
    jsx,
} from "@emotion/react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faAnglesDown,
} from "@fortawesome/free-solid-svg-icons"


import Typewriter from "../typewriter"

import {
    type ITheme,
    verticalShake,
} from "../../style"

const StyledLink = styled.a`
    background: none;
    border: none;

    color: ${props => (props.theme as ITheme).colors.link};
    cursor: pointer;

    font-size: 2rem;

    margin: 1rem auto;

    animation: ${verticalShake(2)} 8s ease-in-out 0s infinite alternate-reverse none;
`

interface IScrollToButtonProps {
    anchor: string
}

const ScrollToButton = ({ anchor }: IScrollToButtonProps) => {
    return <StyledLink href={ anchor }>
        <FontAwesomeIcon icon={faAnglesDown}/>
    </StyledLink>
}

interface IGreetingsProps {
    anchor: string
}

export const Greetings = ({ anchor }: IGreetingsProps) => <section css={{
    display: "grid",
    gridTemplateRows: "100fr auto",
    height: "100vh",
}}>
    <Typewriter messages={[
        "GREETINGS",
        "HOW ARE YOU FEELING TODAY?",
        "SHALL WE PLAY A GAME?",
    ]}/>
    <ScrollToButton anchor={ anchor }/>
</section>
