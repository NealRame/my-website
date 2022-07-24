/** @jsx jsx */

import {
    jsx,
} from "@emotion/react"

import {
    StyledSection,
} from "./styled-section"

export const Contact = () => {
    return <StyledSection id="contact" css={{ textAlign: "center" }}>
        <h1>Contact</h1>
        <p>
            I am not currently looking for new opportunities.
        </p>
        <p>
            However if you have any questions, feel free to <a href="mailto:julien@graziano.fr">email me</a>.
        </p>
    </StyledSection>
}
