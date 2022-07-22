/** @jsx jsx */
/** @jsxFrag React.Fragment */

import {
    jsx,
} from "@emotion/react"

import Layout from "../components/layout"
import {
    About,
    Contact,
    Greetings,
} from "../components/sections"

// markup
const IndexPage = () => <Layout>
    <Greetings/>
    <div css={{
        minHeight: "100vh",
    }}>
        <About/>
        <Contact/>
    </div>
</Layout>

export default IndexPage
