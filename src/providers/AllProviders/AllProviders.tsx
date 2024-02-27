"use client"

import React, { Suspense } from "react"
import PrimeReactProviderWrapper from "../PrimeReactProviderWrapper/PrimeReactProviderWrapper"
import CalendarLocaleProvider from "../CalendarLocaleProvider/CalendarLocaleProvider"
import { Next13ProgressBar } from "next13-progressbar"
import ViewportSizeProvider from "../ViewportSizeProvider/ViewportSizeProvider"
import CustomScrollbarProvider from "../CustomScrollbarProvider/CustomScrollbarProvider"

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrimeReactProviderWrapper>
      <CustomScrollbarProvider />
      <CalendarLocaleProvider>
        <ViewportSizeProvider />
        <Suspense>
          <Next13ProgressBar
            height="4px"
            color="#f15860"
            options={{ showSpinner: true }}
            showOnShallow
          />
        </Suspense>
        {children}
      </CalendarLocaleProvider>
    </PrimeReactProviderWrapper>
  )
}

export default AllProviders
