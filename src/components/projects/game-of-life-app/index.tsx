import * as React from "react"
 
import {
    useTheme,
} from "@emotion/react"

import styled from "@emotion/styled"

import {
    FontAwesomeIcon,
} from "@fortawesome/react-fontawesome"

import {
    faBorderNone,
    faDice,
    faPauseCircle,
    faPlayCircle,
    faRotateLeft,
    faSkull,
    faStepForward,
} from "@fortawesome/free-solid-svg-icons"

import {
    type ITheme,
} from "@/style"

import {
    ToggleButton,
    IconButton,
} from "@/components/ui/buttons"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
`

const HSplitter = styled.div`
    border-top: 1px solid ${props => (props.theme as ITheme).gameOfLife.colors.grid};
    height: 1px;
`

const VSplitter = styled.span`
    &::before {
        content: "";
        display: block;
        width: 1px;
        height: 1rem;
        background: ${props => (props.theme as ITheme).gameOfLife.colors.grid};
    }
`

const ControlBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    & > .splitter {
        &::before {
            content: "";
            display: block;
            width: 1px;
            height: 1rem;
            background: ${props => (props.theme as ITheme).gameOfLife.colors.grid};
        }
    }
`

const Canvas = styled.canvas`
    border: 1px solid ${props => (props.theme as ITheme).gameOfLife.colors.grid};
    display: block;
    width: 100%;

    &.editable {
        cursor: pointer;
    }
`

function GameOfLifeApp(props: GameOfLifeAppProps) {
    const { gameOfLife: theme } = useTheme() as ITheme

    const width = Number(props.width ?? 32)
    const height = Number(props.height ?? 32)
    const cellSize = Number(props.cellSize ?? theme.cellSize)

    const [gameOfLife, setGameOfLife] = React.useState<IGameOfLife | null>(null)
    const [isRunning, setIsRunning] = React.useState(false)
    const [isGridVisible, setIsGridVisible] = React.useState(false)

    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    React.useEffect(() => {
        import("./model").then(async ({ CreateGameOfLife }) => {
            const gameOfLife = await CreateGameOfLife({
                gridSize: {
                    width,
                    height,
                },
                random: props.random ?? false,
                src: props.src,
            })
            setGameOfLife(gameOfLife)
        })
    }, [])

    const getWidth = () => {
        return gameOfLife?.width ?? width
    }

    const getHeight = () => {
        return gameOfLife?.height ?? height
    }

    const getCanvasWidth = () => {
        return getWidth()*(cellSize + 1) + 1
    }

    const getCanvasHeight = () => {
        return getHeight()*(cellSize + 1) + 1
    }

    const positionToCell = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        const canvas = canvasRef.current!

        const boundingRect = canvas.getBoundingClientRect()
        const scaleX = canvas.width/boundingRect.width
        const scaleY = canvas.height/boundingRect.height
        const canvasLeft = (event.clientX - boundingRect.left)*scaleX
        const canvasTop = (event.clientY - boundingRect.top)*scaleY

        return [
            Math.floor(canvasLeft/(cellSize + 1)),
            Math.floor(canvasTop/(cellSize + 1)),
        ]
    }

    const togglePlay = () => {
        setIsRunning(!isRunning)
    }

    const step = () => {
        if (!isRunning) {
            gameOfLife?.tick()
            render()
        }
    }

    const reset = () => {
        gameOfLife?.reset()
        render()
    }

    const toggleGrid = () => {
        setIsGridVisible(!isGridVisible)
    }

    const clear = () => {
        if (!isRunning) {
            gameOfLife?.clear()
            render()
        }
    }

    const randomize = () => {
        gameOfLife?.randomize()
        render()
    }

    const handleClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!props.editable) return

        const canvas = canvasRef.current

        if (canvas == null) return
        if (gameOfLife == null) return

        const [col, row] = positionToCell(event)

        gameOfLife.toggleCell(col, row);
        render()
    }

    function drawGrid(
        context: CanvasRenderingContext2D,
    ) {
        if (!isGridVisible) return

        const gridColor = theme.colors.grid
        const width = getWidth()
        const height = getHeight()

        context.beginPath()
        context.strokeStyle = gridColor

        // Vertical lines.
        for (let i = 0; i <= width; i++) {
            const x = i*(cellSize + 1) + .5
            context.moveTo(x, 0);
            context.lineTo(x, (cellSize + 1)*height + 1);
        }

        // Horizontal lines.
        for (let j = 0; j <= height; j++) {
            context.moveTo(0,                        j*(cellSize + 1) + .5);
            context.lineTo((cellSize + 1)*width + 1, j*(cellSize + 1) + .5);
        }

        context.stroke()
    }

    const render = () => {
        const canvas = canvasRef.current
        if (canvas != null) {
            canvas.width = getCanvasWidth()
            canvas.height = getCanvasHeight()
        }

        const context = canvas?.getContext("2d")
        if (context != null) {
            context.clearRect(
                0, 0,
                canvasRef.current!.width,
                canvasRef.current!.height,
            )
            drawGrid(context)
            gameOfLife?.draw(context, {
                cellSize,
                aliveCell: theme.colors.aliveCell,
                deadCell: theme.colors.deadCell,
            })
        }
    }

    React.useEffect(() => {
        const canvas = canvasRef.current
        if (canvas != null) {
            if (!isRunning) {
                render()
            }
        }
    }, [canvasRef])

    React.useEffect(() => {
        if (!isRunning) {
            render()
        }
    }, [gameOfLife])

    React.useEffect(() => {
        let frameId: number | null = null
        if (gameOfLife && isRunning) {
            let tickCount = 0
            frameId = requestAnimationFrame(function tick() {
                if (tickCount++ % 5 === 0) {
                    gameOfLife.tick()
                }
                render()
                frameId = requestAnimationFrame(tick)
            })
        }
        return () => {
            if (frameId) {
                cancelAnimationFrame(frameId)
            }
        }
    }, [isRunning, isGridVisible])

    React.useEffect(() => {
        if (!isRunning) {
            render()
        }
    }, [isGridVisible])

    return <Wrapper>
        <Canvas
            className={ props.editable ? "editable" : "" }
            onClick={ handleClick }
            ref={ canvasRef }
        ></Canvas>
        {
            props.controls && <><HSplitter/><ControlBar>
                <IconButton onClick={ togglePlay }>
                    <FontAwesomeIcon
                        icon={ isRunning ? faPauseCircle : faPlayCircle }
                        size="2x"
                        fixedWidth
                    />
                </IconButton>
                <IconButton
                    onClick={ step }
                    disabled={ isRunning }
                >
                    <FontAwesomeIcon icon={ faStepForward } fixedWidth/>
                </IconButton>
                {
                    !props.editable && props.src && <>
                        <VSplitter/>
                        <IconButton onClick={ reset }>
                            <FontAwesomeIcon icon={ faRotateLeft } fixedWidth/>
                        </IconButton>
                    </>
                }
                {
                    !props.editable && props.random && <>
                        <VSplitter/>
                        <IconButton onClick={ randomize }>
                            <FontAwesomeIcon icon={ faDice } fixedWidth/>
                        </IconButton>
                    </>
                }
                {
                    props.editable && <>
                        <VSplitter/>
                        <IconButton
                            onClick={ clear }
                            disabled={ isRunning }
                        >
                            <FontAwesomeIcon icon={ faSkull } fixedWidth/>
                        </IconButton>
                        <IconButton
                            onClick={ randomize }
                            disabled={ isRunning }
                        >
                            <FontAwesomeIcon icon={ faDice } fixedWidth/>
                        </IconButton>
                        <ToggleButton
                            checked={ isGridVisible }
                            onChanged={ toggleGrid }
                        >
                            <FontAwesomeIcon icon={ faBorderNone } fixedWidth/>
                        </ToggleButton>
                    </>
                }
            </ControlBar></>
        }
    </Wrapper>
}

export default GameOfLifeApp