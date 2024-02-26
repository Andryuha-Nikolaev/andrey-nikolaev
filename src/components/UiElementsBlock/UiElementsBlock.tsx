import React from "react"
import s from "./UiElementsBlock.module.scss"
import RootText from "@/ui/texts/RootText/RootText"
// import CookiesBlock from "@/ui/cookies/CookiesBlock/CookiesBlock"
// import PeriodCalendarBlock from "@/ui/calendar/PeriodCalendarBlock/PeriodCalendarBlock"
import CalendarEventBlock from "@/ui/calendar/CalendarEventBlock/CalendarEventBlock"
// import CalendarBlock from "@/ui/calendar/CalendarBlock/CalendarBlock"
// import CalendarEventBlock from "@/ui/calendar/CalendarEventBlock/CalendarEventBlock"
// import NewsItem from "@/ui/news/NewsItem/NewsItem"

const UiElementsBlock = () => {
  return (
    <div className={s["block"]}>
      {/* <RootText tag="h6" fontVariant="russo">
        Cookies:
      </RootText>
      <div className={s["wrap"]}>
        <CookiesBlock />
      </div> */}
      {/* <RootText tag="h6" fontVariant="russo">
        Cookies:
      </RootText>
      <div className={s["wrap"]}>
        <CookiesBlock />
      </div> */}
      {/* <RootText tag="h6" fontVariant="russo">
        Календарь основной:
      </RootText>
      <div className={s["wrap"]}>
        <CalendarBlock />
      </div> */}
      {/* <RootText tag="h6" fontVariant="russo">
        Календарь с периодом:
      </RootText>
      <div style={{ minHeight: 200 }} className={s["wrap"]}>
        <PeriodCalendarBlock />
      </div> */}
      <RootText tag="h6" fontVariant="russo">
        Элементы:
      </RootText>
      <div className={s["wrap"]}>
        {/* <CalendarEventBlock page="home" /> */}
        <CalendarEventBlock
          calendarEvent={{
            id: 7,
            title:
              "Россия. Новочеркасск. Fonbet Всероссийские соревнования «Памяти Недвигина Г.П. на призы ВФСО 'Трудовые резервы'»",
            flagImg: "/test-flag1.png",
            date: {
              titleDays: "10-28",
              titleMonthYear: "июнь 2024",
              startDate: "10.06.2024",
              endDate: "28.06.2024",
            },
            orderUrl: "/order",
            onlineTranslationUrl: "",
            links: [
              {
                name: "Положение",
                url: "/",
              },
              {
                name: "Регламент",
                url: "/",
              },
              {
                name: "Размещение",
                url: "/",
              },
              {
                name: "Трансфер",
                url: "/",
              },
              {
                name: "Протокол",
                url: "/",
              },
              {
                name: "Результаты",
                url: "/",
              },
            ],
            category: "Мужчины и женщины",
          }}
          page="calendar"
        />
        {/* <CalendarEventBlock page="calendar" /> */}
      </div>

      {/* <div style={{ minHeight: 500 }} className={s["wrap"]}>
        <RootText as="text-lg" fontVariant="russo">
          Новость на главной
        </RootText>
        <NewsItem page="home" />
        <RootText as="text-lg" fontVariant="russo">
          Главная новость на странице новостей
        </RootText>
        <NewsItem page="main-news" />
        <RootText as="text-lg" fontVariant="russo">
          Новость на странице новостей
        </RootText>
        <NewsItem page="news" />
      </div> */}
    </div>
  )
}

export default UiElementsBlock
