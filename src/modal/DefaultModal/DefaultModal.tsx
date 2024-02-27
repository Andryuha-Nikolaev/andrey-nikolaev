import React from "react"
import type { ModalConfig } from "@/redux/features/modalSlice"
import Link from "next/link"
import RootText from "@/ui/texts/RootText/RootText"

const DefaultModal = (props: ModalConfig) => {
  return (
    <div style={{ minHeight: 1000 }}>
      <RootText tag="h2">{props.title}</RootText>
      <RootText tag="p">{props.text}</RootText>
      DefaultModal <Link href={"/"}>home</Link>
      <Link href={"/ui/buttons"}>ui</Link>
    </div>
  )
}

export default DefaultModal
