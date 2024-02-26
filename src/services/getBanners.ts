import { Banner } from "@/interfaces/banners"
import { fetchData } from "./fetchData"

export const getAllBanners = async (): Promise<Banner[]> => {
  return fetchData<Banner[]>(`/banners`)
}
