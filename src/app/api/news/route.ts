import { categories } from "./../../../data/news"
import { news } from "@/data/news"

import { NextResponse, NextRequest } from "next/server"

import { parseDateApi } from "@/helpers/parceDateApi"

const topNews = news.filter((item) => item.type === "top")

const advertisingNews = news.filter((item) => item.type === "advertising")

const allNews = news.filter((item) => item.type !== "advertising")

const defaultNews = news.filter((item) => item.type === "default")

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const category = searchParams.get("category")
  const start = searchParams.get("start")
  const end = searchParams.get("end")
  const type = searchParams.get("type")
  const from = searchParams.get("from")
  const to = searchParams.get("to")
  const page = searchParams.get("page")
  const q = searchParams.get("q")

  let currentNews = allNews

  if (type) {
    if (type === "default") {
      currentNews = defaultNews
    }
    if (type === "top") {
      currentNews = topNews
    }
    if (type === "advertising") {
      currentNews = advertisingNews
    }
  }

  if (category) {
    if (category !== "all") {
      currentNews = currentNews.filter((item) => item.category === category)
    }
  }

  if (from && !to) {
    const startDate = parseDateApi(from)

    if (startDate) {
      currentNews = currentNews.filter((item) => {
        const newsDate = parseDateApi(item.date)
        return newsDate && newsDate >= startDate
      })
    }
  }

  if (!from && to) {
    const endDate = parseDateApi(to)

    if (endDate) {
      currentNews = currentNews.filter((item) => {
        const newsDate = parseDateApi(item.date)
        return newsDate && newsDate <= endDate
      })
    }
  }

  if (from && to) {
    const startDate = parseDateApi(from)
    const endDate = parseDateApi(to)

    if (startDate && endDate) {
      currentNews = currentNews.filter((item) => {
        const newsDate = parseDateApi(item.date)
        return newsDate && newsDate >= startDate && newsDate <= endDate
      })
    }
  }

  if (q) {
    if (q === "корова") {
      currentNews = []
    } else if (q === "много коров") {
      currentNews = currentNews.slice(1, 20)
    } else {
      currentNews = currentNews.slice(2, 5)
    }
  }

  const newsLength = currentNews.length

  if (start && end) {
    currentNews = currentNews.slice(+start - 1, +end)
  }

  if (page) {
    currentNews = currentNews.slice(+page * 6 - 6, +page * 6)
  }

  return NextResponse.json({
    news: currentNews,
    length: newsLength,
    categories: categories,
  })
}
