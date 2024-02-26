import React from "react"
import s from "./UiTextsBlock.module.scss"
import RootText from "@/ui/texts/RootText/RootText"

const UiTextsBlock = () => {
  return (
    <div className={s["block"]}>
      <div className={s["wrap"]}>
        <RootText tag="h1">Чемпионат мира по дзюдо в Катаре.</RootText>
        <RootText tag="h3">Чемпионат мира по дзюдо в Катаре.</RootText>
        <RootText tag="h5">Чемпионат мира по дзюдо в Катаре.</RootText>
        <RootText tag="h6">Чемпионат мира по дзюдо в Катаре.</RootText>
        <RootText tag="h6" fontVariant="russo">
          Чемпионат мира по дзюдо в Катаре.
        </RootText>
        <RootText tag="p" as="text-lg">
          Чемпионат мира по дзюдо в Катаре.
        </RootText>
        <RootText tag="p">Чемпионат мира по дзюдо в Катаре.</RootText>
        <RootText tag="p" as="text-sm">
          Чемпионат мира по дзюдо в Катаре.
        </RootText>
      </div>
      <div className={s["wrap"]}>
        <RootText tag="h1">H1 заголовок блока</RootText>
        <RootText tag="h2">H2 заголовок блока</RootText>
        <RootText tag="h3">H3 заголовок первого блока на главной</RootText>
        <RootText tag="h4">
          H4 заголовок чисел в блоке Фередерация дзюдо России
        </RootText>
        <RootText tag="h5">
          H5 подзаголовок в блоке новостей и проектов
        </RootText>
        <RootText tag="h6">H6 маленький подзаголовок обычный шрифт</RootText>
        <RootText tag="h6" fontVariant="russo">
          H6 маленький подзаголовок шрифт russo
        </RootText>

        <RootText tag="p" as="text-lg">
          Большой текст
        </RootText>
        <RootText tag="p">Обычный текст</RootText>
        <RootText tag="p" fontWeightVariant="bold">
          Обычный текст жирный
        </RootText>
        <RootText tag="p" as="text-sm">
          Маленький текст
        </RootText>
        <RootText tag="span">span</RootText>
      </div>
    </div>
  )
}

export default UiTextsBlock
