"use client"

import React from "react"
import { PrimeReactProvider } from "primereact/api"
import CalendarWrapper from "@/providers/CalendarLocaleProvider/CalendarLocaleProvider"

const PrimeReactProviderWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <PrimeReactProvider>
      <CalendarWrapper>{children}</CalendarWrapper>
    </PrimeReactProvider>
  )
}

export default PrimeReactProviderWrapper
