"use client"

import React, { useState, useRef } from "react"
import s from "./CalendarEventBlock.module.scss"
import classNames from "classnames"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import RootText from "@/ui/texts/RootText/RootText"
import Image from "next/image"
import PointIcon from "@/ui/icons/PointIcon/PointIcon"
import CalendarEventMenu from "./components/CalendarEventMenu/CalendarEventMenu"
import useClickOutside from "@/hooks/useClickOutside/useClickOutside"
import { useAppSelector } from "@/redux/hooks"
import type { CalendarItem } from "@/interfaces/calendar"
import Link from "next/link"

type CalendarEventBlockProps = {
  page: "home" | "calendar"
  calendarEvent: CalendarItem
}

const CalendarEventBlock = ({
  page,
  calendarEvent: {
    date: { titleDays, titleMonthYear },
    flagImg,
    id,
    title,
    orderUrl,
    onlineTranslationUrl,
  },
}: CalendarEventBlockProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const elRefMob = useRef<HTMLDivElement>(null)
  const elRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)

  const isOpenToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const { isTablet } = useAppSelector((state) => state.site)

  useClickOutside({
    elementRefs: [elRefMob, elRef, btnRef],
    isOpen: isOpen,
    onClose: handleClose,
    onListener: isTablet,
  })

  return (
    <div className={classNames(s["wrapper"], s[page])}>
      <div className={classNames(s["block"], s[page])}>
        <div className={classNames(s["container"])}>
          <div className={classNames(s["main-content"])}>
            <div className={classNames(s["time"])}>
              <RootText tag="h6" fontVariant="russo">
                {titleDays}
              </RootText>
              <RootText fontVariant="russo">{titleMonthYear}</RootText>
            </div>
            <div className={classNames(s["text-block"])}>
              <div className={classNames(s["img-wrap"])}>
                <Image
                  quality={80}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  sizes="36x, 26px"
                  src={flagImg}
                  alt="флаг страны"
                ></Image>
              </div>
              <div className={s["text"]}>
                <RootText
                  dangerouslySetInnerHTML={{ __html: title }}
                  as="text-lg"
                  fontVariant="russo"
                ></RootText>
              </div>
            </div>
            <Link href={`/calendar/${id}`} className={s["event-link"]}></Link>
            {page === "home" && (
              <div className={classNames(s["btns"])}>
                {orderUrl && (
                  <RootButton
                    link={orderUrl}
                    role="link"
                    appearance="link"
                    styleVariant="2"
                    withArrow
                  >
                    Регламент
                  </RootButton>
                )}
                {onlineTranslationUrl && (
                  <RootButton
                    link={onlineTranslationUrl}
                    role="link"
                    appearance="link"
                    styleVariant="2"
                    withArrow
                  >
                    Онлайн-результаты
                  </RootButton>
                )}
              </div>
            )}
            {page === "calendar" && (
              <div className={classNames(s["btns"], s[page])}>
                <RootText fontWeightVariant="bold">
                  Юниоры и юниорки (до&nbsp;21&nbsp;года)
                </RootText>
              </div>
            )}
          </div>
        </div>

        {page === "calendar" && (
          <div className={classNames(s["calendar-wrap"])}>
            <div ref={btnRef} className={classNames(s["btns-wrap"])}>
              <button
                aria-label="open events"
                onClick={isOpenToggle}
                className={classNames(s["open-btn"])}
              >
                <PointIcon />
              </button>
              <div
                ref={elRefMob}
                className={classNames(
                  s["menu-mobile"],
                  isOpen && s["menu-mobile_open"]
                )}
              >
                <CalendarEventMenu isMobile />
              </div>
            </div>
          </div>
        )}
      </div>
      {page === "calendar" && (
        <div
          ref={elRef}
          className={classNames(s["menu-desk"], isOpen && s["menu-desk_open"])}
        >
          <CalendarEventMenu />
        </div>
      )}
    </div>
  )
}

export default CalendarEventBlock
