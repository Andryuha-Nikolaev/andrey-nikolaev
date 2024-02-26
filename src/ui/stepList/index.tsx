import { ReactNode } from "react"
import RootText from "../texts/RootText/RootText"

import s from "./style.module.scss"

const StepList: React.FC<{
  list: { name: string; content: ReactNode }[]
}> = ({ list }) => {
  return (
    <ol className={s["list-container"]}>
      {list.map(({ content, name }, i) => {
        return (
          <li className={s["list-item"]} key={name}>
            <span className={s["list-item__counter"]}>{i + 1}</span>
            <div className={s["text"]}>
              <RootText className={s["title"]} tag="h5">
                {name}
              </RootText>
              <div className={s["content"]}>{content}</div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default StepList
