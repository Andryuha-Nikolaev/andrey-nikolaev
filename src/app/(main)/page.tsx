import type { Metadata } from "next"
import { pagesConstants } from "@/constants/pages/pages"
import MainBannerBlock from "@/components/MainBannerBlock/MainBannerBlock"

export const metadata: Metadata = {
  ...pagesConstants.pages.main.meta,
}

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <MainBannerBlock />
    </>
  )
}
