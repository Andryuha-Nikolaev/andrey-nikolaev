import React from "react"
import s from "./UiFormsBlock.module.scss"
import FeedbackForm from "@/forms/FeedbackForm/FeedbackForm"

const UiFormsBlock = () => {
  return (
    <div className={s["block"]}>
      <div className={s["wrap"]}>
        <FeedbackForm />
      </div>
      <div className={s["wrap"]}></div>
    </div>
  )
}

export default UiFormsBlock
