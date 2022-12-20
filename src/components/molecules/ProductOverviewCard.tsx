import React from "react"
import { ProductOverview } from "../../types/printify"
import { Burst, ProductImage, Text } from "../atoms"
import * as styles from "../../styles/molecules/ProductOverviewCard.module.css"
import classNames from "classnames"

type ProductOverviewCardProps = {
  product: ProductOverview
}

export const ProductOverviewCard = ({ product }: ProductOverviewCardProps) => {
  return (
    <article key={product.id} className={classNames(
      styles.Wrapper,
      product.featured && styles.HasFeatured
    )}>
      <Text>{product.title}</Text>
      <ProductImage image={product.images[0]} size="large" />
      <div>
        {product.tags.map((tag, i) => (
          <Text as="span" size="xs" key={tag} color="neutral">
            {tag}{i !== product.tags.length -1 && " | "}
          </Text>
        ))}
      </div>
      {product.featured && (
        <div className={styles.BurstContainer}>
          <Burst text="Featured" color="random" />
        </div>
      )}
    </article>
  )
}