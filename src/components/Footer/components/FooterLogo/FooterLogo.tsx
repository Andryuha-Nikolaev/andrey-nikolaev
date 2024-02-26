import React from "react"
import s from "./FooterLogo.module.scss"

import Link from "next/link"
import { pagesConstants } from "@/constants/pages/pages"

const FooterLogo = () => {
  return (
    <div className={s["block"]}>
      <Link href={pagesConstants.pages.main.path}>
        <h2>LOGO</h2>
      </Link>
    </div>
  )
}

export default FooterLogo
