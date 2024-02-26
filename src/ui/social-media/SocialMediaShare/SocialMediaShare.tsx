"use client"

import React, { useEffect, useState } from "react"
import s from "./SocialMediaShare.module.scss"
import TgIcon from "../icons/TgIcon"
import VkIcon from "../icons/VkIcon"
import OkIcon from "../icons/OkIcon"
import WtIcon from "../icons/WhatsappIcon"
import classNames from "classnames"
import RootText from "@/ui/texts/RootText/RootText"
import { usePathname, useSearchParams } from "next/navigation"

const SocialMediaShare = () => {
  const pathname = usePathname()
  const search = useSearchParams()

  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => {
    setCurrentUrl(`${encodeURIComponent(window.location.href)}`)
  }, [pathname, search])

  const socialMediaArr = [
    {
      name: "tg",
      link: `https://telegram.me/share/url?url=${currentUrl}`,
      icon: TgIcon,
      active: true,
    },
    {
      name: "wt",
      link: `https://api.whatsapp.com/send/?text=${currentUrl}`,
      icon: WtIcon,
      active: true,
    },
    {
      name: "vk",
      link: `https://vk.com/share.php?url=${currentUrl}`,
      icon: VkIcon,
      active: true,
    },
    {
      name: "ok",
      link: `https://connect.ok.ru/offer?url=${currentUrl}`,
      icon: OkIcon,
      active: true,
    },
  ]

  return (
    <div className={classNames(s["block"])}>
      <RootText colorVariant="dark-gray">Поделиться</RootText>
      <div className={classNames(s["wrap"])}>
        {socialMediaArr.map((item) => {
          const Icon = item.icon
          if (item.active) {
            return (
              <a
                aria-label={item.name}
                className={classNames(s["link"])}
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                key={`social-media-${item.name}`}
              >
                <div
                  style={{
                    display: "flex",
                    scale: 1.2,
                  }}
                >
                  {Icon && <Icon />}
                </div>
              </a>
            )
          }
        })}
      </div>
    </div>
  )
}

export default SocialMediaShare
