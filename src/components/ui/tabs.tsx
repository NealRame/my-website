/** @jsx jsx */
/** @jsxFrag React.Fragment */

import * as React from "react"

import styled from "@emotion/styled"
import {
    jsx,
} from "@emotion/react"

import {
    type ITheme,
} from "@/style"


const TabsWrapper = styled.div`
    & > .tab-list {
        border-bottom: 1px solid ${ props => (props.theme as ITheme).colors.foreground };

        display: flex;

        list-style: none;

        padding: 0;
        margin: 0;

        width: 100%;

        & > li {
            cursor: pointer;

            font-weight: bold;

            text-align: center;

            width: 100%;

            margin: 0.25rem;

            &.active {
                color: ${ props => (props.theme as ITheme).colors.link };
            }

            &:hover {
                color: ${ props => (props.theme as ITheme).colors.header };
            }
        }
    }
    & > .tab-content {
        padding: 1rem;
    }
`

const Tab = ({ active, title, onClick }: {
    active: boolean,
    title: string,
    onClick: () => void,
}) => <li className={ active ? "active" : "" } onClick={ onClick }>{ title }</li>

const Tabs = ({ children }: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = React.useState(0)
    return <TabsWrapper>
        <ul className="tab-list">
            { (Array.isArray(children) ? children : [ children ]).map((tab, index) => {
                const { title } = tab.props
                return <Tab
                    key={ index }
                    active={ activeTab === index }
                    title={ title }
                    onClick={ () => setActiveTab(index) }
                />
            }) }
        </ul>
        <div className="tab-content">
            { (Array.isArray(children) ? children : [ children ])[activeTab] }
        </div>
    </TabsWrapper>
}

export default Tabs