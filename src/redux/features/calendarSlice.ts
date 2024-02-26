import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { CalendarItem } from "@/interfaces/calendar"

type CalendarState = {
  calendarSelectedResult: CalendarItem[] | []
  showSelectedResult: boolean
}

const initialState = {
  calendarSelectedResult: [],
  showSelectedResult: false,
} as CalendarState

export const calendar = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setCalendarSelectedResult: (
      state,
      action: PayloadAction<CalendarItem[] | []>
    ) => {
      state.calendarSelectedResult = action.payload
    },
    setShowSelectedResult: (state, action: PayloadAction<boolean>) => {
      state.showSelectedResult = action.payload
    },
  },
})

export const { setCalendarSelectedResult, setShowSelectedResult } =
  calendar.actions
export default calendar.reducer
