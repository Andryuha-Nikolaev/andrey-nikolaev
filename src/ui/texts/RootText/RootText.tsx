import { HTMLAttributes, ReactNode, createElement } from "react"
import s from "./RootText.module.scss"
import classNames from "classnames"

type TagsProps = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
type AsProps =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "text-lg"
  | "text-md"
  | "text-sm"
  | "span"

interface RootTextProps extends HTMLAttributes<HTMLParagraphElement> {
  tag?: TagsProps
  as?: AsProps
  colorVariant?: "black" | "white" | "red" | "dark-gray"
  fontVariant?: "russo" | "open-sans"
  fontWeightVariant?: "normal" | "bold"
  textAlign?: "center"
  children?: any
}

const RootText = ({
  tag = "p",
  as,
  children,
  className,
  colorVariant,
  fontVariant,
  fontWeightVariant,
  textAlign,
  style,
  ...props
}: RootTextProps) => {
  const textClassName = classNames(
    s["text"],
    colorVariant && s[colorVariant],
    fontVariant && s[fontVariant],
    fontWeightVariant && s[fontWeightVariant],
    as && s[as],
    className && className
  )

  const textStyles = {
    ...style,
    textAlign: textAlign,
  }

  const textProps = {
    className: textClassName,
    style: textStyles,
    ...props,
  }

  return createElement(tag, textProps, children as ReactNode)
}

export default RootText
