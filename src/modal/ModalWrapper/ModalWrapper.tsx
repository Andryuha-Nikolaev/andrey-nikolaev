"use client"

import React from "react"
import classNames from "classnames"
import s from "./ModalWrapper.module.scss"
import CloseIcon from "@/ui/icons/CloseIcon/CloseIcon"
import { closeModal } from "@/redux/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import type { ModalConfig } from "@/redux/features/modalSlice"
import DefaultModal from "../DefaultModal/DefaultModal"
import NotificationModal from "../NotificationModal/NotificationModal"
import AthleteModal from "../AthleteModal/AthleteModal"
import useScrollLock from "@/hooks/useScrollLock/useScrollLock"

const modalComponents: Record<string, React.FC<ModalConfig>> = {
  default: DefaultModal,
  notification: NotificationModal,
  athlete: AthleteModal,
}

const ModalWrapper = () => {
  const dispatch = useAppDispatch()
  const { isOpen, config } = useAppSelector((state) => state.modal)
  const { modalId, notClickableOverlay, hiddenCloseBtn } = config

  const handleClose = () => {
    dispatch(closeModal())
  }

  useScrollLock(isOpen)

  const ModalComponent = modalComponents[modalId!] || null

  const { isTablet } = useAppSelector((state) => state.site)

  return (
    <div
      onClick={() => {
        if (!notClickableOverlay) {
          handleClose()
        }
      }}
      className={classNames(s["overlay"], isOpen && s["open"])}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={classNames(s["modal"], isOpen && s["open"])}
      >
        {!hiddenCloseBtn && (
          <button
            aria-label="close modal"
            onClick={handleClose}
            className={classNames(s["close-btn"])}
          >
            <CloseIcon
              color={
                !isTablet
                  ? "#fff"
                  : modalId === "notification"
                    ? "#000"
                    : "#fff"
              }
              strokeColor={
                modalId === "notification" ? "transparent" : "#b2b6b9"
              }
              form="round"
            />
          </button>
        )}
        {ModalComponent && <ModalComponent {...config} />}
      </div>
    </div>
  )
}

export default ModalWrapper
