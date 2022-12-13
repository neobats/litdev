import React from 'react'
import * as styles from "../../styles/atoms/burst.module.css"

type BurstProps = {
  text: string
  color?: string
} & React.HTMLAttributes<HTMLHeadingElement>

export const Burst = ({
  color = "yellow",
  text,
  ...props
}: BurstProps) => (
  <div className={styles.burstContainer}>
    <h2 
      className={styles.burst}
      {...props}
    >{text}</h2>
  </div>
)