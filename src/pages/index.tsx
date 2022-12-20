import * as React from "react"
import type { PageProps } from "gatsby"
import { Layout } from "../components/templates"
import { Text, Oval } from "../components/atoms"
import { BannerFeature } from "../components/molecules"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout
      title="LitDev: for Computing and Literature Nerds"
    >
      <BannerFeature color="magenta" layout="right">
        <Oval color="purple" text="Wait, I can do what now?" />
        <Text size="sm">It&apos;s dangerous out there, take this!</Text>
      </BannerFeature>
    </Layout>
  )
}

export default IndexPage
