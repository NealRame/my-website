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
    type ILSystemRenderingRulesMap,
} from "@nealrame/react-l-system"

import {
    type ITheme,
} from "@/style"

import InputRange from "@/components/ui/input-range"

interface LSystemProps {
    axiom: ILSystemWord,
    productionRules: ILSystemProductionRulesMap,
    renderingRules: ILSystemRenderingRulesMap,
    stepsInit?: number,
    stepsMin?: number,
    stepsMax?: number,
}

const LSystemWrapper = styled.div`
    display: flex;

    gap: 1rem;
    flex-direction: column;

    margin: 0 auto;

    width: 50%;

    & > label {
        font-size: .75rem;
        text-align: center;
    }
`

const LSystem = ({
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

    return <LSystemWrapper>
        <LSystemSVGRenderer
            axiom={ axiom }
            productionRules={ productionRules }
            renderingRules={ renderingRules }
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
