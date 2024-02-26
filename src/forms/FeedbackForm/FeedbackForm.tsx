"use client"

import React from "react"
import FormWrapper from "../FormWrapper/FormWrapper"
import { useForm } from "react-hook-form"
import RootInput from "@/ui/forms/RootInput/RootInput"
import RootCheckbox from "@/ui/forms/RootCheckbox/RootCheckbox"
import RootText from "@/ui/texts/RootText/RootText"

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,

    setValue,
    resetField,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    console.log("Данные из формы:", data)
    setValue("phone", "")
    reset()
  }

  const onClear = (fieldName: string) => {
    resetField(fieldName)
  }

  const clearValue = (fieldName: string) => {
    setValue(fieldName, "")
  }

  return (
    <FormWrapper
      title="Как стать участником проекта?"
      description="Заполните заявку на участие и мы свяжемся с вами"
      buttonText="Отправить заявку"
      isDisabledButton={!!Object.keys(errors).length}
      onSubmit={handleSubmit(onSubmit)}
    >
      <RootInput
        onClear={onClear}
        placeholder="ФИО"
        label="ФИО"
        type="text"
        errorMessage={errors.name?.message}
        register={{
          ...register("name", {
            required: "Поле обязательно",
            minLength: {
              value: 2,
              message: "Минимальная длина - 2 символа",
            },
          }),
        }}
      ></RootInput>
      <RootInput
        onClear={onClear}
        placeholder="Должность"
        label="Должность"
        type="text"
        errorMessage={errors.job?.message}
        register={{
          ...register("job", {
            required: "Поле обязательно",
            minLength: {
              value: 2,
              message: "Минимальная длина - 2 символа",
            },
          }),
        }}
      ></RootInput>
      <RootInput
        onClear={clearValue}
        placeholder="Телефон"
        label="Телефон"
        type="tel"
        errorMessage={errors.phone?.message}
        register={{
          ...register("phone", {
            required: "Поле обязательно",
            minLength: {
              value: 18,
              message: "Поле обязательно",
            },
            maxLength: 18,
          }),
        }}
      ></RootInput>
      <RootInput
        onClear={onClear}
        placeholder="Регион"
        label="Регион"
        type="text"
        errorMessage={errors.region?.message}
        register={{
          ...register("region", {
            required: "Поле обязательно",
            minLength: {
              value: 2,
              message: "Минимальная длина - 2 символа",
            },
          }),
        }}
      ></RootInput>
      <RootCheckbox
        errorMessage={errors.checkbox?.message}
        register={{ ...register("checkbox", { required: "Поле обязательно" }) }}
      >
        <RootText tag="p">Чекбокс</RootText>
      </RootCheckbox>
    </FormWrapper>
  )
}

export default FeedbackForm
