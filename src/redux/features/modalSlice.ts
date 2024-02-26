import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ModalConfig = {
  modalId?: "default" | "alt" | "notification" | "athlete"
  title?: string
  text?: string
  notClickableOverlay?: boolean
  hiddenCloseBtn?: boolean
  athleteData?: {
    image: string
    tourney?: {
      name: string
      place: string
    }
    name: string
    placeOfBirth: string
    olympicAwards?: {
      medal: string
      year: string
    }[]
    awards: string[]
    presidentAwards?: string[]
  }
}

type ModalState = {
  isOpen: boolean
  config: ModalConfig
}

const initialState = {
  isOpen: false,
  config: {
    modalId: undefined,
  },
} as ModalState

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalConfig>) => {
      state.config = action.payload
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer
