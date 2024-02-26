import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CounterState = {
  value: number
}

const initialState = {
  value: 0,
} as CounterState

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initializeCount: (state, action) => {
      state.value = action.payload
    },
    reset: () => initialState,
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
  },
})

export const {
  initializeCount,
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = counter.actions
export default counter.reducer
