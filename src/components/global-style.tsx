import {
    Global,
    useTheme,
} from "@emotion/react"

import * as React from "react"

import {
    type ITheme,
    mediaQueryMinWidth,
} from "../style"

const GlobalStyle = () => {
    const { colors } = useTheme() as ITheme

    return <Global styles={{
        html: {
            fontSize: 18,
            fontWeight: 400,

            [mediaQueryMinWidth("medium")]: {
                fontSize: 21,
            },
            [mediaQueryMinWidth("large")]: {
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
        },
        "h1, h2, h3, h4, h5, h6": {
            color: colors.header,

            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
        },
        "h1": {
            fontSize: "2rem",
            margin: "2rem, 0, 2rem",
            
            [mediaQueryMinWidth("medium")]: {
                fontSize: "3rem",
                margin: "3rem 0 2.5rem",
            },
            [mediaQueryMinWidth("large")]: {
                fontSize: "4rem",
            }
        },
        "h2": {
            fontSize: "1.5rem",
            margin: ["1rem", 0, "1rem"],

            [mediaQueryMinWidth("medium")]: {
                fontSize: "2rem",
                margin: ["2rem", 0, "1.5rem"],
            },
            [mediaQueryMinWidth("large")]: {
                fontSize: "3rem",
            }
        },
        a: {
            color: colors.link,
            textDecoration: "none",
        }
    }}/>
}

export default GlobalStyle