import {
    keyframes,
} from "@emotion/react"

export const blink = keyframes`
    50% {
        opacity: 0;
    }
`

export const horizontalShake = (d: number) => {
    d = Math.abs(d)
    return keyframes`
        0%,
        100% {
            transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70% {
            transform: translateX(-${d}px);
        }
        20%,
        40%,
        60% {
            transform: translateX(${d}px);
        }
        80% {
            transform: translateX(${Math.round(d/2)}px);
        }
        90% {
            transform: translateX(-${Math.round(d/2)}px);
        }
    `
}

export const verticalShake = (d: number) => {
    d = Math.abs(d)
    return keyframes`
        0%,
        100% {
            transform: translateY(0);
        }
        10%,
        30%,
        50%,
        70% {
            transform: translateY(-${d}px);
        }
        20%,
        40%,
        60% {
            transform: translateY(${d}px);
        }
        80% {
            transform: translateY(${Math.round(d/2)}px);
        }
        90% {
            transform: translateY(-${Math.round(d/2)}px);
        }
    `
}
