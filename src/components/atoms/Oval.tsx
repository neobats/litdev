import classNames from "classnames"
import React from "react"
import { Color } from "../../types/colors"
import { Heading } from "./Heading"
import * as ovalStyles from "../../styles/atoms/Oval.module.css"

type OvalProps = {
  text?: string | React.ReactNode
  color?: Color
}
export const Oval = ({ text, color }: OvalProps) => {
  return (
    <div className={classNames(
      color,
      `txt-${color}`,
      ovalStyles.Oval
    )}>
      <Heading as="p">{text}</Heading>
    </div>
  )
}
