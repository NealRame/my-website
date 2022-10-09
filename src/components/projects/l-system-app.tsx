/** @jsx jsx */
/** @jsxFrag React.Fragment */

import * as React from "react"

import styled from "@emotion/styled"
import {
    jsx,
} from "@emotion/react"

import {
    useTheme,
} from "@emotion/react"

import {
    LSystemSVGRenderer,
    defineLSystemAxiom,
    defineLSystemProductionRules,
    defineLSystemRenderingRules,
    type ILSystemWord,
    type ILSystemProductionRulesMap,
    type ILSystemRenderAction,
    type ILSystemRenderingRulesMap,
} from "@nealrame/react-l-system"

import {
    type ITheme,
} from "@/style"

import InputRange from "@/components/ui/input-range"
import Tabs from "@/components/ui/tabs"

interface LSystemProps {
    axiom: ILSystemWord,
    productionRules: ILSystemProductionRulesMap,
    renderingRules: ILSystemRenderingRulesMap,
    stepsInit?: number,
    stepsMin?: number,
    stepsMax?: number,
}

const LSystemWord = ({
    word,
}: { word: ILSystemWord }) => {
    return <span>{ `${word.join(' ')}` }</span>
}

const LSystemAxiom = ({
    axiom,
}: { axiom: ILSystemWord }) => {
    return <>
        <label>Axiom</label>
        <code>
            <LSystemWord word={ axiom } />
        </code>
    </>
}

const LSystemProductionRules = ({
    productionRules,
}: { productionRules: ILSystemProductionRulesMap }) => {
    return <>
        <label>Production rules</label>
        <code>
            <ul css={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                "& > li": {
                    display: "flex",
                    gap: "1ch",
                }
            }}>
                { Object.entries(productionRules).map(([ key, value ]) => {
                    return <li key={key}>
                        <span>{ key }</span>
                        <span>{ ' -> ' }</span>
                        <LSystemWord word={ value } />
                    </li>
                }) }
            </ul>
        </code>
    </>
}

const LSystemRenderAction = ({
    action,
}: { action: ILSystemRenderAction }) => {
    if (action[0] === "forward") {
        return <span>{ `draw forward of ${action[1]} unit(s)` }</span>
    }
    if (action[0] === "move") {
        return <span>{ `move forward of ${action[1]} unit(s)` }</span>
    }
    if (action[0] === "turn") {
        const angle = Math.abs(180*action[1]/Math.PI).toFixed(2)
        const direction = action[1] < 0 ? "left" : "right"
        return <span>{ `turn ${direction} ${angle}°` }</span>
    }
    return <span>{ action[0] }</span>
}

const LSystemRenderingRules = ({
    renderingRules,
}: { renderingRules: ILSystemRenderingRulesMap }) => {
    return <>
        <label>Rendering rules</label>
        <code>
            <ul css={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                "& > li": {
                    display: "flex",
                    gap: "1ch",
                }
            }}>
                { Object.entries(renderingRules).map(([ key, action ]) => {
                    return <li key={key}>
                        <span>{ key }</span>
                        <span>{ ' -> ' }</span>
                        <LSystemRenderAction { ...{ action }} />
                    </li>
                }) }
            </ul>
        </code>
    </>

}

const LSystemDescriptionWrapper = styled.div`
    display: flex;

    flex-direction: column;

    font-size: 0.75rem;

    & > label {
        border-bottom: 1px solid ${props => (props.theme as ITheme).colors.border};

        font-weight: bold;

        padding: 0.25rem;

        text-transform: uppercase;
    }

    & > code {
        padding: 0.25rem;
    }
`

const LSystemDescription = ({
    axiom,
    productionRules,
    renderingRules,
}: LSystemProps) => {
    return <LSystemDescriptionWrapper>
        <LSystemAxiom { ...{ axiom }}/>
        <LSystemProductionRules { ...{ productionRules }}/>
        <LSystemRenderingRules { ...{ renderingRules }}/>
    </LSystemDescriptionWrapper>
}

const LSystemViewWrapper = styled.div`
    display: flex;

    gap: .5rem;

    flex-direction: column;

    margin: 0 auto;

    & > label {
        font-size: .75rem;
        text-align: center;
    }
`

const LSystemView = ({
    axiom,
    productionRules,
    renderingRules,
    ...config
}: LSystemProps) => {
    const {
        stepsInit,
        stepsMin,
        stepsMax,
    } = { stepsMin: 0, stepsMax: 6, stepsInit: 4, ...config }
    const { lsystems: lsystemsTheme } = useTheme() as ITheme
    const [ steps, setSteps ] = React.useState(stepsInit)
    return <LSystemViewWrapper>
        <LSystemSVGRenderer
            { ...{ axiom, productionRules, renderingRules }}
            steps={ steps }
            backgroundColor={ lsystemsTheme.colors.background }
            strokeColor={ lsystemsTheme.colors.stroke }
        />
        <label>
            steps: { steps }
            <InputRange
                type="range"
                min={ stepsMin }
                max={ stepsMax }
                value={ steps }
                onChange={ e => setSteps(parseInt(e.target.value)) }
            />
        </label>
    </LSystemViewWrapper>
}

const LSystemWrapper = styled.div`
    margin: 0 auto;
    width: 75%;
`

const LSystem = ({
        axiom,
        productionRules,
        renderingRules,
        ...config
    }: LSystemProps) => {
    const lsystem = { axiom, productionRules, renderingRules }
    return <LSystemWrapper>
        <Tabs>
            <div title="view"><LSystemView { ...lsystem } { ...config}/></div>
            <div title="description"><LSystemDescription { ...lsystem }/></div>
        </Tabs>
    </LSystemWrapper>
}

export const DragonCurve = {
    axiom: defineLSystemAxiom(["F", "G"]),
    productionRules: defineLSystemProductionRules({
        "F": ["F", "+", "G"],
        "G": ["F", "-", "G"],
    }),
    renderingRules: defineLSystemRenderingRules({
        "F": ["forward", 1],
        "G": ["forward", 1],
        "+": ["turn",  Math.PI/2],
        "-": ["turn", -Math.PI/2],
    }),
}

export const HilbertCurve = {
    axiom: defineLSystemAxiom(["X"]),
    productionRules: defineLSystemProductionRules({
        "F": ["F"],
        "X": ["-", "Y", "F", "+", "X", "F", "X", "+", "F", "Y", "-"],
        "Y": ["+", "X", "F", "-", "Y", "F", "Y", "-", "F", "X", "+"],
    }),
    renderingRules: defineLSystemRenderingRules({
        "F": ["forward", 1],
        "+": ["turn",  Math.PI/2],
        "-": ["turn", -Math.PI/2],
    }),
}

export const KockCurve = {
    axiom: defineLSystemAxiom(["F"]),
    productionRules: defineLSystemProductionRules({
        "F": ["F", "+", "F", "-", "F", "-", "F", "+", "F"],
    }),
    renderingRules: defineLSystemRenderingRules({
        "F": ["forward", 1],
        "+": ["turn",  Math.PI/2],
        "-": ["turn", -Math.PI/2],
    }),
}

export const KockSnowflake = {
    axiom: defineLSystemAxiom(["F", "+", "+", "F", "+", "+", "F"]),
    productionRules: defineLSystemProductionRules({
        "F": ["F", "-", "F", "+", "+", "F", "-", "F"],
    }),
    renderingRules: defineLSystemRenderingRules({
        "F": ["forward", 1],
        "+": ["turn",  Math.PI/3],
        "-": ["turn", -Math.PI/3],
    }),
}

export const SierpinskiTriangle = {
    axiom: defineLSystemAxiom(["F", "+", "G", "+", "G"]),
    productionRules: defineLSystemProductionRules({
        "F": ["F", "+", "G", "-", "F", "-", "G", "+", "F"],
        "G": ["G", "G"],
    }),
    renderingRules: defineLSystemRenderingRules({
        "F": ["forward", 1],
        "G": ["forward", 1],
        "+": ["turn",  2*Math.PI/3],
        "-": ["turn", -2*Math.PI/3],
    }),
}

export default LSystem
