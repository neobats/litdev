import { graphql, PageProps } from "gatsby"
import React from "react"
import { ProductOverviewCard } from "../components/molecules/ProductOverviewCard"
import { CardsProductOverview } from "../components/organisms/CardsProductOverview"
import { Layout } from "../components/templates"
import { ProductOverview } from "../types/printify"

type ProductsPageProps = {
  allPrintifyProduct: {
    nodes: Array<ProductOverview>
  }
}
const ProductsPage: React.FC<PageProps<ProductsPageProps>> = ({ data }) => {
  const allProducts = data.allPrintifyProduct.nodes

  return (
    <Layout title="All Products">
      <CardsProductOverview cards={allProducts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrintifyProduct {
      nodes {
        featured
        id
        images {
          src
          position
          variant_ids
        }
        slug
        tags
        title
      }
    }
  }
`

export default ProductsPage