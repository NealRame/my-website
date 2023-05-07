import * as React from "react"

import {
    useTheme,
} from "@emotion/react"

import {
    type ITheme,
} from "@/style"

import styled from "@emotion/styled"

const ToggleCheckbox = styled.input`
    display: none;
`

const ToggleLabel = styled.label`
    color: ${props => (props.theme as ITheme).buttons.colors.normal};
    cursor: pointer;
    display: inline-block;
    font-size: ${props => (props.theme as ITheme).buttons.fontSize};

    margin: 0;
    padding: 0;

    &.checked > * {
        color: ${props => (props.theme as ITheme).buttons.colors.active};
    }

    &:hover {
        color: ${props => (props.theme as ITheme).buttons.colors.hover};
    }
`

export type ToggleButtonProps = {
    checked: boolean,
    onChanged: (value: boolean) => void,
    children?: React.ReactNode,
}

export const ToggleButton = ({
    checked,
    onChanged,
    children,
}: ToggleButtonProps) => {
    const id = React.useMemo(() => Math.random().toString(36).substring(2), [])
    return <>
        <ToggleLabel className={ checked ? "checked" : ""} htmlFor={id}>
            { children != null
                ? children
                : checked ? "On" : "Off"
            }
        </ToggleLabel>
        <ToggleCheckbox
            id={id}
            type="checkbox"
            checked={ checked }
            onChange={ () => onChanged(!checked) }
        />
    </>
}

export const IconButton = styled.button`
    background: none;
    border: none;
    color: ${props => (props.theme as ITheme).buttons.colors.normal};
    cursor: pointer;

    font-size: ${props => (props.theme as ITheme).buttons.fontSize};

    margin: 0;
    padding: 0;

    &:active {
        color: ${props => (props.theme as ITheme).buttons.colors.active};
    }

    &:disabled,
    &[disabled]:hover {
        color: ${props => (props.theme as ITheme).buttons.colors.disabled};
        cursor: default;
    }

    &:hover {
        color: ${props => (props.theme as ITheme).buttons.colors.hover};
    }
`
