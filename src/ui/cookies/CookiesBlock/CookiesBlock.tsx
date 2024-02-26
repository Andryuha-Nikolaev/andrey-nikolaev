"use client"

import React, { useState } from "react"
import s from "./CookiesBlock.module.scss"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import RootText from "@/ui/texts/RootText/RootText"
import { setCookie } from "cookies-next"

const CookiesBlock = () => {
  const [isAgree, setIsAgree] = useState(false)

  const handleCookiesAgreement = () => {
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getDate() + 365)
    setCookie("cookies_agreement", true, {
      path: "/",
      expires: expirationDate,
    })
    setIsAgree(true)
  }

  if (isAgree) {
    return null
  }

  return (
    <div className={s["block"]}>
      <div className={s["content"]}>
        <RootText>
          Продолжая использовать наш сайт, вы&nbsp;даете согласие
          на&nbsp;обработку{" "}
          <RootButton
            textDecoration="underline"
            appearance="link"
            role="link"
            link="/cookies-policy"
          >
            файлов cookie
          </RootButton>{" "}
          , которые обеспечивают правильную работу сайта
        </RootText>
        <RootButton onClick={handleCookiesAgreement} className={s["btn"]}>
          ОК
        </RootButton>
      </div>
    </div>
  )
}

export default CookiesBlock
