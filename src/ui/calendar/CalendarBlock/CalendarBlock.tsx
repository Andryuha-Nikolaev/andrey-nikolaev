"use client"

import classNames from "classnames"
import React, { useEffect, useState } from "react"
import s from "./CalendarBlock.module.scss"
import { Calendar } from "primereact/calendar"
import CalendarArrow from "@/ui/icons/CalendarArrow/CalendarArrow"
import { getCalendar } from "@/services/getCalendar"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  setCalendarSelectedResult,
  setShowSelectedResult,
} from "@/redux/features/calendarSlice"
import { ProgressSpinner } from "primereact/progressspinner"
import { formatDate } from "@/helpers/formatDateFront"

const CalendarBlock = ({ startDates }: { startDates: string[] | [] }) => {
  const [selectedDate, setSelectedDate] = useState<Date | "">("")
  const [isLoading, setIsLoading] = useState(false)

  const { showSelectedResult } = useAppSelector((state) => state.calendar)

  useEffect(() => {
    if (!showSelectedResult) {
      setSelectedDate("")
    }
  }, [showSelectedResult])

  useEffect(() => {
    dispatch(setShowSelectedResult(false))
  }, [])

  const parsedDates = startDates.map((startDate) => {
    const [day, month, year] = startDate.split(".")
    return {
      day: parseInt(day),
      month: parseInt(month),
      year: parseInt(year),
    }
  })

  const dateTemplate = (date: { day: number; month: number; year: number }) => {
    const matchingDates = parsedDates.filter(
      (d) =>
        d.day === date.day && d.month - 1 === date.month && d.year === date.year
    )
    if (matchingDates.length > 0) {
      return (
        <span
          className={classNames("date-template-day", s["date-template-day"])}
        >
          {date.day}
        </span>
      )
    }
    return date.day
  }

  const dispatch = useAppDispatch()
  const handleChangeDate = (value: Date) => {
    setIsLoading(true)
    setSelectedDate(value)
    const currendDate = formatDate(value)
    getCalendar({ from: currendDate, to: currendDate }).then((data) => {
      dispatch(setCalendarSelectedResult(data.calendar))
      dispatch(setShowSelectedResult(true))
      setIsLoading(false)
    })
  }

  return (
    <>
      <div
        className={classNames(
          s["block"],
          "main-calendar-block",
          isLoading && s["loading"]
        )}
      >
        <ProgressSpinner
          className={classNames(s["spinner"], isLoading && s["loading"])}
          color="#ed2e38"
        ></ProgressSpinner>
        <div className={classNames(s["wrap"])}>
          <Calendar
            dateTemplate={dateTemplate}
            panelClassName={s["calendar"]}
            showOtherMonths={false}
            inline={true}
            dateFormat="mm/yy"
            value={selectedDate}
            readOnlyInput
            locale="ru"
            onBlur={(e) => {
              setTimeout(() => {
                e.target.blur()
              }, 100)
            }}
            onChange={(e) => {
              if (e.value instanceof Date) {
                handleChangeDate(e.value)
              }
            }}
            prevIcon={<CalendarArrow next={false} />}
            nextIcon={<CalendarArrow next />}
          />
        </div>
      </div>
    </>
  )
}

export default CalendarBlock
