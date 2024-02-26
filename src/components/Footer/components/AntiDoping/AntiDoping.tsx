import React from "react"
import s from "./AntiDoping.module.scss"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import Image from "next/image"
import gramophone from "./gramophone.png"
import tablets from "./tablets.png"
import classNames from "classnames"

const AntiDoping = () => {
  return (
    <div className={s["block"]}>
      <RootButton
        buttonPosition="left"
        className={classNames(s["btn"], s["btn1"])}
        link="/"
        role="link"
        textTransform="uppercase"
      >
        <Image src={gramophone} alt="Cообщить" width={47} height={38}></Image>
        сообщить о допинге
      </RootButton>
      <RootButton
        buttonPosition="left"
        className={classNames(s["btn"], s["btn2"])}
        link="/"
        role="link"
        textTransform="uppercase"
      >
        <Image src={tablets} alt="Проверить" width={40} height={38}></Image>
        Проверить лекарство
      </RootButton>
    </div>
  )
}

export default AntiDoping
