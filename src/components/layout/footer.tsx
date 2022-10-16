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

const StyledFooter = styled.footer`
    ${mediaQueryMinWidth("medium")} {
        background-color: ${props => (props.theme as ITheme).footer.colors.background};
        border-top: 1px solid ${props => (props.theme as ITheme).footer.colors.border};
        height: ${props => (props.theme as ITheme).footer.height};
    }
    font-size: 0.75rem;
`

const StyledCredit = styled.div`
    text-align: center;
`

const Footer = () => {
    return <StyledFooter>
        <StyledCredit>
            <a
                href="https://github.com/NealRame/my-website"
                target="_blank"
            >Designed & built by Neal.Rame.</a>
        </StyledCredit>
    </StyledFooter>
}

export default Footer