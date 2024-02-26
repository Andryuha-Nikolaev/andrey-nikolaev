import React from "react"
import s from "./CalendarArrow.module.scss"
import classNames from "classnames"

const CalendarArrow = ({ next }: { next: boolean }) => {
  return (
    <span className={classNames(s["icon"], next && s["rotate"])}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M7.8135 20.5L9.75792 18.4945L5.25172 13.891L24 13.8726L23.9972 11.044L5.29995 11.0624L9.73036 6.49417L7.77768 4.5L0 12.5191L7.8135 20.5Z"
          fill="white"
        />
      </svg>
    </span>
  )
}

export default CalendarArrow
