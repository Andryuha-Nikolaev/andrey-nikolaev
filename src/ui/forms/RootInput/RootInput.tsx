import React from "react"
import classNames from "classnames"
import s from "./RootInput.module.scss"
import RootText from "@/ui/texts/RootText/RootText"
import CloseIcon from "@/ui/icons/CloseIcon/CloseIcon"
import InputMask from "react-input-mask"

type RootInputProps = {
  register: any
  errorMessage: any
  type: "text" | "password" | "email" | "number" | "tel"
  placeholder: string
  label?: string
  clearIcon?: boolean
  onClear: (fieldName: string) => void
}

const RootInput = ({
  register,
  errorMessage,
  type,
  placeholder,
  label,
  clearIcon = true,
  onClear,
}: RootInputProps) => {
  return (
    <label className={classNames(s["label"], errorMessage && s["error"])}>
      {label && (
        <RootText className={s["label-text"]} tag="p">
          {label}
        </RootText>
      )}
      {type === "tel" ? (
        <InputMask
          mask="+7 (999) 999-99-99"
          maskChar={null} // Необязательный параметр, удаляет заглушки "_" из маски
          className={classNames(s["input"], clearIcon && s["with-clear"])}
          type={type}
          {...register}
        />
      ) : (
        <input
          className={classNames(s["input"], clearIcon && s["with-clear"])}
          type={type}
          placeholder={placeholder}
          {...register}
        />
      )}

      {clearIcon && (
        <div
          onClick={() => onClear(register.name)}
          className={classNames(s["clear"])}
        >
          <CloseIcon form="round" color="#000" strokeColor="transparent" />
        </div>
      )}
      {errorMessage && (
        <RootText
          className={classNames(s["error-message"])}
          tag="span"
          colorVariant="red"
        >
          {errorMessage}
        </RootText>
      )}
    </label>
  )
}

export default RootInput
