"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import type { Banner } from "@/interfaces/banners"
import s from "./MainBannerSlider.module.scss"
import Image from "next/image"
import classNames from "classnames"
import RootText from "@/ui/texts/RootText/RootText"
import RootButton from "@/ui/buttons/RootButton/RootButton"

const MainBannerSlider = ({ banners }: { banners: Banner[] }) => {
  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className={classNames(s["swiper"], "main-banner-slider")}
        grabCursor={true}
        spaceBetween={20}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        loop={true}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={`banner-slide-${index}`} className={s["slide"]}>
            <div className={s["wrap"]}>
              <div className={s["first-block"]}>
                <div className={s["text-block"]}>
                  <RootText colorVariant="dark-gray">{item.date}</RootText>
                  <RootText
                    className={s["title"]}
                    tag="h3"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></RootText>
                  <RootText
                    className={s["text"]}
                    as="text-lg"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></RootText>
                </div>
                <div className={s["btn-wrap"]}>
                  <RootButton
                    role="next-link"
                    buttonPosition="left"
                    link={item.btn_link}
                  >
                    {item.btn_text}
                  </RootButton>
                </div>
              </div>
              <div className={s["img-wrap"]}>
                <Image
                  priority={true}
                  src={item.img_link}
                  alt="Баннер"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  sizes="100vw"
                ></Image>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MainBannerSlider
