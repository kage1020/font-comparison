'use client'

import { createContext, useContext } from "react"

export type OS = "windows" | "mac"

type OSContextType = {
  os: OS
  setOS: React.Dispatch<React.SetStateAction<OS>>
}

export const OSContext = createContext<OSContextType>({
  os: "windows",
  setOS: () => "windows"
})

export function useOS() {
  const context = useContext(OSContext)
  if (!context) {
    throw new Error("useOS must be used within an OSContext")
  }
  return context
}
