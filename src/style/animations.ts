import {
    keyframes,
} from "@emotion/react"

export const blink = keyframes`
    50% {
        opacity: 0;
    }
`

export const jello = keyframes`
    0% {
        transform: scale3d(1, 1, 1);
    }
    30% {
        transform: scale3d(1.25, 0.75, 1);
    }
    40% {
        transform: scale3d(0.75, 1.25, 1);
    }
    50% {
        transform: scale3d(1.15, 0.85, 1);
    }
    65% {
        transform: scale3d(0.95, 1.05, 1);
    }
    75% {
        transform: scale3d(1.05, 0.95, 1);
    }
    100% {
        transform: scale3d(1, 1, 1);
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

export const wobble = keyframes`
    0%,
    100% {
        transform: translateX(0%);
        transform-origin: 50% 50%;
    }
    15% {
        transform: translateX(-30px) rotate(-6deg);
    }
    30% {
        transform: translateX(15px) rotate(6deg);
    }
    45% {
        transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
        transform: translateX(9px) rotate(2.4deg);
    }
    75% {
        transform: translateX(-6px) rotate(-1.2deg);
    }
`
