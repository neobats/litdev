import React from 'react'
import * as styles from "../../styles/atoms/Text.module.css"

type TypographyProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>

export const Text = ({ children, size = "md", ...props }: TypographyProps) => (
  <p 
    className={styles[size]}
    {...props}
  >{children}</p>
)