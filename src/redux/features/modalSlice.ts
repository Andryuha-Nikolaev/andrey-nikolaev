import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ModalConfig = {
  modalId: "default" | "notification" | null
  title?: string
  text?: string
  notClickableOverlay?: boolean
  hiddenCloseBtn?: boolean
  modalClassName?: string
  contentClassName?: string
}

type ModalState = {
  isOpen: boolean
  config: ModalConfig
}

const initialState = {
  isOpen: false,
  config: {
    modalId: null,
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
      state.config = { modalId: null }
    },
  },
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer
