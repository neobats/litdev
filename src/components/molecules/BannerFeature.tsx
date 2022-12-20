import React from "react"
import classNames from "classnames"
import * as bannerStyles from "../../styles/molecules/BannerFeature.module.css"
import { Color } from "../../types/colors"

type BannerFeatureProps = {
  color: Color
  layout?: "right" | "even" | "default"
  children: React.ReactNode
}

export const BannerFeature = ({ color, children, layout = "default", }: BannerFeatureProps) => {
  return (
    <section className={classNames(
      bannerStyles.BannerFeature,
      color,
      `txt-${color}`,
      layout === "right" && bannerStyles.BannerRight,
      layout === "even" && bannerStyles.BannerEven
    )}>
      {children}
    </section>
  )
}