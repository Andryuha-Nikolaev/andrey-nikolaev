const metaConstants = {
  title: "Заголовок страницы",
  description: "Описание страницы",
  metadataBase: new URL(process.env["NEXT_PUBLIC_BASE_URL"] ?? ""),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [`${process.env["NEXT_PUBLIC_BASE_URL"] ?? ""}/preview.png`],
    locale: "ru_RU",
  },
}

export default metaConstants
