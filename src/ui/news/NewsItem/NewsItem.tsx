"use client"

import React from "react"
import s from "./NewsItem.module.scss"
import RootText from "@/ui/texts/RootText/RootText"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import Image from "next/image"
import classNames from "classnames"
import type { NewsItemType } from "@/interfaces/news"
import { useAppSelector } from "@/redux/hooks"

type NewsItemProps = {
  page:
    | "home"
    | "main-news"
    | "news"
    | "home-all-news"
    | "home-adv"
    | "similar-news"
  item: NewsItemType
}

const NewsItem = ({ page, item }: NewsItemProps) => {
  const { isTestMode } = useAppSelector((state) => state.site)

  return (
    <div className={classNames(s["block"], s[page])}>
      {isTestMode && (
        <div className={s["test"]}>
          <RootText>id: {item.id}</RootText>
          <RootText>category: {item.category}</RootText>
          <RootText>type: {item.type}</RootText>
        </div>
      )}

      {page !== "home-adv" && (
        <div className={s["img-wrap"]}>
          <Image
            quality={80}
            fill
            style={{
              objectFit: "cover",
            }}
            // sizes="450px, 450px"
            src={item.previewImg}
            alt="превью новости"
          ></Image>
        </div>
      )}
      <div>
        <div className={s["info-wrap"]}>
          <RootText colorVariant="dark-gray">{item.date}</RootText>
          {page !== "home-all-news" && page !== "home-adv" && (
            <RootText colorVariant="dark-gray">Х дней назад</RootText>
          )}
        </div>
        <div className={s["link-wrap"]}>
          <RootButton
            className={classNames(s["link"])}
            appearance="link"
            link={`/news/${item.id}`}
            role="next-link"
            styleVariant="3"
          >
            <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
          </RootButton>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
