import classNames from 'classnames'
import { sample } from 'lodash'
import React from 'react'
import * as styles from "../../styles/atoms/Burst.module.css"
import { Color } from '../../types/colors'

type BurstProps = {
  text: string
  color?: Color | "random"
} & React.HTMLAttributes<HTMLHeadingElement>

export const Burst = ({
  color = "yellow",
  text,
  ...props
}: BurstProps) => {
  const colorClass = color === "random" ? getRandomColor() : color
  const colorText = color === "random" ? `txt-${colorClass}` : `txt-${color}`
  return (
    <div className={styles.burstContainer}>
      <h2 
        className={classNames(
          styles.burst,
          colorClass,
          colorText
        )}
        {...props}
      >{text}</h2>
    </div>
  )
}

const getRandomColor = () => {
  const colors: Color[] = [
    "yellow",
    "magenta",
    "purple",
    "blue",
    "green",
  ]
  return sample(colors)
}