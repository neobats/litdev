import React from "react"
import * as bannerStyles from "../../styles/molecules/BannerFeature.module.css"
import * as colorStyles from "../../styles/color.module.css"

import { Color } from "../../types/colors"

type BannerFeatureProps = {
  color: Color
  children: React.ReactNode
}

export const BannerFeature = ({ children }: BannerFeatureProps) => {
  return (
    <article className={bannerStyles.BannerFeature}>
      {children}
    </article>
  )
}