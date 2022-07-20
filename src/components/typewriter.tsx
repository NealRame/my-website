/** @jsx jsx */
/** @jsxFrag React.Fragment */

import {
    keyframes,
    jsx,
    useTheme,
} from "@emotion/react"

import * as React from "react"

import {
    type ITheme,
    glow,
} from "../style"

const blink = keyframes`
    50% {
        opacity: 0;
    }
`

type ITypewriterProps = {
    messages: string | Array<string>

    erasingSpeed?: number

    typingSpeed?: number
    typingLag?: number
    typingPause?: number
}

enum TypewriterState {
    Typing,
    Erasing,
}

function delay(action: CallableFunction, ms: number) {
    const timerId = setTimeout(action, ms)
    return () => clearTimeout(timerId)
}

const Typewriter = (props: ITypewriterProps) => {
    const messages = typeof(props.messages) === "string" ? [props.messages] : props.messages
    const {
        erasingSpeed,
        typingSpeed,
        typingLag,
        typingPause,
    } = {
        erasingSpeed: 32,
        typingSpeed: 64,
        typingLag: 25,
        typingPause: 2000,
        ...props,
    }

    const theme = useTheme() as ITheme

    const [mode, setMode] = React.useState(TypewriterState.Erasing)
    const [currentTextIndex, setCurrentTextIndex] = React.useState(-1)
    const [buffer, setBuffer] = React.useState("")

    const eraseText = () => setBuffer(messages[currentTextIndex].slice(0, buffer.length - 1))
    const typeText = () => setBuffer(messages[currentTextIndex].slice(0, buffer.length + 1))

    const toggleMode = () => {
        if (mode === TypewriterState.Typing) {
            setMode(TypewriterState.Erasing)
        } else {
            setMode(TypewriterState.Typing)
            setCurrentTextIndex((currentTextIndex + 1)%messages.length)
        }
    }

    React.useEffect(() => {
        const text = messages[currentTextIndex] ?? ""

        if (mode === TypewriterState.Typing) {
            if (buffer.length < text.length) {
                return delay(typeText, typingSpeed + typingLag*Math.random())
            }
        }

        if (mode === TypewriterState.Erasing) {
            if (buffer.length > 0) {
                return delay(eraseText, erasingSpeed)
            }
        }

        return delay(toggleMode, typingPause)
    })

    return (
        <div css={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
        
            width: "100%",
            height: "100%",
        }}>
            <span css={{
                color: theme.typewriter.colors.foreground,
                fontFamily: "lores-12, sans-serif",
                textShadow: glow(theme.typewriter.colors.foreground),

                "&::after": {
                    animation: `${blink} 1s step-start 0s infinite`,
                    content: "'\\268A'",
                }
            }}>{ buffer }</span>
        </div>
    )
}

export default Typewriter