import { news } from "@/data/news"
import { calendar } from "@/data/calendar"

import { NextResponse, NextRequest } from "next/server"

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const newsById = news.find((item) => item.id === +id)

  const similarNews = news
    .filter((item) => item.category === newsById?.category)
    .slice(0, 6)

  const event =
    (newsById?.eventId &&
      calendar.find((item) => item.id === newsById.eventId)) ??
    null

  return NextResponse.json({
    news: newsById,
    event: event,
    similar: similarNews,
  })
}
