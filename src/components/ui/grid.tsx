import * as React from "react"

export type GridContainerProps = {
    rows: number,
    cols: number,
    children: React.ReactNode,
}

export const GridContainer = ({
    children,
    rows,
    cols,
}: GridContainerProps) => {
    return <div style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "1rem",
    }}>{ children }</div>
}