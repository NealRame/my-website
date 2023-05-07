declare module "@nealrame/wasm-game-of-life/wasm_game_of_life_bg.wasm" {
    export const memory: WebAssembly.Memory
}

type Size = {
    width: number
    height: number
}

type GameOfLifeAppProps = {
    width?: number
    height?: number
    cellSize?: number
    src?: string
    random?: boolean
    editable?: boolean
    controls?: boolean
}

type GameOfLifeConfig = {
    gridSize?: Size
    src?: string
    random?: boolean
}

type GameOfLifeDrawConfig = {
    cellSize: number
    aliveCell: string
    deadCell: string
}

interface IGameOfLife {
    readonly width: number
    readonly height: number
    clear(): IGameOfLife
    reset(): IGameOfLife
    randomize(): IGameOfLife
    toggleCell(row: number, col: number): IGameOfLife
    setCells(cells: Array<Cell>): IGameOfLife
    tick(): IGameOfLife
    draw(context: CanvasRenderingContext2D, config: GameOfLifeRenderConfig): IGameOfLife
}