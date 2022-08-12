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

const Aside = styled.aside`
    display: none;

    padding: .5rem 0 .5rem;

    ${mediaQueryMinWidth("medium")} {
        display: block;

        position: fixed;
        bottom: 0;
        left: 0;

        padding: 0;
        margin: 0;

        width: ${props => (props.theme as ITheme).socialBar.width};
    }

    & > ul {
        align-items: center;
        flex-direction: column;

        &::after {
            border-left: 1px solid ${props => (props.theme as ITheme).socialBar.colors.border};
            content: "";
            width: 1px;
            height: 128px;
            margin: 0 auto;
        }
    }
`

const SocialBar = () => {
    return <Aside><SocialLinks/></Aside>
}

export default SocialBar
