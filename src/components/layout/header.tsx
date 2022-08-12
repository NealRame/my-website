import * as React from "react"

import NavigationBar from "./navigation-bar"

interface IHeaderProps {
    siteTitle: string
    sticked: boolean
}

const Header = ({
    siteTitle,
    sticked,
}: IHeaderProps) => {
    return <header>
        <NavigationBar siteTitle={ siteTitle } sticky={ sticked }/>
    </header>
}

export default Header
