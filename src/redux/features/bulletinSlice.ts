import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Bulletin } from "@/interfaces/bulletin"

type BulletinState = {
  bulletins: null | Bulletin[] | []
  searchValue: string
  currentPage: number
  startDate: string | ""
  endDate: string | ""
  length: null | number
  isLoading: boolean
  isError: boolean
}

const initialState = {
  bulletins: null,
  searchValue: "",
  currentPage: 3,
  startDate: "",
  endDate: "",
  length: null,
  isLoading: false,
  isError: false,
} as BulletinState

export const bulletin = createSlice({
  name: "bulletin",
  initialState,
  reducers: {
    setBulletins: (state, action: PayloadAction<Bulletin[] | []>) => {
      state.bulletins = action.payload
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setStartDate: (state, action: PayloadAction<string | "">) => {
      state.startDate = action.payload
    },
    setEndDate: (state, action: PayloadAction<string | "">) => {
      state.endDate = action.payload
    },
    setLength: (state, action: PayloadAction<number>) => {
      state.length = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload
    },
  },
})

export const {
  setBulletins,
  setSearchValue,
  setCurrentPage,
  setStartDate,
  setEndDate,
  setLength,
  setIsLoading,
  setIsError,
} = bulletin.actions
export default bulletin.reducer
