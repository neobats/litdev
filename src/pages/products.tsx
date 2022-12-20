import { graphql, PageProps } from "gatsby"
import React from "react"
import { ProductOverviewCard } from "../components/molecules/ProductOverviewCard"
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
      <div>
        {allProducts.map((product) => <ProductOverviewCard product={product} />)}  
      </div>     
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrintifyProduct {
      nodes {
        id
        title
        images {
          src
          position
          variant_ids
        }
        slug
        tags
      }
    }
  }
`

export default ProductsPage