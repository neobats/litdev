import React from "react"
import { Layout } from "../components/templates"

export default function AboutPage() {
  return (
    <Layout title="About">
      <h2>LitDev is for devs who are literature nerds.</h2>
      <h3>or literature nerds who are devs.</h3>
      <br />
      <p>
        I made LitDev because I love books, and I love being a dev.
        It&apos;s a natural combination, I think. The creative expression
        of both literature and programming is empowering and liberating.
      </p>
      <p>
        The best ideas are represented in beautiful literature. And the best
        products are represented in beautiful code.
      </p>
    </Layout>
  )
}