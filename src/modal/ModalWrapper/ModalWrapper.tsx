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
import SimpleBar from "simplebar-react"

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
        className={classNames(
          s["modal"],
          isOpen && s["open"],
          config.modalClassName && config.modalClassName
        )}
      >
        {!hiddenCloseBtn && (
          <button
            aria-label="close modal"
            onClick={handleClose}
            className={classNames(s["close-btn"])}
          >
            <CloseIcon color="#000" form="rect" />
          </button>
        )}
        <div
          className={classNames(
            s["content"],
            config.contentClassName && config.contentClassName
          )}
        >
          <SimpleBar className={s["scrollbar"]}>
            {ModalComponent && <ModalComponent {...config} />}
          </SimpleBar>
        </div>
      </div>
    </div>
  )
}

export default ModalWrapper
