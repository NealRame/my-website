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

const GreetingScrollButton = styled.button`
    background: none;
    border: none;

    color: ${props => (props.theme as ITheme).colors.link};
    cursor: pointer;

    display: block;

    font-size: 2rem;

    margin: 1rem auto;

    animation: ${verticalShake(2)} 8s ease-in-out 0s infinite alternate-reverse none;
`

export const Greetings = () => <section css={{
    display: "grid",
    gridTemplateRows: "100fr auto",
    height: "100vh",
}}>
    <Typewriter messages={[
        "GREETINGS",
        "HOW ARE YOU FEELING TODAY?",
        "SHALL WE PLAY A GAME?",
    ]}/>
    <GreetingScrollButton>
        <FontAwesomeIcon icon={ faAnglesDown }/>
    </GreetingScrollButton>
</section>
