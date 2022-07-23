/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { Link } from "gatsby"

import { jsx } from "@emotion/react"
import styled from "@emotion/styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGhost,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"

import {
    type ITheme,
} from "../style"

const Error404 = styled.div`
    color: ${props => (props.theme as ITheme).error404.colors.foreground};

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;


    height: 100%;

    .ghost {
        color: ${props => (props.theme as ITheme).error404.colors.ghost};

        font-size: 2rem;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        z-index: -1;
    }

    h1 {
        font-family: lores-9-wide, sans-serif;
        font-size: 4rem;
        font-weight: 700;
    }
`

// markup
const NotFoundPage = () => (
    <Layout pageTitle="404 Error">
        <Error404>
            <h1>NOT FOUND</h1>
            <div className="ghost">
                <FontAwesomeIcon icon={ faGhost } size="10x" />
            </div>
            <div css={{ textAlign: "center" }}>
                <p>You just hit a route that doesn't exist...</p>
                <Link to="/">Go back to the homepage</Link>
            </div>
        </Error404>
    </Layout>
)

export default NotFoundPage
