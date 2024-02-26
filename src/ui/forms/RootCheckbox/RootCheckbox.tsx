import React from "react"
import s from "./RootCheckbox.module.scss"
import RootText from "@/ui/texts/RootText/RootText"

type RootCheckboxProps = {
  register: any
  errorMessage: any
  children: React.ReactNode
}

const RootCheckbox = ({
  register,
  errorMessage,
  children,
}: RootCheckboxProps) => {
  return (
    <div className={s["checkbox-wrap"]}>
      <label className={s["checkbox-label"]}>
        <input
          className={s["checkbox-input"]}
          type="checkbox"
          placeholder="check"
          {...register}
        />
        <span className={s["checkbox-custom"]}></span>
        {children}
        {errorMessage && (
          <RootText
            className={s["error-message"]}
            tag="span"
            colorVariant="red"
          >
            {errorMessage}
          </RootText>
        )}
      </label>
    </div>
  )
}

export default RootCheckbox
