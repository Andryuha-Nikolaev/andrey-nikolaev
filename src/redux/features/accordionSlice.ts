import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type AccordionState = {
  headerActiveItem: string | null
  headerActiveItemHeight: number
}

const initialState = {
  headerActiveItem: null,
  headerActiveItemHeight: 0,
} as AccordionState

export const accordion = createSlice({
  name: "accordion",
  initialState,
  reducers: {
    setActiveItem: (state, action: PayloadAction<string | null>) => {
      state.headerActiveItem = action.payload
    },
    setActiveItemHeight: (state, action: PayloadAction<number>) => {
      state.headerActiveItemHeight = action.payload
    },
  },
})

export const { setActiveItem, setActiveItemHeight } = accordion.actions
export default accordion.reducer
