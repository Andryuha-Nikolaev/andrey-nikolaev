"use client"

import { usePathname } from "next/navigation"
import UiBreadCrumbs from "./BreadCrumbs"
import { pagesConstants } from "@/constants/pages/pages"
import getProjectHost from "@/helpers/getProjectHost"

const getSubPage = (rootPage: string, pageNode: Record<string, any>) => {
  if (!pageNode.subpages) {
    return ""
  } else if (pageNode.subpages[rootPage]?.name) {
    return pageNode.subpages[rootPage]?.name
  }
}

const BreadCrumbs: React.FC = () => {
  const pathname = usePathname()
  const arrayPath = pathname.split("/")
  arrayPath.shift()

  const pageNameRecord = arrayPath.map((pathName, i, arr) => {
    const href = arrayPath.slice(0, i + 1).join("/")
    const a = i > 0 ? arr[i - 1] : arr[i]
    return {
      href: `${getProjectHost()}/${href}`,
      breadcrumb:
        pagesConstants.pages[pathName]?.name ??
        getSubPage(pathName, pagesConstants.pages[a]),
    }
  })

  return <UiBreadCrumbs crumbs={pageNameRecord} />
}

export default BreadCrumbs
