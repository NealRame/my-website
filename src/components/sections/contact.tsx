/** @jsx jsx */

import {
    jsx,
} from "@emotion/react"

import StyledSection from "../section"
import StyledSectionHeader from "../section-header"

export const Contact = () => {
    return <StyledSection id="contact" css={{ textAlign: "center" }}>
        <StyledSectionHeader>Contact</StyledSectionHeader>
        <p>
            I am not currently looking for new opportunities.
        </p>
        <p>
            However if you have any questions, feel free to <a href="mailto:julien@graziano.fr">email me</a>.
        </p>
    </StyledSection>
}
