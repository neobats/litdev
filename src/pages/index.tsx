import * as React from "react"
import sample from "lodash/sample"
import { graphql, PageProps } from "gatsby"
import { Layout } from "../components/templates"
import { Text, Oval, Emoji, ProductImage } from "../components/atoms"
import { BannerFeature } from "../components/molecules"
import { ProductOverview } from "../types/printify"

type IndexPageProps = {
  allPrintifyProduct: {
    nodes: Array<ProductOverview>
  }
}


const IndexPage: React.FC<PageProps<IndexPageProps>> = ({ data }) => {
  const allProducts = data.allPrintifyProduct.nodes
  const featuredProduct = sample(allProducts)

  return (
    <Layout
      title="LitDev: for Computing and Literature Nerds"
    >
      <BannerFeature color="magenta" layout="right">
        <Oval
          color="purple"
          text={(
            <>
              O what light through yonder window breaks?
              <br />
              It is a gift, and your Dev is the sun.
            </>
      )}/>
        <div>
          <Text size="lg">
            Know a dev who loves literature? Gift them something from their favorite works,
            represented in code.
          </Text>
          <Text size="sm">Or, you know, gift yourself. <Emoji label="wink" symbol="😉" /></Text>
        </div>
      </BannerFeature>
      <BannerFeature color="blue">
        <Text size="xl">
          Gifts from your favorite works, represented in code.
        </Text>
        <ProductImage
          image={featuredProduct?.images[3] || allProducts[0].images[3]}
          size="sm"
        />
      </BannerFeature>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrintifyProduct(filter: {featured: {eq: true}}) {
      nodes {
        id
        images {
          src
          position
          variant_ids
          is_default
        }
        slug
        tags
        title
      }
    }
  }
`

export default IndexPage