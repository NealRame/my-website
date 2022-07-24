interface IPostEntryProps {
    frontmatter: {
        date: string
        title: string
    }
    id: string
    slug: string
}

interface IAllPostQueryProps {
    data: {
        allMdx: {
            nodes: Array<IPostEntryProps>
        }
    }
}
