import { Breadcrumb } from "@marketsystems/nextjs13-appdir-breadcrumbs"
import Link from "next/link"

import s from "./style.module.scss"
import { useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const UiBreadCrumbs: React.FC<{ crumbs: Breadcrumb[] }> = ({ crumbs }) => {
  const pathname = usePathname()
  const { isMobile } = useAppSelector((state) => state.site)

  const [title, setTitle] = useState("")
  useEffect(() => {
    setTitle(document.title)
  }, [pathname])

  return (
    <nav aria-label="breadcrumbs">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className={s["breadcrumbs"]}
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link itemProp="item" href={"/"}>
            <span itemProp="name">Главная</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {crumbs.map(({ breadcrumb, href }, index) => {
          return (
            (breadcrumb || !isMobile) && (
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                key={href}
              >
                <Link itemProp="item" href={href}>
                  <span
                    dangerouslySetInnerHTML={{ __html: breadcrumb ?? title }}
                    className={s["name"]}
                    itemProp="name"
                  ></span>
                </Link>
                <meta itemProp="position" content={`${index + 2}`} />
              </li>
            )
          )
        })}
      </ol>
    </nav>
  )
}

export default UiBreadCrumbs
