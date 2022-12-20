import React from "react"
import { ProductOverview } from "../../types/printify"
import { ProductImage, Text } from "../atoms"
import * as styles from "../../styles/molecules/ProductOverviewCard.module.css"

type ProductOverviewCardProps = {
  product: ProductOverview
}

export const ProductOverviewCard = ({ product }: ProductOverviewCardProps) => {
  return (
    <article key={product.id} className={styles.Wrapper}>
      <Text>{product.title}</Text>
      <ProductImage image={product.images[0]} size="large" />
      <div>
        {product.tags.map((tag, i) => (
          <Text as="span" size="xs" key={tag} color="neutral">
            {tag}{i !== product.tags.length -1 && " | "}
          </Text>
        ))}
      </div>
    </article>
  )
}