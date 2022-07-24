import styled from "@emotion/styled"
import {
    type ITheme,
} from "../style"

const StyledSectionHeader = styled.h1`
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
`

export default StyledSectionHeader
