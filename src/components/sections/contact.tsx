/** @jsx jsx */

import {
    jsx,
} from "@emotion/react"

import {
    Section,
    SectionHeader,
} from "@/components/section"

export const Contact = () => {
    return <Section id="contact" css={{ textAlign: "center" }}>
        <SectionHeader>Contact</SectionHeader>
        <p>
            I am not currently looking for new opportunities.
        </p>
        <p>
            However if you have any questions, feel free to <a href="mailto:julien@graziano.fr">email me</a>.
        </p>
    </Section>
}
