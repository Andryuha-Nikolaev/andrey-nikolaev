import React from "react"
import s from "./MainBannerBlock.module.scss"

import MainBannerSlider from "./MainBannerSlider/MainBannerSlider"
import Container from "@/common/MainContainer/MainContainer"
import { banners } from "@/data/banners"

async function MainBannerBlock() {
  return (
    <section className={s["block"]}>
      <Container>
        <MainBannerSlider banners={banners}></MainBannerSlider>
      </Container>
    </section>
  )
}

export default MainBannerBlock
