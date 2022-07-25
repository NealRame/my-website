interface IWorkEntryProps {
    frontmatter: {
        date: string
        description: string
        github: string
        title: string
    }
    id: string
    slug: string
}

interface IAllWorkQueryProps {
    data: {
        allMdx: {
            nodes: Array<IWorkEntryProps>
        }
    }
}
