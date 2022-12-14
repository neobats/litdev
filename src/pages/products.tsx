import { graphql, PageProps } from "gatsby"
import React from "react"
import { ProductImage } from "../components/atoms"
import { Layout } from "../components/templates"
import { Product } from "../types/printify"

type ProductsPageProps = {
  allPrintifyProduct: {
    nodes: Array<Pick<Product, "title" | "images" | "id" | "tags">>
  }
}
const ProductsPage: React.FC<PageProps<ProductsPageProps>> = ({ data }) => {
  const allProducts = data.allPrintifyProduct.nodes

  return (
    <Layout title="All Products">
      <div>
        {allProducts.map(product => (
          <div key={product.id}>
            <p>{product.title}</p>
            <ProductImage image={product.images[0]} size="small" />
          </div>
        ))}  
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
        tags
      }
    }
  }
`

export default ProductsPage