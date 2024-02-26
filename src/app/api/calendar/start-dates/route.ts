import { NextResponse } from "next/server"

import { calendar } from "@/data/calendar"

const startDateArray: string[] = calendar.map((item) => item.date.startDate)

export async function GET() {
  return NextResponse.json(startDateArray)
}
