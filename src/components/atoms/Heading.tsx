import React from 'react'

type TypographyProps = {
  as?: "h1" | "h2" | "h3" | "h4"
  children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>

export const Heading = ({
  children,
  as = "h2",
  ...props
}: TypographyProps) => {
  return as === "h1"
    ? (
      <h1 {...props}>{children}</h1>
    )
    : as === "h2" ? (
      <h2 {...props}>{children}</h2>
    )
    : as === "h3" ? (
      <h3 {...props}>{children}</h3>
    )
    : (
      <h4 {...props}>{children}</h4>
    )
}