"use client"
import React, { useState, useRef, useEffect } from "react"
import s from "./HeaderNavigationItem.module.scss"
import classNames from "classnames"
import Link from "next/link"
import { pagesConstants } from "@/constants/pages/pages"
import type { PageWithSubpages } from "@/constants/pages/pages"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  setActiveItem,
  setActiveItemHeight,
} from "@/redux/features/accordionSlice"

import { debounce } from "lodash"

const HeaderNavigationItem = ({
  item,
  pathname,
  isShowHeader,
  isTablet,
  isMobile,
}: {
  isMobile: boolean
  isTablet: boolean
  pathname: string
  item: PageWithSubpages
  isShowHeader: boolean
}) => {
  const [linksWrapHeight, setLinksWrapHeight] = useState(0)
  const linksWrapRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  const headerMenuActive = useAppSelector(
    (state) => state.accodrion.headerActiveItem
  )
  const headerActiveItemHeight = useAppSelector(
    (state) => state.accodrion.headerActiveItemHeight
  )

  const isActive = headerMenuActive?.includes(item.path)
  const isFact = pathname.includes(item.path)

  useEffect(() => {
    if (!isTablet) {
      dispatch(setActiveItem(null))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (isTablet && !isMobile) {
      dispatch(setActiveItem(pagesConstants.pages.federation.path))
    } else {
      dispatch(setActiveItem(null))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTablet, isMobile])

  useEffect(() => {
    if (!isShowHeader && !isTablet) {
      dispatch(setActiveItem(null))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowHeader, isTablet])

  const handleResize = () => {
    handleDebounceResize()
  }

  const handleDebounceResize = debounce(() => {
    setLinksWrapHeight(linksWrapRef.current?.scrollHeight ?? 0)
  }, 200)

  useEffect(() => {
    setLinksWrapHeight(linksWrapRef.current?.scrollHeight ?? 0)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <li
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ItemList"
      style={{ pointerEvents: !isShowHeader && !isTablet ? "none" : "all" }}
    >
      <div
        className={classNames(
          s["overlay"],
          isShowHeader && s["showed-header"],
          headerMenuActive && !isTablet && s["active"]
        )}
        style={{
          height: headerMenuActive && !isTablet ? headerActiveItemHeight : 0,
        }}
      ></div>
      <div
        tabIndex={0}
        onMouseMove={() => {
          if (!isTablet) {
            dispatch(setActiveItem(item.path))
            dispatch(setActiveItemHeight(linksWrapHeight))
          }
        }}
        className={classNames(
          s["item"],
          isActive && s["active"],
          isFact && s["fact"]
        )}
      >
        <div
          onClick={() => {
            if (isTablet) {
              if (isActive) {
                dispatch(setActiveItem(null))
              } else {
                dispatch(setActiveItem(item.path))
              }
            }
          }}
          className={classNames(s["button"])}
        >
          <p className={classNames(s["text"])}>{item.name}</p>
          <div className={classNames(s["arrow"])}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.2475 6.65751L10 12.7475L3.75253 6.65751C3.64091 6.54848 3.49107 6.48744 3.33503 6.48744C3.179 6.48744 3.02916 6.54848 2.91753 6.65751C2.86349 6.71046 2.82055 6.77367 2.79124 6.84343C2.76192 6.91318 2.74683 6.98809 2.74683 7.06376C2.74683 7.13942 2.76192 7.21433 2.79124 7.28409C2.82055 7.35384 2.86349 7.41705 2.91753 7.47001L9.56378 13.95C9.6805 14.0638 9.83704 14.1274 10 14.1274C10.163 14.1274 10.3196 14.0638 10.4363 13.95L17.0825 7.47126C17.137 7.41826 17.1802 7.3549 17.2098 7.28491C17.2393 7.21492 17.2545 7.13972 17.2545 7.06376C17.2545 6.98779 17.2393 6.91259 17.2098 6.8426C17.1802 6.77261 17.137 6.70925 17.0825 6.65626C16.9709 6.54723 16.8211 6.48619 16.665 6.48619C16.509 6.48619 16.3592 6.54723 16.2475 6.65626V6.65751Z"
                fill="#B2B6B9"
              />
            </svg>
          </div>
        </div>

        <div
          style={{ height: isActive ? linksWrapHeight : 0 }}
          className={classNames(s["links-wrap"], isActive && s["active"])}
        >
          <div className={classNames(s["links"])} ref={linksWrapRef}>
            <ul
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ItemList"
            >
              {item.subpages.map((link) => (
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/ItemList"
                  key={`header-nav-link${link.name}`}
                >
                  <meta itemProp="name" content={link.name} />
                  <Link itemProp="url" className={s["link"]} href={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <meta itemProp="name" content={item.name} />
    </li>
  )
}

export default HeaderNavigationItem
