import { useEffect, useState } from "react"
import { setIsBlockedScroll } from "@/redux/features/siteSlice"
import { useAppDispatch } from "@/redux/hooks"
import { usePathname } from "next/navigation"

const useScrollLock = (activeState: boolean) => {
  const dispatch = useAppDispatch()
  const [openCount, setOpenCount] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const pathname = usePathname()

  const bodyFixed = () => {
    dispatch(setIsBlockedScroll(true))
    const customScrollbarThumb = document.querySelector(
      "#custom-scrollbar-thumb"
    ) as HTMLElement | null

    if (customScrollbarThumb) {
      customScrollbarThumb.style.visibility = "hidden"
    }

    document.body.style.position = "fixed"
    document.body.style.top = `-${scrollY}px`
  }

  const bodyStatic = () => {
    dispatch(setIsBlockedScroll(false))
    const customScrollbarThumb = document.querySelector(
      "#custom-scrollbar-thumb"
    ) as HTMLElement | null

    if (customScrollbarThumb) {
      customScrollbarThumb.style.visibility = "visible"
    }
    const scrollY = document.body.style.top
    document.body.style.position = ""
    document.body.style.top = ""

    window.scrollTo(0, parseInt(scrollY || "0") * -1)
  }

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    document.body.style.position = ""
    document.body.style.top = ""
  }, [pathname])

  useEffect(() => {
    if (activeState) {
      setOpenCount(1)
    }
  }, [activeState])

  useEffect(() => {
    if (activeState) {
      bodyFixed()
    } else if (openCount > 0) {
      setOpenCount(0)
      bodyStatic()
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeState])
}

export default useScrollLock
