interface IPageDataProps {
    site: {
        siteMetadata: {
            title: string
        }
    }
}

interface IPageFrontmatter {
    date: string
    description: string
    title: string
    slug: string
}

interface IPageContextProps<TFrontmatter = IPageFrontmatter> {
    frontmatter: TFrontmatter
    id: string
}

type IProjectPageDataProps = IPageContextProps<IPageFrontmatter & {
    github: string
}>

interface IHomePageDataProps extends IPageDataProps {
    allMdx: {
        nodes: Array<IProjectPageDataProps>
    }
}
