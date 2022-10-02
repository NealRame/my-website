import * as React from "react"

import {
    type HeadProps,
} from "gatsby"

export const Head = ({
    data,
    pageContext,
}: HeadProps<IPageDataProps, IPageContextProps>) => {
    const pageTitle = pageContext?.frontmatter?.title
    const siteTitle = data.site.siteMetadata.title
    return <>
        <title>{ [siteTitle, pageTitle].filter(Boolean).join(" - ") }</title>
    </>
}
