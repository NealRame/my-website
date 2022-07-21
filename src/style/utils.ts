import { range } from "ramda"

import {
    type IMediaQueryBreakpoint,
    type IMediaQueryTypes,
    theme,
} from "./theme"

export function mediaQueryMinWidth(
    breakpoint: IMediaQueryBreakpoint,
    type: IMediaQueryTypes = "screen"
) {
    return `@media ${type} and (min-width: ${theme.breakpoints[breakpoint]}px)`
}

export function mediaQueryMaxWidth(
    breakpoint: IMediaQueryBreakpoint,
    type: IMediaQueryTypes = "screen"
) {
    return `@media ${type} and (max-width: ${theme.breakpoints[breakpoint]}px)`
}

export function glow(color: string, steps: number = 3) {
    return range(1, steps + 1)
        .map(i => Math.pow(2, 2*i))
        .map(radius => `0 0 ${radius}px ${color}`)
        .join(", ")
}
