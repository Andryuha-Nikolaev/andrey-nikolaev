import { calendar } from "@/data/calendar"

import { NextResponse, NextRequest } from "next/server"

import { parseDateApi } from "@/helpers/parceDateApi"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const start = searchParams.get("start")
  const end = searchParams.get("end")
  const from = searchParams.get("from")
  const to = searchParams.get("to")

  let currentCalendar = calendar

  if (from && to) {
    const startDate = parseDateApi(from)
    const endDate = parseDateApi(to)

    if (startDate && endDate) {
      currentCalendar = currentCalendar.filter((item) => {
        const itemStart = parseDateApi(item.date.startDate)
        const itemEnd = parseDateApi(item.date.endDate)

        if (itemStart && itemEnd) {
          // Проверяем, перекрывается ли событие с заданным периодом
          return (
            (itemStart <= endDate && itemEnd >= startDate) ||
            (itemStart >= startDate && itemEnd <= endDate) ||
            (itemStart <= startDate && itemEnd >= endDate)
          )
        }

        return []
      })
    }
  }

  if (start && end) {
    currentCalendar = currentCalendar.slice(+start - 1, +end)
  }

  return NextResponse.json({ calendar: currentCalendar })
}
