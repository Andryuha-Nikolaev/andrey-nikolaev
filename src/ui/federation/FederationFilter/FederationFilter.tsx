import React, { useState } from "react"
import s from "./FederationFilter.module.scss"
import classNames from "classnames"
import RootText from "@/ui/texts/RootText/RootText"

const itemsArr = [
  { name: "Тренерский штаб" },
  { name: "Мужчины" },
  { name: "Женщины" },
  { name: "Юниоры и юниорки до 23 лет" },
  { name: "Юниоры и юниорки до 21 года" },
  { name: "Юноши и девушки до 18 лет" },
]

const FederationFilter = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className={s["wrap"]}>
      <div className={s["filter"]}>
        {itemsArr.map((item, index) => {
          const isActive = index === activeIndex
          return (
            <div
              className={classNames(s["item"], isActive && s["active"])}
              onClick={() => setActiveIndex(index)}
              key={`federation-filter-${index}`}
            >
              <div className={classNames(s["radio"], isActive && s["active"])}>
                <div className={classNames(s["point"])}></div>
              </div>
              <RootText>{item.name}</RootText>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FederationFilter
