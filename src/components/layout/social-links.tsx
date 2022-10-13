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
    mediaQueryMaxWidth,
    mediaQueryMinWidth,
} from "@/style"

const StyleAside = styled.aside`
    padding: 1rem 1rem 0;

    ${mediaQueryMinWidth("medium")} {
        padding: .5rem 0 .5rem;

        display: block;

        position: fixed;
        bottom: ${props => (props.theme as ITheme).socialBar.bottom};
        left: 0;

        padding: 0;
        margin: 0;

        width: ${props => (props.theme as ITheme).socialBar.width};
    }

    & > ul {
        display: flex;

        align-items: center;

        justify-content: center;
        gap: ${props => (props.theme as ITheme).socialBar.gap};

        list-style: none;

        padding: 0;
        margin: 0;

        li:hover {
            animation: ${horizontalShake(2)} 400ms ease 0s 1 normal forwards;
        }

        ${mediaQueryMaxWidth("medium")} {
            &::after,
            &::before {
                align-self: center;
        
                border-top: 1px solid ${props => (props.theme as ITheme).socialBar.colors.border};
        
                content: "";
        
                height: 1px;
                width: 100%;
            }
        }

        ${mediaQueryMinWidth("medium")} {
            flex-direction: column;

            &::after {
                border-left: 1px solid ${props => (props.theme as ITheme).socialBar.colors.border};
                content: "";
                width: 1px;
                height: 128px;
                margin: 0 auto;
            }
        }
    }
`

const SocialLinks = () => {
    return <StyleAside>
        <ul>
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
        </ul>
    </StyleAside>
}

export default SocialLinks
