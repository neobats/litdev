import * as React from "react"
import type { PageProps } from "gatsby"
import { Layout } from "../components/templates"
import { Burst } from "../components/atoms"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout
      title="LitDev: for Computing and Literature Nerds"
    >
      <Burst text="WHOA" />
      <p>Wow, so cool</p>
    </Layout>
  )
}

export default IndexPage
