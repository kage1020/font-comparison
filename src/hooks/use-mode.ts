'use client'

import { createContext, useContext } from "react"

export type Mode = "web" | "editor"

type ModeContextType = {
  mode: Mode
  setMode: React.Dispatch<React.SetStateAction<Mode>>
}

export const ModeContext = createContext<ModeContextType>({
  mode: "web",
  setMode: () => "web"
})

export function useMode() {
  const context = useContext(ModeContext)
  if (!context) {
    throw new Error("useMode must be used within a ModeContext")
  }
  return context
}
