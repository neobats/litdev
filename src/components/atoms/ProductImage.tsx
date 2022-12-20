import classNames from "classnames"
import React from "react"
import * as styles from "../../styles/atoms/ProductImage.module.css"
import { ProductImage as ProductImageType } from "../../types/printify"

type ProductImageProps = {
  image: ProductImageType
  size: "small" | "medium" | "large"
}

export const ProductImage = ({ size, image }: ProductImageProps) => {

  return (
    <img
      src={image.src}
      key={`${image.position}-${image.variant_ids[0]}`}
      alt={`product from position ${image.position}`}
      className={classNames(
        styles.Image,
        styles[size]
      )}
    />
  )
}