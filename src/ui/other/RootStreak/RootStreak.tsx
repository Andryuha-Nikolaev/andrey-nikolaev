"use client"
import React from "react"
import s from "./RootStreak.module.scss"
import classNames from "classnames"
import { useAppSelector } from "@/redux/hooks"

type RootStreakProps = {
  variant: "fixed-header" | "var1"
}

const RootStreak = ({ variant }: RootStreakProps) => {
  const isFixedHeader = useAppSelector((state) => state.site.isFixedHeader)

  return (
    <div
      className={classNames(
        s["streak"],
        variant === "fixed-header" && isFixedHeader && s["fixed"],
        s[variant]
      )}
    ></div>
  )
}

export default RootStreak
