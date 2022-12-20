import * as React from "react"
import "../../styles/global.css"
import { Nav } from "../molecules"
import * as styles from "../../styles/templates/Layout.module.css"

type LayoutProps = {
  title: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Layout = ({ title, children }: LayoutProps) => {
  React.useEffect(() => {
    document.title=title
  }, [title])

  return (
    <>
    <Nav />
    <main className={styles.main}>
      <h1>{title}</h1>
      {children}
    </main>
    </>
  )
}
