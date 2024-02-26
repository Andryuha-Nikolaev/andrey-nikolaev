"use client"

import React from "react"
import s from "./ScrollTopButton.module.scss"
import ScrollTopIcon from "@/ui/icons/ScrollTopIcon/ScrollTopIcon"
import RootText from "@/ui/texts/RootText/RootText"
import anchorsConstants from "@/constants/anchors/anchors"
import classNames from "classnames"

const ScrollTopButton: React.FC<{ className?: string }> = ({ className }) => {
  const handleScrollTop = () => {
    const target = document.getElementById(anchorsConstants.ANCHOR_TOP)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={classNames(s["wrap"], className)}>
      <button
        aria-label="scroll top"
        className={s["btn"]}
        onClick={handleScrollTop}
      >
        <ScrollTopIcon />
      </button>
      <RootText tag="p">Наверх</RootText>
    </div>
  )
}

export default ScrollTopButton
