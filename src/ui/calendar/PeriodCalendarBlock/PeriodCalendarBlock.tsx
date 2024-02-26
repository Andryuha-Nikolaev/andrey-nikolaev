"use client"

import React, { useState, useRef, useEffect } from "react"
import classNames from "classnames"
import s from "./PeriodCalendarBlock.module.scss"
import { Calendar } from "primereact/calendar"
import CalendarWrapper from "../../../providers/CalendarLocaleProvider/CalendarLocaleProvider"
import RootText from "@/ui/texts/RootText/RootText"
import CalendarIcon from "@/ui/icons/CalenadarIcon/CalendarIcon"
import CalendarArrow from "@/ui/icons/CalendarArrow/CalendarArrow"
import useClickOutside from "@/hooks/useClickOutside/useClickOutside"
import { getLastDateOfMonth } from "@/helpers/getLastDateOfMonth"

const months = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
]

type PeriodCalendarBlockProps = {
  startDateValue: Date | ""
  endDateValue: Date | ""
  onChangeStart: (startValue: Date) => void
  onChangeEnd: (startValue: Date) => void
}

const PeriodCalendarBlock = ({
  startDateValue,
  endDateValue,
  onChangeStart,
  onChangeEnd,
}: PeriodCalendarBlockProps) => {
  const currentDate = new Date()
  const newDate = new Date(currentDate)
  newDate.setMonth(currentDate.getMonth() - 12)

  const [startDate, setStartDate] = useState<Date | "">(startDateValue)
  const [endDate, setEndDate] = useState<Date | "">(endDateValue)
  const [openCal, setOpenCal] = useState<number>(0)

  useEffect(() => {
    setStartDate(startDateValue)
    setEndDate(endDateValue)
  }, [startDateValue, endDateValue])

  const calRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const btnRef2 = useRef<HTMLDivElement>(null)

  function formatMonthYear(date: Date) {
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    const formattedDate = `${months[monthIndex]} ${year}`
    return formattedDate
  }

  const formattedStartDate = startDate ? formatMonthYear(startDate) : "..."
  const formattedEndDate = endDate ? formatMonthYear(endDate) : "..."

  const handleClose = () => {
    setOpenCal(0)
  }

  const calendarToggle = (index: number) => {
    if (openCal === index) {
      handleClose()
    } else {
      setOpenCal(index)
    }
  }

  useClickOutside({
    elementRefs: [calRef, btnRef, btnRef2],
    isOpen: !!openCal,
    onClose: handleClose,
  })

  return (
    <CalendarWrapper>
      <div className={classNames(s["block"], "period-calendar-block")}>
        <div className={classNames(s["inputs"])}>
          <div
            ref={btnRef}
            onClick={() => {
              calendarToggle(1)
            }}
            className={classNames(s["input"], openCal === 1 && s["open"])}
          >
            <RootText>{formattedStartDate}</RootText>

            <CalendarIcon />
          </div>
          <RootText fontWeightVariant="bold">—</RootText>
          <div
            ref={btnRef2}
            onClick={() => {
              calendarToggle(2)
            }}
            className={classNames(s["input"], openCal === 2 && s["open"])}
          >
            <RootText>{formattedEndDate}</RootText>
            <CalendarIcon />
          </div>
        </div>
        <div ref={calRef} className={classNames(s["calendars"])}>
          <div className={classNames(s["wrap"], openCal === 1 && s["open"])}>
            <Calendar
              panelClassName={s["calendar"]}
              view="month"
              inline
              dateFormat="mm/yy"
              value={startDate}
              readOnlyInput
              locale="ru"
              onChange={(e) => {
                if (e.value instanceof Date) {
                  setStartDate(e.value)
                  onChangeStart(e.value)
                  setOpenCal(0)
                }
              }}
              maxDate={endDate ? endDate : undefined}
              prevIcon={<CalendarArrow next={false} />}
              nextIcon={<CalendarArrow next />}
            />
          </div>
          <div
            className={classNames(
              s["wrap"],
              s["wrap2"],
              openCal === 2 && s["open"]
            )}
          >
            <Calendar
              panelClassName={s["calendar"]}
              inline
              view="month"
              dateFormat="mm/yy"
              value={endDate}
              readOnlyInput
              locale="ru"
              onChange={(e) => {
                if (e.value instanceof Date) {
                  setEndDate(e.value)
                  onChangeEnd(getLastDateOfMonth(e.value))
                  setOpenCal(0)
                }
              }}
              minDate={startDate ? startDate : undefined}
              prevIcon={<CalendarArrow next={false} />}
              nextIcon={<CalendarArrow next />}
            />
          </div>
        </div>
      </div>
    </CalendarWrapper>
  )
}

export default PeriodCalendarBlock
