import {
    Link,
} from "gatsby"

import styled from "@emotion/styled"

import * as React from "react"

import StyledSection from "../section"
import StyledSectionHeader from "./section-header"

const Title = styled.h2`
    padding-bottom: 0;
    margin: 0;
`

export const Work = ({ data }: IAllPostQueryProps) => (
    <StyledSection id="work">
        <StyledSectionHeader>Work</StyledSectionHeader>
        { data.allMdx.nodes.map(({ id, slug, frontmatter}) => (
            <article key={ id }>
                <Title>
                    <Link to={ `/work/${slug}` }>{ frontmatter.title }</Link>
                </Title>
                Posted: { frontmatter.date }
            </article>
        )) }
    </StyledSection>
)
