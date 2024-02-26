import React from "react"
import type { ModalConfig } from "@/redux/features/modalSlice"
import RootText from "@/ui/texts/RootText/RootText"
import s from "./NotificationModal.module.scss"

const NotificationModal = ({ title, text }: ModalConfig) => {
  return (
    <div className={s["wrap"]}>
      <RootText className={s["title"]} tag="h5">
        {title}
      </RootText>
      <RootText className={s["text"]} as="text-lg">
        {text}
      </RootText>
    </div>
  )
}

export default NotificationModal
