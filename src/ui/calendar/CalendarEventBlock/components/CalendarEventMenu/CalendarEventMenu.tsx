import React from "react"
import s from "./CalendarEventMenu.module.scss"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import RootText from "@/ui/texts/RootText/RootText"
import classNames from "classnames"

const tabsArr = [
  {
    name: "Положение",
    link: "/",
  },
  {
    name: "Регламент",
    link: "/",
  },
  {
    name: "Размещение",
    link: "/",
  },
  {
    name: "Трансфер",
    link: "/",
  },
  {
    name: "Протокол",
    link: "/",
  },
  {
    name: "Результаты",
    link: "/",
  },
]

type CalendarEventMenuProps = {
  isMobile?: boolean
}

const CalendarEventMenu = ({ isMobile }: CalendarEventMenuProps) => {
  return (
    <div className={classNames(s["menu"])}>
      <div className={classNames(s["menu-text"])}>
        <RootText>
          {/* {isMobile ? "Быстрые\u00A0действия:" : "Нажмите, чтобы\u00A0открыть:"} */}
          Быстрые&nbsp;действия:
        </RootText>
      </div>
      <div className={classNames(s["tabs"])}>
        {tabsArr.map((item) => (
          <RootButton
            withArrow={isMobile}
            className={classNames(s["tab"], isMobile && s["tab_mobile"])}
            key={`calendar-event-tab-${item.name}`}
            link={item.link}
            role="next-link"
          >
            {item.name}
          </RootButton>
        ))}
      </div>
    </div>
  )
}

export default CalendarEventMenu
