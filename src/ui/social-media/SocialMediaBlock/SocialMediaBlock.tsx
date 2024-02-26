import React from "react"
import s from "./SocialMediaBlock.module.scss"
import TgIcon from "../icons/TgIcon"
import VkIcon from "../icons/VkIcon"
import OkIcon from "../icons/OkIcon"
import RutubeIcon from "../icons/RutubeIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import classNames from "classnames"

const socialMediaArr = [
  { name: "tg", link: "", icon: TgIcon },
  { name: "vk", link: "", icon: VkIcon },
  { name: "ok", link: "", icon: OkIcon },
  {
    name: "rutube",
    link: "",
    icon: RutubeIcon,
  },
  {
    name: "youtube",
    link: "",
    icon: YoutubeIcon,
  },
]

const SocialMediaBlock = ({ variant }: { variant: "header" | "footer" }) => {
  return (
    <div className={classNames(s["wrap"], s[variant])}>
      {socialMediaArr.map((item) => {
        const Icon = item.icon

        return (
          <a
            aria-label={item.name}
            className={classNames(s["link"], s[variant])}
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            key={`social-media-${item.name}`}
          >
            <div
              style={{
                display: "flex",
                scale: variant === "header" ? 1.3 : 1.1,
              }}
            >
              {Icon && <Icon />}
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default SocialMediaBlock
