import {
    ThemeProvider
} from "@emotion/react"

import * as React from "react"

import { theme } from "./style"

const wrapWithProvider = ({ element }: { element: React.ReactNode }) => {
    return <ThemeProvider theme={ theme }>
        { element }
    </ThemeProvider>
}

export default wrapWithProvider
