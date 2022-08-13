/** @jsx jsx */
/** @jsxFrag React.Fragment */

import styled from "@emotion/styled"
import {
    jsx,
} from "@emotion/react"

const StyledFooter = styled.footer`
    font-size: smaller;
    padding-bottom: 1rem;
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