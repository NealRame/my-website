/** @jsx jsx */
/** @jsxFrag React.Fragment */

import styled from "@emotion/styled"
import {
    jsx,
} from "@emotion/react"

import {
    type ITheme,
    mediaQueryMinWidth,
} from "@/style"

import SocialLinks from "./social-links"

const StyledFooter = styled.footer`
    font-size: smaller;
    padding: 1rem;
`

const StyledSocialLinks = styled.div`
    display: grid;

    grid-template-columns: 100fr, min-content, 100fr;

    & > ul::after,
    & > ul::before {
        align-self: center;

        border-top: 1px solid ${props => (props.theme as ITheme).socialBar.colors.border};

        content: "";

        height: 1px;
        width: 100%;
    }

    ${mediaQueryMinWidth("medium")} {
        display: none;
    }
`

const StyledCredit = styled.div`
    text-align: center;
`

const Footer = () => {
    return <StyledFooter>
        <StyledSocialLinks>
            <SocialLinks/>
        </StyledSocialLinks>
        <StyledCredit>
            <a href="https://github.com/NealRame/my-website">
                Designed & built by Neal.Rame.
            </a>
        </StyledCredit>
    </StyledFooter>
}

export default Footer