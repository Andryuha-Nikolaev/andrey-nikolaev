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
import Image from "next/image"
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

  const openAthleteModal = () => {
    dispatch(
      openModal({
        modalId: "athlete",
        athleteData: {
          image: "/test5.png",
          tourney: {
            name: "Олимпийские игры 1964",
            place: "Токио (Япония)",
          },
          name: "Степанов Олег",
          placeOfBirth: "СССР, РСФСР, Москва",
          olympicAwards: [{ medal: "bronze", year: "1964" }],
          awards: [
            `На первой для отечественных дзюдоистов Олимпиаде в\u00A0Токио в\u00A01964 году завоевал бронзовую медаль.`,
            `Дважды поднимался на\u00A0вершину пьедестала чемпионатов Европы (1965\u00A0и\u00A01966).`,
            `Был третьим призером Чемпионата мира 1965 года.`,
            `Заслуженный мастер спорта СССР.`,
            `Заслуженный тренер СССР.`,
            `Награжден орденом Трудового красного знамени.`,
          ],
        },
      })
    )
  }

  const openPresidentModal = () => {
    dispatch(
      openModal({
        modalId: "athlete",
        athleteData: {
          image: "/test6.png",
          name: "Сергей Игоревич Соловейчик",
          placeOfBirth: "Президент Федерации Дзюдо России",
          awards: [
            `Родился 24 сентября 1965 года в г.\u00A0Москве в\u00A0семье инженеров.`,
            `В 1982 году окончил Среднюю общеобразовательную школу №\u00A0140 г.\u00A0Москвы.`,
            `В 1986 году получил звание Мастера спорта Советского Союза.`,
            `В 1986-1987 гг. — спортивный корреспондент в газете «Советский спорт».`,
            `В 1988 году окончил Московский Государственный Университет, диплом журналиста.`,
            `1990-1999 гг. — тренер-преподаватель СДЮШОР по\u00A0единоборству, ГОУ «Московское городское физкультурно-спортивное объединение».`,
            `1998-2000 гг. — Президент Федерации дзюдо Москвы.`,
            `2000-2007 гг. — Вице-президент Европейского союза дзюдо.`,
            `В 2006 году окончил программу «MBA-Финансы» в\u00A0Финансовой Академии при Правительстве Российской Федерации.`,
            `С 2007 по 2022 год — Президент Европейского союза дзюдо, вице-президент Международной федерации дзюдо.`,
            `В 2012, 2016 и 2020 годах был единогласно переизбран на\u00A0пост президента на\u00A0очередном заседании Конгресса ЕСД.`,
            `Женат, трое детей.`,
            `С детства и до сих пор занимается дзюдо.`,
          ],
          presidentAwards: [
            `Победитель Всероссийского конкурса «Спортивная солидарность» (за укрепление международных спортивных отношений) — 10 декабря 2020 г.`,
            `Государственная награда РФ — медаль ордена «За заслуги перед Отечеством» II степени — 06 августа 2021 г.`,
          ],
        },
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
            openAthleteModal()
          }}
          styleVariant="2"
        >
          Открыть модалку из зала славы
        </RootButton>
        <div
          style={{
            width: "100%",
            maxWidth: 327,
            aspectRatio: "1 / 1",
            position: "relative",
          }}
          className={s["img-wrap"]}
        >
          <Image
            fill
            src={"/test5.png"}
            alt="медалист"
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          ></Image>
        </div>
        <RootButton
          buttonPosition="left"
          onClick={() => {
            openPresidentModal()
          }}
          styleVariant="2"
        >
          Открыть модалку c президентом Федерации
        </RootButton>
        <div
          style={{
            width: "100%",
            maxWidth: 327,
            aspectRatio: "1 / 1",
            position: "relative",
          }}
          className={s["img-wrap"]}
        >
          <Image
            fill
            src={"/test6.png"}
            alt="медалист"
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          ></Image>
        </div>
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
