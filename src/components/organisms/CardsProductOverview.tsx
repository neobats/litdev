import React from "react" 
import * as styles from "../../styles/organisms/CardsProductOverview.module.css"
import { ProductOverview } from "../../types/printify"
import { ProductOverviewCard } from "../molecules"

type CardsProductOverviewProps = {
  cards: Array<ProductOverview>
}

export const CardsProductOverview = ({ cards }: CardsProductOverviewProps) => {
  return (
    <div className={styles.Cards}>
      {cards.map((card) => (<ProductOverviewCard product={card} />))}
    </div>
  )
}
