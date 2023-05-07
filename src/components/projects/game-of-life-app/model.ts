import {
    Universe,
    Cell,
} from "@nealrame/wasm-game-of-life"

type Format = "life_106" | "life_rle"
type Source = {
    format: Format
    data: string
}

async function fetchSource(src: string): Promise<Source | null> {
    try {
        const res = await fetch(src)
        const contentType = res.headers.get("content-type")
        switch (contentType) {
        case "text/life_106":
            return { format: "life_106", data: await res.text() }
        case "text/life_rle":
            return { format: "life_rle", data: await res.text() }
        default:
            throw new Error(`Unsupported content type: ${contentType}`)
        }
    } catch (error) {
        console.error("Error while fetching source:", error)
    }
    return null
}

export async function CreateGameOfLife({
    gridSize,
    src,
    random,
}: GameOfLifeConfig): Promise<IGameOfLife> {
    const initialState = src != null ? await fetchSource(src) : null

    let universe: Universe | null = null

    const reset = () => {
        universe?.clear()
        if (initialState != null) {
            switch (initialState.format) {
            case "life_106":
                universe?.free()
                universe = Universe.from_life_106(initialState.data)
                break
            case "life_rle":
                universe?.free()
                universe = Universe.from_rle(initialState.data)
                break
            }
        } else if (random) {
            universe?.free()
            universe = Universe.new(gridSize?.width ?? 32, gridSize?.height ?? 32)
            universe.randomize()
        } else {
            universe?.free()
            universe = Universe.new(gridSize?.width ?? 32, gridSize?.height ?? 32)
        }
    }

    reset()

    const gameOfLife = {
        get width(): number {
            return universe?.width() ?? gridSize?.width ?? 32
        },

        get height(): number {
            return universe?.height() ?? gridSize?.height ?? 32
        },

        randomize(): IGameOfLife {
            universe?.randomize()
            return this
        },

        reset(): IGameOfLife {
            reset()
            return this
        },

        clear(): IGameOfLife {
            universe?.clear()
            return this
        },

        toggleCell(
            col: number,
            row: number,
        ): IGameOfLife {
            universe?.toggle_cell(col, row)
            return this
        },

        setCells(
            cells: Array<Cell>,
        ): IGameOfLife {
            universe?.set_cells(cells, Cell.Alive)
            return this
        },

        tick(): IGameOfLife {
            universe?.tick()
            return this
        },

        draw(
            context: CanvasRenderingContext2D,
            config: GameOfLifeDrawConfig,
        ) {
            universe?.render_to_context(context, config)
            return this
        },
    }

    return gameOfLife.reset()
}
