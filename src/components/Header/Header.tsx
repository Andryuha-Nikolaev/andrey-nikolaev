"use client"

import React, { useState, useEffect, useRef } from "react"
import s from "./Header.module.scss"
import classNames from "classnames"
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation"
import Container from "@/common/MainContainer/MainContainer"
import { useAppSelector } from "@/redux/hooks"
import HeaderLogo from "./components/HeaderLogo/HeaderLogo"
import HeaderButtons from "./components/HeaderButtons/HeaderButtons"
import BurgerIcon from "@/ui/icons/BurgerIcon/BurgerIcon"
import useScrollLock from "@/hooks/useScrollLock/useScrollLock"
import { usePathname } from "next/navigation"
import SocialMediaBlock from "@/ui/social-media/SocialMediaBlock/SocialMediaBlock"
import { useSearchParams } from "next/navigation"

const Header = () => {
  const isFixedHeader = useAppSelector((state) => state.site.isFixedHeader)
  const { isTablet } = useAppSelector((state) => state.site)

  const [prevScrollpos, setPrevScrollpos] = useState(0)
  const [isShow, setIsShow] = useState(true)
  const [isShowPrev, setIsShowPrev] = useState(false)
  const [isOpenBurger, setIsOpenBurger] = useState(false)

  const { isBlockedScroll } = useAppSelector((state) => state.site)

  const pathname = usePathname()
  const preload = useSearchParams().get("preload")

  const closeBurger = () => {
    setIsOpenBurger(false)
  }

  useEffect(() => {
    closeBurger()
  }, [pathname, preload])

  useEffect(() => {
    if (!isTablet) {
      closeBurger()
    }
  }, [isTablet])

  useScrollLock(isOpenBurger)

  const toggleBurger = () => {
    setIsOpenBurger(!isOpenBurger)
  }

  const throttleInProgress = useRef<boolean | undefined>(undefined)

  const handleScroll = () => {
    if (isShowPrev) {
      setIsShowPrev(false)
      return
    }

    setPrevScrollpos(window.scrollY)
    const currentScrollPos = window.scrollY

    if (prevScrollpos > currentScrollPos) {
      if (document.body.scrollHeight - 50 > window.scrollY) {
        setIsShow(true)
      }
    } else {
      if (currentScrollPos > 50) {
        setIsShow(false)
      }
    }

    setPrevScrollpos(currentScrollPos)
  }

  const handleThrottleScroll = () => {
    if (throttleInProgress.current) {
      return
    }
    throttleInProgress.current = true
    setTimeout(() => {
      handleScroll()
      throttleInProgress.current = false
    }, 50)
  }

  useEffect(() => {
    if (isBlockedScroll) {
      setIsShowPrev(true)
      return
    }

    // setIsFirstLoad(false)

    window.addEventListener("scroll", handleThrottleScroll)

    return () => {
      window.removeEventListener("scroll", handleThrottleScroll)
    }
  }, [prevScrollpos, isShow, isShowPrev, isBlockedScroll])

  return (
    <header
      id="header"
      className={classNames(
        s["header"],
        isFixedHeader && s["fixed"],
        isShow && s["show"]
      )}
    >
      <Container>
        <div className={classNames(s["block"])}>
          <HeaderLogo />
          <div className={classNames(s["burger"], isOpenBurger && s["open"])}>
            <div className={classNames(s["content"])}>
              <div className={classNames(s["nav-block"])}>
                <HeaderNavigation />
              </div>
              <div className={classNames(s["social-block"])}>
                <SocialMediaBlock variant="header" />
              </div>
            </div>
          </div>
          <HeaderButtons>
            <button
              aria-label="burger button"
              onClick={toggleBurger}
              className={classNames(s["burger-btn"])}
            >
              <BurgerIcon isOpen={isOpenBurger} />
            </button>
          </HeaderButtons>
        </div>
      </Container>
    </header>
  )
}

export default Header
