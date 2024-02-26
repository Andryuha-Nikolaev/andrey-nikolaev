import React from "react"
import s from "./BurgerIcon.module.scss"
import classNames from "classnames"

type BurgerIconProps = {
  isOpen: boolean
}

const BurgerIcon = ({ isOpen }: BurgerIconProps) => {
  return (
    <div className={classNames(s["wrapper"])}>
      <div className={classNames(s["icon"], isOpen && s["open"])}>
        <span className={classNames(s["line"])}></span>
        <span className={classNames(s["line"])}></span>
        <span className={classNames(s["line"])}></span>
      </div>
    </div>
  )
}

export default BurgerIcon
