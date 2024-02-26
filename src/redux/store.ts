import { configureStore } from "@reduxjs/toolkit"
import counter from "./features/counterSlice"
import modal from "./features/modalSlice"
import site from "./features/siteSlice"
import accodrion from "./features/accordionSlice"
import calendar from "./features/calendarSlice"
import bulletin from "./features/bulletinSlice"
import news from "./features/newsSlice"

export const store = configureStore({
  reducer: {
    counter,
    modal,
    site,
    accodrion,
    calendar,
    bulletin,
    news,
  },
  devTools: process.env.NEXT_PUBLIC_BUILD_MODE !== "PROD",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
