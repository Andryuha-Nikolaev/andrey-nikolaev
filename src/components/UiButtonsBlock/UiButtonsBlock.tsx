"use client"

import React from "react"
import s from "./UiButtonsBlock.module.scss"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { openModal } from "@/redux/features/modalSlice"
import RootText from "@/ui/texts/RootText/RootText"
import ScrollTopButton from "@/ui/buttons/ScrollTopButton/ScrollTopButton"
import CloseIcon from "@/ui/icons/CloseIcon/CloseIcon"
import CopyIcon from "@/ui/icons/CopyIcon/CopyIcon"
import SocialMediaBlock from "@/ui/social-media/SocialMediaBlock/SocialMediaBlock"
import FederationFilter from "@/ui/federation/FederationFilter/FederationFilter"
import { setIsTestMode } from "@/redux/features/siteSlice"

const UiButtonsBlock = () => {
  const dispatch = useAppDispatch()
  const { isTestMode } = useAppSelector((state) => state.site)

  const openNotificationModal = () => {
    dispatch(
      openModal({
        modalId: "notification",
        title: "Спасибо!",
        text: "Ваша заявка успешно отправлена. Наши сотрудники скоро свяжутся с вами",
      })
    )
  }

  const openDefaultModal = () => {
    dispatch(
      openModal({
        modalId: "default",
        modalClassName: s["modal-class"],
        title: "Дефолтная модалка",
        text: "Дефолтная модалка Ваша заявка успешно отправлена. Наши сотрудники скоро свяжутся с вами",
      })
    )
  }

  return (
    <div className={s["block"]}>
      <RootText tag="h6" fontVariant="russo">
        TEST MODE: {isTestMode ? "включен" : "выключен"}
      </RootText>
      <div style={{ fontSize: 14 }} className={s["wrap"]}>
        <RootButton
          onClick={() => {
            dispatch(setIsTestMode(true))
          }}
        >
          включить
        </RootButton>

        <RootButton
          onClick={() => {
            dispatch(setIsTestMode(false))
          }}
        >
          выключить
        </RootButton>
      </div>
      <RootText tag="h6" fontVariant="russo">
        Modals:
      </RootText>
      <div style={{ fontSize: 14 }} className={s["wrap"]}>
        <RootButton
          buttonPosition="left"
          onClick={() => {
            openNotificationModal()
          }}
          styleVariant="2"
        >
          Открыть модалку с уведомлением
        </RootButton>
        <RootButton
          buttonPosition="left"
          onClick={() => {
            openDefaultModal()
          }}
          styleVariant="2"
        >
          Открыть дефолтную модалку
        </RootButton>
      </div>
      <RootText tag="h6" fontVariant="russo">
        Radio:
      </RootText>
      <div style={{ fontSize: 14 }} className={s["wrap"]}>
        <FederationFilter />
      </div>

      <RootText tag="h6" fontVariant="russo">
        Links:
      </RootText>
      <div style={{ fontSize: 14 }} className={s["wrap"]}>
        <RootButton appearance="link">Наша история</RootButton>
        <RootButton withArrow appearance="link" styleVariant="2">
          Наша история
        </RootButton>
      </div>
      <div>
        <RootText tag="h6" fontVariant="russo">
          Buttons:
        </RootText>
      </div>

      <div className={s["wrap"]}>
        <div style={{ maxWidth: 238 }}>
          <RootButton>Узнать подробнее</RootButton>
        </div>
        <div style={{ maxWidth: 238 }}>
          <RootButton styleVariant="2">Узнать подробнее</RootButton>
        </div>
        <ScrollTopButton />
        <button style={{ width: 40, height: 40 }}>
          <CloseIcon color="#fff" strokeColor="transparent" form="round" />
        </button>
        <button style={{ width: 40, height: 40 }}>
          <CopyIcon />
        </button>
      </div>
      <div>
        <RootText tag="h6" fontVariant="russo">
          Social media:
        </RootText>
        <RootText tag="p" as="span">
          (брал из макета главной страницы, ховер из ui kit)
        </RootText>
      </div>

      <div className={s["wrap"]}>
        <SocialMediaBlock variant="header" />
      </div>
    </div>
  )
}

export default UiButtonsBlock
