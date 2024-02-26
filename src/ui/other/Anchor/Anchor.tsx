import React from "react"
import s from "./Anchor.module.scss"
import classNames from "classnames"

const Anchor = ({ id, type }: { id: string; type?: "sticky-block" }) => {
  return <div className={classNames(s["anchor"], type && s[type])} id={id} />
}

export default Anchor
