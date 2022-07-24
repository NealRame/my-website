import styled from "@emotion/styled"
import {
    type ITheme,
    mediaQueryMinWidth,
} from "../style"

const StyledSection = styled.section`
    box-sizing: border-box;

    padding: ${props => (props.theme as ITheme).contentSection.padding};
    margin: 0 auto;

    ${mediaQueryMinWidth("medium")} {
        width: ${props => (props.theme as ITheme).breakpoints.medium}px;
    }

    ${mediaQueryMinWidth("large")} {
        width: ${props => (props.theme as ITheme).breakpoints.large}px;
    }
`



export default StyledSection