interface IProjectEntryProps {
    frontmatter: {
        date: string
        description: string
        github: string
        title: string
    }
    id: string
    slug: string
}

interface IAllProjectQueryProps {
    data: {
        allMdx: {
            nodes: Array<IProjectEntryProps>
        }
    }
}
