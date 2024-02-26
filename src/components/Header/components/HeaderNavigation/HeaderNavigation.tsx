import React from "react"
import s from "./HeaderNavigation.module.scss"
import classNames from "classnames"

const HeaderNavigation = () => {
  return <nav className={classNames(s["wrap"])}>Навигация</nav>
}

export default HeaderNavigation
