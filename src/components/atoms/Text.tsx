import React from 'react'
import classNames from 'classnames'
import * as styles from "../../styles/atoms/Text.module.css"
import { Color } from '../../types/colors'

type TypographyProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  as?: "p" | "span"
  color?: Color | "inherit"
  children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>

export const Text = ({ 
  as = "p",
  children,
  size = "md",
  color = "inherit",
  ...props
}: TypographyProps) => as === "p" ? (
  <p 
    className={classNames(
      props.className,
      styles[size],
      color !== "inherit" && `txt-${color}`
    )}
    {...props}
  >{children}</p>
) : (
  <span
    className={classNames(
      props.className,
      styles[size],
      color !== "inherit" && `txt-${color}`
    )}
    {...props}
  >{children}</span>
)