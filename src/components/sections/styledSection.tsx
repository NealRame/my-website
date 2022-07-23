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
        grid-template-columns: auto 100fr;
        align-items: center;
        
        margin: 2rem 0;

        &::after {
            border-bottom: 1px solid ${(props => (props.theme as ITheme).contentSection.colors.border)};
            content: "";
            height: 1px;
            margin-left: 1rem;
        }
    }
`
