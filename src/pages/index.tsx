import * as React from "react"
import type { PageProps } from "gatsby"
import { Layout } from "../components/templates"
import { Text, Burst } from "../components/atoms"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout
      title="LitDev: for Computing and Literature Nerds"
    >
      <article>
        <Text size="sm">It&apos;s dangerous out there, take this!</Text>
      </article>
    </Layout>
  )
}

export default IndexPage
