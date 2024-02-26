import React from "react"
import s from "./ModalContentWrapper.module.scss"

const ModalContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="wrapper" className={s["wrapper"]}>
      {children}
    </div>
  )
}

export default ModalContentWrapper
