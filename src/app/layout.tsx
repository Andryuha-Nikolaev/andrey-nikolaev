import type { Metadata, Viewport } from "next"

import { cookies } from "next/headers"
import metaConstants from "@/constants/meta/meta"
import anchorsConstants from "@/constants/anchors/anchors"
import { Open_Sans, Russo_One } from "next/font/google"
import { StoreProvider } from "@/redux/StoreProvider"

import "../style/globals.scss"
import "simplebar-react/dist/simplebar.min.css"
import "primereact/resources/primereact.min.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import Header from "@/components/Header/Header"
import ModalWrapper from "@/modal/ModalWrapper/ModalWrapper"
import RootStreak from "@/ui/other/RootStreak/RootStreak"
import classNames from "classnames"
import Anchor from "@/ui/other/Anchor/Anchor"
import AllProviders from "@/providers/AllProviders/AllProviders"
import CookiesBlock from "@/ui/cookies/CookiesBlock/CookiesBlock"

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  preload: true,
  variable: "--open-sans-font",
})

const russoOne = Russo_One({
  subsets: ["latin", "cyrillic"],
  preload: true,
  weight: ["400"],
  variable: "--russo-one-font",
})

export const metadata: Metadata = {
  ...metaConstants,
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const cookiesAgreement = cookieStore.get("cookies_agreement")

  return (
    <html lang="ru">
      <head>
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="256x256"
        />
      </head>
      <body className={classNames(openSans.variable, russoOne.variable)}>
        <StoreProvider>
          <AllProviders>
            <Anchor id={anchorsConstants.ANCHOR_TOP} />

            <Header />
            <RootStreak variant="fixed-header" />
            {children}
            <ModalWrapper />
            {!cookiesAgreement?.value && <CookiesBlock />}
          </AllProviders>
        </StoreProvider>
      </body>
    </html>
  )
}
