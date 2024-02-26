import s from "./style.module.scss"
import EpIcon from "./_icon/ep.svg"
import { Dispatch, SetStateAction, useState } from "react"
import classNames from "classnames"

const regions = [
  { name: "Вся Россия" },
  { name: "ФО Москва" },
  { name: "ФО Санкт-Петербург" },
  { name: "Центральный ФО" },
  { name: "Северо-западный ФО" },
  { name: "Южный ФО" },
  { name: "Северо-кавказский ФО" },
  { name: "Приволжский ФО" },
  { name: "Уральский ФО" },
  { name: "Сибирский ФО" },
  {
    name: "Дальневосточный ФО",
    subAreas: [
      { name: "Амурская область" },
      { name: "Еврейская автономная область" },
      { name: "Забайкальский край" },
      { name: "Камчатский край" },
      { name: "Магаданская область" },
      { name: "Приморский край" },
      { name: "Республика бурятия" },
      { name: "Республика Саха (Якутия)" },
      { name: "Сахалинская область" },
      { name: "Хабаровский край" },
      { name: "Чукотский автономный округ" },
      { name: "Чукотский автономный округ" },
      { name: "Чукотский автономный округ" },
      { name: "Чукотский автономный округ" },
    ],
  },
]

const ListItem: React.FC<{
  name: string
  subAreas?: any[]
  setActiveItem: Dispatch<SetStateAction<any>>
  activeItem: any
  setActiveArea: Dispatch<any>
}> = ({ name, subAreas, setActiveItem, setActiveArea }) => {
  return (
    <li>
      <button
        onMouseEnter={() => {
          if (subAreas) {
            setActiveItem((state: any) => {
              if (state.name === name) {
                return state
              }
              return { name, subAreas }
            })
          }
        }}
        onClick={() => {
          setActiveArea((state: any) => {
            if (state?.name === name) {
              return state
            }
            return { name, subAreas }
          })
        }}
        className={s["region-list__item"]}
      >
        {name}
        {subAreas && <EpIcon />}
      </button>
    </li>
  )
}

const RegionWidget: React.FC<{
  mapInstance: any
  setActiveArea: Dispatch<any>
}> = ({ setActiveArea }) => {
  const [activeRegion, setActiveRegion] = useState(regions[0])
  const [activeSubArea, setActiveSubArea] = useState()

  return (
    <div className={s["container"]}>
      <ul className={classNames(s["region-list"], s["regions"])}>
        {regions.map((item) => (
          <ListItem
            activeItem={activeRegion}
            setActiveArea={setActiveArea}
            setActiveItem={setActiveRegion}
            key={item.name}
            {...item}
          />
        ))}
      </ul>
      <ul className={classNames(s["region-list"], s["areas"])}>
        {activeRegion.subAreas?.map((item) => {
          return (
            <ListItem
              key={item.name}
              activeItem={activeSubArea}
              setActiveItem={setActiveSubArea}
              setActiveArea={setActiveArea}
              {...item}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default RegionWidget
