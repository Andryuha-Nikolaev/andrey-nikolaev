"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import s from "./CustomScrollbar.module.scss"
import classNames from "classnames"

const CustomScrollbar = () => {
  const [scrollbarPosition, setScrollbarPosition] = useState(0)
  const [trackHeight, setTrackHeight] = useState("0")
  const [thumbHeight, setThumbHeight] = useState("0")
  const [visibleHeight, setVisibleHeight] = useState(0)

  const [isClicked, setIsClicked] = useState(false)
  const [mouseDownPosition, setMouseDownPosition] = useState(0)

  const [winScrollY, setWinScrollY] = useState(0)

  const pathname = usePathname()

  const handleScroll = () => {
    const hasVerticalScrollbar = document.body.scrollHeight > window.innerHeight
    if (!hasVerticalScrollbar) {
      setThumbHeight("0px")
      return
    }

    const scrollTop = window.scrollY
    const scrollHeight = document.body.scrollHeight

    const scrollbarPosition =
      (scrollTop / (scrollHeight - window.innerHeight)) * 100

    setScrollbarPosition(scrollbarPosition)

    setVisibleHeight(window.innerHeight)

    setTrackHeight(
      `${100 - (window.innerHeight / document.body.scrollHeight) * 100}vh`
    )
    setThumbHeight(
      `${(window.innerHeight / document.body.scrollHeight) * 100}vh`
    )
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    document.body.classList.add("body-user-select")
    setWinScrollY(window.scrollY)
    setMouseDownPosition(event.clientY)
    setIsClicked(true)
  }
  const handleMouseMove = (event: MouseEvent) => {
    if (isClicked) {
      //смещение ползунка в пикселях
      const scrollEvent = mouseDownPosition - event.clientY

      //смещение ползунка в процентах от высоты вьюпорта
      const scrollEv = scrollEvent / visibleHeight

      //смещение от высоты всей страницы
      const scrollEve = document.body.scrollHeight * scrollEv

      //смещение страницы по вертикали при движении ползунка
      const scrollEven =
        scrollEve < 0 ? winScrollY - scrollEve : winScrollY + scrollEve * -1

      window.scrollTo(0, scrollEven)
    }
  }

  const handleMouseLeave = () => {
    document.body.classList.remove("body-user-select")
    setIsClicked(false)
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [pathname])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseLeave)
    }
  }, [isClicked, pathname])

  useEffect(() => {
    const resizeObserverCallback = (entries: any) => {
      entries.forEach(() => {
        // Здесь вы можете обработать изменение размера элемента
        handleScroll()
      })
    }
    const resizeObserver = new ResizeObserver(resizeObserverCallback)
    // Начнем наблюдение за body
    resizeObserver.observe(document.body)
    // Очистка при размонтировании компонента
    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div className={s["custom-scrollbar"]}>
      <div
        className={s["custom-scrollbar-track"]}
        style={{
          height: trackHeight,
        }}
      >
        <div
          id="custom-scrollbar-thumb"
          onMouseDown={handleMouseDown}
          className={classNames(
            s["custom-scrollbar-thumb"],
            isClicked && s["clicked"]
          )}
          style={{
            top: `${scrollbarPosition}% `,
            height: thumbHeight,
          }}
        />
      </div>
    </div>
  )
}

export default CustomScrollbar
