interface IProjectEntryProps {
    frontmatter: {
        date: string
        description: string
        github: string
        title: string
        slug: string
    }
    id: string
}

interface IAllProjectQueryProps {
    data: {
        allMdx: {
            nodes: Array<IProjectEntryProps>
        }
    }
}
