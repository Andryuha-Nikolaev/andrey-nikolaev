"use client"

import React from "react"
import s from "./Footer.module.scss"
import classNames from "classnames"
import Container from "@/common/MainContainer/MainContainer"
import FooterLogo from "./components/FooterLogo/FooterLogo"
import SocialMediaBlock from "@/ui/social-media/SocialMediaBlock/SocialMediaBlock"
import RootText from "@/ui/texts/RootText/RootText"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import BottomBlock from "./components/BottomBlock/BottomBlock"

const Footer = () => {
  return (
    <footer className={classNames(s["footer"])}>
      <Container>
        <div className={classNames(s["wrap"])}>
          <div className={classNames(s["logo-block"])}>
            <FooterLogo />
          </div>

          <div className={classNames(s["content"])}>
            <div className={classNames(s["info"])}>
              <div className={classNames(s["info-content"])}>
                <RootText as="h6" fontVariant="russo">
                  Адрес
                </RootText>
                <RootButton link="" appearance="link" role="link">
                  г. Москва
                </RootButton>
              </div>
              <div className={classNames(s["info-content"])}>
                <RootText as="text-lg" colorVariant="dark-gray">
                  Email:{" "}
                  <RootButton
                    textDecoration="underline"
                    className={classNames(s["link"])}
                    link="mailto:mail@mail.ru"
                    appearance="link"
                    role="link"
                    linkTarget="_self"
                  >
                    mail@mail.ru
                  </RootButton>
                </RootText>
                <RootText as="text-lg" colorVariant="dark-gray">
                  Тел.:{" "}
                  <RootButton
                    textDecoration="underline"
                    className={classNames(s["link"])}
                    link="tel:+79999998888"
                    appearance="link"
                    role="link"
                    linkTarget="_self"
                  >
                    +7 (999) 999 88-88
                  </RootButton>
                </RootText>
              </div>
            </div>

            <div className={classNames(s["social-block"])}>
              <SocialMediaBlock variant="footer" />
            </div>
            <div className={classNames(s["copy"])}>
              <RootText>copy</RootText>
            </div>
          </div>
        </div>
        <div className={classNames(s["bottom-block"])}>
          <BottomBlock />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
