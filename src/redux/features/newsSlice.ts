import { NewsItemType } from "./../../interfaces/news"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type NewsState = {
  newsData: null | NewsItemType[] | []
  // searchValue: string
  // currentPage: number
  // startDate: string | ""
  // endDate: string | ""
  newsLength: null | number
  isNewsLoading: boolean
  isError?: boolean
}

const initialState = {
  newsData: null,
  // searchValue: "",
  // currentPage: 3,
  // startDate: "",
  // endDate: "",
  newsLength: null,
  isNewsLoading: false,
  isError: false,
} as NewsState

export const news = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsData: (state, action: PayloadAction<NewsItemType[] | [] | null>) => {
      state.newsData = action.payload
    },
    // setSearchValue: (state, action: PayloadAction<string>) => {
    //   state.searchValue = action.payload
    // },
    // setCurrentPage: (state, action: PayloadAction<number>) => {
    //   state.currentPage = action.payload
    // },
    // setStartDate: (state, action: PayloadAction<string | "">) => {
    //   state.startDate = action.payload
    // },
    // setEndDate: (state, action: PayloadAction<string | "">) => {
    //   state.endDate = action.payload
    // },
    setNewsLength: (state, action: PayloadAction<number | null>) => {
      state.newsLength = action.payload
    },
    setIsNewsLoading: (state, action: PayloadAction<boolean>) => {
      state.isNewsLoading = action.payload
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload
    },
  },
})

export const {
  setNewsData,
  // setSearchValue,
  // setCurrentPage,
  // setStartDate,
  // setEndDate,
  setNewsLength,
  setIsNewsLoading,
  setIsError,
  // setIsLoading,
} = news.actions
export default news.reducer
