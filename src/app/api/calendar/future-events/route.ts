import { NextResponse } from "next/server"
import { parseDateApi } from "@/helpers/parceDateApi"

import { calendar } from "@/data/calendar"

const nowDate = new Date()
const futureEvents = calendar.filter((item) => {
  const eventDate = parseDateApi(item.date.endDate)
  return eventDate && eventDate >= nowDate
})

export async function GET() {
  return NextResponse.json(futureEvents)
}
