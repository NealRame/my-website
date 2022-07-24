/** @jsx jsx */
/** @jsxFrag React.Fragment */

import styled from "@emotion/styled"
import {
    jsx,
    useTheme,
} from "@emotion/react"

import StyledSection from "../section"
import StyledSectionHeader from "../section-header"

import {
    type ITheme,
} from "../../style"

const StyledList = styled.ul`
    display: flex;

    flex-direction: column;
    gap: .25rem;

    list-style: none;

    margin: 0;
    padding: 0;

    & > li {
        display: flex;

        align-items: baseline;
        gap: .5rem;

        font-size: 0.8rem;

        &::before {
            background-color: ${props => (props.theme as ITheme).colors.link};
            color: ${props => (props.theme as ITheme).colors.background};

            content: "✱";

            font-size: 0.5rem;

            padding: 2px 2px 0;
        }
    }
`

export const About = () => {
    const theme = useTheme() as ITheme
    return <StyledSection id="about">
        <StyledSectionHeader>About Me</StyledSectionHeader>
        <p>
            Hi there! I'm a software engineer with a passion for building things
            that run in the browser.
        </p>
        <p>
            I am currently employed by the company <i>Arobas Music</i> where I
            participate in the development of the <a href="https://www.guitar-pro.com/">Guitar Pro</a> application.
        </p>
        <p>
            Here are a few technologies I have worked with:
        </p>
        <div css={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-evenly",
            padding: ".75rem",
        }}>
            <StyledList>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>Node.js</li>
            </StyledList>

            <StyledList>
                <li>C++</li>
                <li>CMake</li>
                <li>Conan</li>
            </StyledList>

            <StyledList>
                <li>Docker</li>
                <li>Jenkins</li>
                <li>Travis</li>
            </StyledList>

            <StyledList>
                <li>Python</li>
                <li>Django</li>
            </StyledList>
        </div>
    </StyledSection>
}
