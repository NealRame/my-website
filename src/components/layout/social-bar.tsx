/** @jsx jsx */
/** @jsxFrag React.Fragment */

import styled from "@emotion/styled"
import {
    jsx,
} from "@emotion/react"

import {
    FontAwesomeIcon,
} from "@fortawesome/react-fontawesome"

import {
    faCodepen,
    faGithubAlt,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import {
    type ITheme,
    horizontalShake,
    mediaQueryMinWidth,
} from "@/style"

const Aside = styled.aside`
    padding: .5rem 0 .5rem;

    ${mediaQueryMinWidth("medium")} {
        position: fixed;
        bottom: 0;
        left: 0;

        padding: 0;
        margin: 0;

        width: ${props => (props.theme as ITheme).socialBar.width};
    }
`

const List = styled.ul`
    display: flex;

    justify-content: center;

    list-style: none;

    padding: 0;
    margin: 0;

    gap: ${props => (props.theme as ITheme).socialBar.gap};

    li:hover {
        animation: ${horizontalShake(2)} 400ms ease 0s 1 normal forwards;
    }

    ${mediaQueryMinWidth("medium")} {
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
    return <Aside>
        <List>
            <li>
                <a
                    href="https://github.com/NealRame"
                    target="_blank"
                ><FontAwesomeIcon fixedWidth icon={ faGithubAlt }/></a>
            </li><li>
                <a
                    href="https://codepen.io/NealRame"
                    target="_blank"
                ><FontAwesomeIcon fixedWidth icon={ faCodepen }/></a>
            </li><li>
                <a
                    href="https://www.instagram.com/nealrame/"
                    target="_blank"
                ><FontAwesomeIcon fixedWidth icon={ faInstagram }/></a>
            </li><li>
                <a
                    href="https://twitter.com/NealRame"
                    target="_blank"
                ><FontAwesomeIcon fixedWidth icon={ faTwitter }/></a>
            </li>
        </List>
    </Aside>
}

export default SocialBar
