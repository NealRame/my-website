import * as React from "react"

import styled from "@emotion/styled"

import {
    type ITheme,
} from "@/style"

function updateInputRangeTrack({
    min,
    max,
    value
}: React.InputHTMLAttributes<HTMLInputElement>) {
    return `${100*(Number(value) - Number(min))/(Number(max) - Number(min))}%`
}

const InputRange = styled.input`
    background: ${props => (props.theme as ITheme).inputRange.colors.background};

    border: 1px solid ${props => (props.theme as ITheme).inputRange.colors.border};
    border-radius: 6px;

    margin: 0;
    padding: 1px;
    
    width: 100%;
    height: 6px;

    -webkit-appearance: none;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;

        background: ${props => (props.theme as ITheme).inputRange.colors.thumb};

        border-radius: 3px;

        box-shadow: none;

        margin: 0;

        width: 16px;
        height: 6px;
    }

    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;

        background: transparent;
        background-image: linear-gradient(
            ${props => (props.theme as ITheme).inputRange.colors.track},
            ${props => (props.theme as ITheme).inputRange.colors.track}
        );
        background-repeat: no-repeat;
        background-size: ${updateInputRangeTrack} 100%;

        border-radius: 3px;
    }
`

export default InputRange
