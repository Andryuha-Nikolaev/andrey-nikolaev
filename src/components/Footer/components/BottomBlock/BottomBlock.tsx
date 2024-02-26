import React from "react"
import RootText from "@/ui/texts/RootText/RootText"
import s from "./BottomBlock.module.scss"
import RootButton from "@/ui/buttons/RootButton/RootButton"

const BottomBlock = () => {
  const fullYear = new Date().getFullYear()

  return (
    <div className={s["block"]}>
      <RootText>2004-{fullYear}</RootText>
      <div className={s["agreements"]}>
        <RootButton link="/" appearance="link" role="link">
          Политика конфиденциальности
        </RootButton>
        <RootButton link="/" appearance="link" role="link">
          Правила пользования сайтом
        </RootButton>
        <RootButton link="/" appearance="link" role="link">
          Пользовательское соглашение
        </RootButton>
      </div>
    </div>
  )
}

export default BottomBlock
