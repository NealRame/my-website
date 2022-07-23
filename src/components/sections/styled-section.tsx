import * as React from "react"

import styled from "@emotion/styled"
import {
    type ITheme,
    mediaQueryMinWidth,
} from "../../style"

export const StyledSection = styled.section`
    box-sizing: border-box;

    padding: ${props => (props.theme as ITheme).contentSection.padding};
    margin: 0 auto;

    ${mediaQueryMinWidth("medium")} {
        width: ${props => (props.theme as ITheme).breakpoints.medium}px;
    }

    ${mediaQueryMinWidth("large")} {
        width: ${props => (props.theme as ITheme).breakpoints.large}px;
    }

    h1 {
        display: grid;
        grid-template-columns: auto auto 100fr;
        align-items: baseline;
        gap: 1rem;

        margin: ${props => (props.theme as ITheme).contentSection.headerMargin};

        &::before {
            color: ${props => (props.theme as ITheme).contentSection.colors.index};

            counter-increment: content-section;
            content: counter(content-section, decimal-leading-zero) ". ";

            font-size: ${props => (props.theme as ITheme).contentSection.fontSizes.index};
        }

        &::after {
            align-self: center;

            border-bottom: 1px solid ${(props => (props.theme as ITheme).contentSection.colors.border)};

            content: "";

            height: 1px;
        }
    }
`
