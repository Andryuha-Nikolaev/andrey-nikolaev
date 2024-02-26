"use client"

import React from "react"
import s from "./FormWrapper.module.scss"
import classNames from "classnames"
import RootText from "@/ui/texts/RootText/RootText"
import RootButton from "@/ui/buttons/RootButton/RootButton"

type FormWrapperProps = {
  children: React.ReactNode
  title: string
  description?: string
  buttonText: string
  isDisabledButton: boolean
  onSubmit: () => void
}

const FormWrapper = ({
  children,
  title,
  description,
  buttonText,
  onSubmit,
  isDisabledButton,
}: FormWrapperProps) => {
  return (
    <div className={classNames(s["wrapper"])}>
      <RootText tag="h6" fontVariant="russo">
        {title}
      </RootText>
      {description && (
        <RootText tag="p" as="text-lg">
          {description}
        </RootText>
      )}
      <form onSubmit={onSubmit}>
        <div className={classNames(s["fields-wrap"])}>{children}</div>
        <div className={classNames(s["btn-wrap"])}>
          <RootButton isDisabled={isDisabledButton} buttonType="submit">
            {buttonText}
          </RootButton>
        </div>
      </form>
    </div>
  )
}

export default FormWrapper
