import React from "react"
import type { ModalConfig } from "@/redux/features/modalSlice"
import Link from "next/link"
import RootText from "@/ui/texts/RootText/RootText"
import ModalContentWrapper from "../ModalContentWrapper/ModalContentWrapper"

const DefaultModal = ({ modalId }: ModalConfig) => {
  return (
    <ModalContentWrapper>
      <RootText tag="h2">{modalId}</RootText>
      <RootText tag="p">{modalId}</RootText>
      DefaultModal <Link href={"/"}>home</Link>
      <Link href={"/ui/buttons"}>ui</Link>
    </ModalContentWrapper>
  )
}

export default DefaultModal
