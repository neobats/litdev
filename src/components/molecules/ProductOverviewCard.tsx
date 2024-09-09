import React from "react"
import { ProductOverview } from "../../types/printify"
import { Burst, Heading, ProductImage, Text } from "../atoms"
import * as styles from "../../styles/molecules/ProductOverviewCard.module.css"
import classNames from "classnames"
import { Link } from "gatsby"

type ProductOverviewCardProps = {
  product: ProductOverview
}

export const ProductOverviewCard = ({ product }: ProductOverviewCardProps) => {
  return (
    <Link to={`/${product.slug}`} className={styles.Link}>
      <article key={product.id} className={classNames(
        styles.Wrapper,
        product.featured && styles.HasFeatured
      )}>
        <Heading as="h3">{product.title}</Heading>
        <ProductImage image={product.images[0]} size="lg" />
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
    </Link>
  )
}