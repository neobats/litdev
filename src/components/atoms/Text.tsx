import React from 'react'
type TypographyProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>
export const Text = ({ children, ...props }: TypographyProps) => (
  <p {...props}>{children}</p>
)