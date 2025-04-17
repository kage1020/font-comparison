"use client"

import { useState } from "react"
import { Mode, ModeContext } from "../../hooks/use-mode"
import { OS, OSContext } from "../../hooks/use-os"
import { SampleTextContext } from "../../hooks/use-sample-text"
import { sampleTexts } from "../_const/sample-text"

type ProviderProps = {
  children: React.ReactNode
}

export function Provider({ children }: ProviderProps) {
  const [mode, setMode] = useState<Mode>("web")
  const [os, setOS] = useState<OS>("windows")
  const [sampleText, setSampleText] = useState<string>(
    sampleTexts.programming.ascii
  )

  return (
    <ModeContext value={{ mode, setMode }}>
      <OSContext value={{ os, setOS }}>
        <SampleTextContext value={{ sampleText, setSampleText }}>
          {children}
        </SampleTextContext>
      </OSContext>
    </ModeContext>
  )
}
