import * as React from "react"

import {
    useTheme,
} from "@emotion/react"

import Clock from "@nealrame/react-clock"

import {
    type ITheme,
} from "../../style"

function ClockApp() {
    const [date, setDate] = React.useState(new Date())
    const { clock: clockTheme } = useTheme() as ITheme

    React.useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    })

    return <div style={{ display: "flex", justifyContent: "center" }}>
        <Clock
            date={date}

            borderColor={clockTheme.colors.border}
            backgroundColor={clockTheme.colors.background}

            hourHandColor={clockTheme.colors.hourHand}
            hourMarkerColor={clockTheme.colors.hourMarker}

            minuteHandColor={clockTheme.colors.minuteHand}
            minuteMarkerColor={clockTheme.colors.minuteMarker}

            secondHandColor={clockTheme.colors.secondHand}
        />
    </div>
}

export default ClockApp