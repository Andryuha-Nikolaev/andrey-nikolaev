import React, { useRef, useEffect } from "react"
import { ModalConfig } from "@/redux/features/modalSlice"
import RootText from "@/ui/texts/RootText/RootText"
import s from "./AthleteModal.module.scss"
import Image from "next/image"
import SimpleBar from "simplebar-react"
import classNames from "classnames"
import { useAppSelector } from "@/redux/hooks"

const AthleteModal = ({ athleteData }: ModalConfig) => {
  const simpleBarRef = useRef()
  const simpleBarRef2 = useRef()

  const { isOpen } = useAppSelector((state) => state.modal)

  const scrollToTop = () => {
    if (simpleBarRef.current) {
      // @ts-ignore
      simpleBarRef.current.getScrollElement().scrollTop = 0
    }
    if (simpleBarRef2.current) {
      // @ts-ignore
      simpleBarRef2.current.getScrollElement().scrollTop = 0
    }
  }

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        scrollToTop()
      }, 300)
    }
  }, [isOpen])

  return (
    <div className={classNames(s["wrap"])}>
      {/* @ts-ignore */}
      <SimpleBar ref={simpleBarRef} className={s["scrollbar"]}>
        <div className={s["content"]}>
          <div className={s["img-wrap"]}>
            <Image
              fill
              src={athleteData?.image ?? ""}
              alt="медалист"
              style={{
                objectFit: "cover",
                objectPosition: "top",
              }}
            ></Image>
          </div>
          <div className={s["info"]}>
            <div className={s["texts"]}>
              {athleteData?.tourney && (
                <div className={s["tourney-wrap"]}>
                  <RootText className={s["tourney"]} as="text-lg">
                    {athleteData?.tourney?.name}
                  </RootText>
                  <RootText className={s[""]} as="text-lg">
                    {athleteData?.tourney?.place}
                  </RootText>
                </div>
              )}

              <RootText className={s["name"]} fontVariant="russo" as="h6">
                {athleteData?.name}
              </RootText>
              <RootText className={s["city"]}>
                {athleteData?.placeOfBirth}
              </RootText>

              {athleteData?.olympicAwards?.length && (
                <div className={s["olimpic"]}>
                  {athleteData.olympicAwards.map((item, index) => {
                    const medal =
                      item.medal === "bronze"
                        ? "Бронзовая"
                        : item.medal === "silver"
                          ? "Серебряная"
                          : "Золотая"
                    return (
                      <RootText
                        className={classNames(s["olimpic-text"], s[item.medal])}
                        as="text-lg"
                        key={`olympic-awards-modal-${index}`}
                      >{`${medal} медаль Олимпийских игр (${item.year})`}</RootText>
                    )
                  })}
                </div>
              )}
            </div>
            {athleteData?.awards.length && (
              <div className={classNames(s["awards-wrap"], "athlete-modal")}>
                {/* @ts-ignore */}
                <SimpleBar ref={simpleBarRef2} className={s["awards-scroll"]}>
                  <div className={s["awards"]}>
                    {athleteData.awards.map((item, index) => (
                      <div className={s["award"]} key={`awards-modal-${index}`}>
                        <RootText className={s["award-text"]} as="text-lg">
                          {item}
                        </RootText>
                      </div>
                    ))}
                  </div>
                  {athleteData.presidentAwards && (
                    <div>
                      <RootText
                        className={s["president-awards-title"]}
                        as="text-lg"
                        fontWeightVariant="bold"
                      >
                        Награды
                      </RootText>
                      <div className={s["awards"]}>
                        {athleteData.presidentAwards.map((item, index) => (
                          <div
                            className={s["award"]}
                            key={`president-awards-modal-${index}`}
                          >
                            <RootText className={s["award-text"]} as="text-lg">
                              {item}
                            </RootText>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </SimpleBar>
              </div>
            )}
          </div>
        </div>
      </SimpleBar>
    </div>
  )
}

export default AthleteModal
