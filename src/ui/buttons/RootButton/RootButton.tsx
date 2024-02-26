"use client"

import React from "react"
import s from "./RootButton.module.scss"
import classNames from "classnames"
import Link from "next/link"
import ArrowIcon from "@/ui/icons/ArrowIcon/ArrowIcon"
import { ProgressSpinner } from "primereact/progressspinner"

type RootButtonProps = {
  children: React.ReactNode
  isDisabled?: boolean
  onClick?: () => void
  className?: string
  withArrow?: boolean
  appearance?: "button" | "link"
  styleVariant?: "1" | "2" | "3" | "4"
  buttonPosition?: "left" | "center" | "right"
  textTransform?: "none" | "uppercase" | "lowercase"
  buttonType?: "button" | "submit"
  role?: "button" | "next-link" | "link"
  linkTarget?: "_blank" | "_self"
  link?: string
  textDecoration?: "underline" | "none"
  isLoading?: boolean
}

const RootButton = ({
  children,
  isDisabled = false,
  onClick,
  className,
  textDecoration = "none",
  withArrow = false,
  appearance = "button",
  styleVariant = "1",
  buttonPosition = "center",
  textTransform = "none",
  buttonType = "button",
  role = "button",
  linkTarget,
  link,
  isLoading,
}: RootButtonProps) => {
  const buttonClassName = classNames(
    s["root"],
    s[appearance],
    s[`variant${styleVariant}`],
    appearance === "button" && s[buttonPosition],
    isDisabled && s["disabled"],
    withArrow && s["with-arrow"],
    isLoading && s["loading"],
    className && className
  )

  const styleConfig = {
    textDecoration: textDecoration,
    textTransform: textTransform,
  }

  const buttonProps = {
    onClick,
    style: styleConfig,
    className: buttonClassName,
    type: buttonType,
  }

  const linkProps = {
    style: styleConfig,
    className: buttonClassName,
    href: link,
    target: linkTarget ? linkTarget : "_blank",
    rel: "noreferrer noopener",
  }

  const nextLinkProps = {
    style: styleConfig,
    className: buttonClassName,
    href: link ? link : "",
    target: linkTarget ? linkTarget : "_self",
  }

  let ButtonComponent

  const buttonContents = (
    <>
      {children}
      {withArrow && <ArrowIcon />}
    </>
  )

  switch (role) {
    case "button":
      ButtonComponent = (
        <button {...buttonProps}>
          {isLoading && (
            <ProgressSpinner
              className={classNames(s["spinner"], isLoading && s["loading"])}
              color="#ed2e38"
            ></ProgressSpinner>
          )}

          {buttonContents}
        </button>
      )
      break
    case "link":
      ButtonComponent = <a {...linkProps}>{buttonContents}</a>
      break
    case "next-link":
      ButtonComponent = <Link {...nextLinkProps}>{buttonContents}</Link>
      break
    default:
      ButtonComponent = null
  }

  // return createElement(Link, nextLinkProps, children)

  return ButtonComponent
}

export default RootButton
