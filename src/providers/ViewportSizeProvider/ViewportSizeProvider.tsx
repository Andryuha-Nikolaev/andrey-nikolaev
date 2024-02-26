import { useEffect } from "react"
import breakpointsConstants from "@/constants/breakpoints/breakpoints"
import {
  setCurrentViewport,
  setIsTouchStart,
  type siteCurrentViewport,
} from "@/redux/features/siteSlice"

import { debounce } from "lodash"

import { useAppSelector, useAppDispatch } from "@/redux/hooks"

const ViewportSizeProvider = () => {
  const { SCREEN_MOBILE, SCREEN_TABLET, SCREEN_DESKTOP_SM, SCREEN_DESKTOP_MD } =
    breakpointsConstants

  const { currentViewport } = useAppSelector((state) => state.site)

  const dispatch = useAppDispatch()

  const handleIsTouchStart = debounce(() => {
    const isTouchStartState =
      "ontouchstart" in window || !!navigator.maxTouchPoints

    dispatch(setIsTouchStart(isTouchStartState))
  }, 200)

  const handleResize = () => {
    handleIsTouchStart()

    const windowWidth = window.innerWidth

    let newViewport: siteCurrentViewport
    if (windowWidth < SCREEN_MOBILE) {
      newViewport = "mobile_sm"
    } else if (windowWidth < SCREEN_TABLET) {
      newViewport = "mobile_md"
    } else if (windowWidth < SCREEN_DESKTOP_SM) {
      newViewport = "tablet"
    } else if (windowWidth < SCREEN_DESKTOP_MD) {
      newViewport = "desktop_sm"
    } else {
      newViewport = "desktop_md"
    }

    if (newViewport !== currentViewport) {
      dispatch(setCurrentViewport(newViewport))
    }
  }

  useEffect(() => {
    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [currentViewport])

  return null
}

export default ViewportSizeProvider
