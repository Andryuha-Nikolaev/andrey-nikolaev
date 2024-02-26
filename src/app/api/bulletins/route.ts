import { bulletins } from "@/data/bulletin"

import { NextResponse, NextRequest } from "next/server"

import { parseDateApi } from "@/helpers/parceDateApi"

const reverseBul = bulletins.reverse()

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const start = searchParams.get("start")
  const end = searchParams.get("end")
  const from = searchParams.get("from")
  const to = searchParams.get("to")
  const page = searchParams.get("page")
  const q = searchParams.get("q")

  let currentData = reverseBul

  if (from && !to) {
    const startDate = parseDateApi(from)

    if (startDate) {
      currentData = currentData.filter((item) => {
        const newsDate = parseDateApi(item.date)
        return newsDate && newsDate >= startDate
      })
    }
  }

  if (!from && to) {
    const endDate = parseDateApi(to)

    if (endDate) {
      currentData = currentData.filter((item) => {
        const newsDate = parseDateApi(item.date)
        return newsDate && newsDate <= endDate
      })
    }
  }

  if (from && to) {
    const startDate = parseDateApi(from)
    const endDate = parseDateApi(to)

    if (startDate && endDate) {
      currentData = currentData.filter((item) => {
        const newsDate = parseDateApi(item.date)
        return newsDate && newsDate >= startDate && newsDate <= endDate
      })
    }
  }

  if (q) {
    if (q === "корова") {
      currentData = []
    } else {
      currentData = currentData.slice(1, 4)
    }
  }

  const currentDataLength = currentData.length

  if (start && end) {
    currentData = currentData.slice(+start - 1, +end)
  }

  if (page) {
    currentData = currentData.slice(+page * 6 - 6, +page * 6)
  }

  return NextResponse.json({
    bulletins: currentData,
    length: currentDataLength,
  })
}
