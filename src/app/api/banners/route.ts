import { NextResponse } from "next/server"
import { banners } from "@/data/banners"

export async function GET() {
  return NextResponse.json(banners)
}
