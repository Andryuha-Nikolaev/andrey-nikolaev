import React from "react"
import s from "./HeaderLogo.module.scss"

import Link from "next/link"
import { pagesConstants } from "@/constants/pages/pages"

const HeaderLogo = () => {
  return (
    <Link href={pagesConstants.pages.main.path}>
      <div className={s["block"]}>
        <h2>LOGO</h2>
      </div>
    </Link>
  )
}

export default HeaderLogo
