import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import * as styles from "../../styles/molecules/Nav.module.css"

const navItems = [
  { to: "/", text: "Home" },
  { to: "/products", text: "Products" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
]

export const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
  
  return (
    <nav className={styles.Nav}>
      <div className={styles.NavToggle} onClick={toggle}>
        {!isOpen && <span>Menu</span> }
        {isOpen && <span>Close</span> }
      </div>
      <ul className={classNames(
        styles.NavList,
        isOpen && styles.NavListOpen
      )}>
        {navItems.map(item => (
          <li
            key={item.text}
            className={styles.NavItem}
          >
            <Link
              to={item.to}
              className={styles.NavLink}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}