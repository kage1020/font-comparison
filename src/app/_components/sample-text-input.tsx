"use client"

import { Textarea } from "../../components/ui/textarea"
import { useSampleText } from "../../hooks/use-sample-text"

export function SampleTextInput() {
  const { sampleText, setSampleText } = useSampleText()

  return (
    <Textarea
      value={sampleText}
      onChange={(e) => setSampleText(e.target.value)}
    />
  )
}
