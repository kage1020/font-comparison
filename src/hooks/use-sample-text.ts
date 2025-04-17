'use client'

import { createContext, useContext } from "react"
import { sampleTexts } from "../app/_const/sample-text"


type SampleTextContextType = {
  sampleText: string
  setSampleText: React.Dispatch<React.SetStateAction<string>>
}

export const SampleTextContext = createContext<SampleTextContextType>({
  sampleText: sampleTexts.programming.ascii,
  setSampleText: () => sampleTexts.programming.ascii,
})

export function useSampleText() {
  const context = useContext(SampleTextContext)
  if (!context) {
    throw new Error("useSampleText must be used within a SampleTextContext")
  }
  return context
}
