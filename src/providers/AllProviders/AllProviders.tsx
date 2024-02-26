"use client"

import React, { Suspense } from "react"
import PrimeReactProviderWrapper from "../PrimeReactProviderWrapper/PrimeReactProviderWrapper"
import CalendarLocaleProvider from "../CalendarLocaleProvider/CalendarLocaleProvider"
import { Next13ProgressBar } from "next13-progressbar"
import ViewportSizeProvider from "../ViewportSizeProvider/ViewportSizeProvider"

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrimeReactProviderWrapper>
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
