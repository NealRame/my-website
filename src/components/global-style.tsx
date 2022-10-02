import {
    Global,
    useTheme,
} from "@emotion/react"

import * as React from "react"

import {
    type ITheme,
    mediaQueryMinWidth,
} from "@/style"

const GlobalStyle = () => {
    const { colors } = useTheme() as ITheme

    return <Global styles={{
        html: {
            fontSize: 18,
            fontWeight: 400,

            scrollBehavior: "smooth",

            [mediaQueryMinWidth("medium")]: {
                fontSize: 24,
            },
        },
        body: {
            backgroundColor: colors.background,
            color: colors.foreground,

            fontFamily: "Rokkitt, serifv",
            fontWeight: 300,

            margin: 0,
            padding: 0,

            counterReset: "content-section",
        },
        "h1, h2, h3, h4, h5, h6": {
            color: colors.header,

            fontFamily: "lores-9-wide, sans-serif",
            fontWeight: 700,
        },
        h1: {
            fontSize: "2rem",
            margin: "3rem 0",
        },
        h2: {
            fontSize: "1.25rem",
            margin: "2rem 0",
        },
        a: {
            color: colors.link,
            textDecoration: "none",
        },
        code: {
            fontFamily: "cartograph-cf",
            fontSize: "smaller",
            fontWeight: 300,
        }
    }}/>
}

export default GlobalStyle