"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { useSampleText } from "../../hooks/use-sample-text"
import { keys } from "../../lib/utils"
import { sampleTexts } from "../_const/sample-text"

export function SampleTextSelector() {
  const { setSampleText } = useSampleText()

  return (
    <Select
      onValueChange={(key) =>
        setSampleText(
          { ...sampleTexts.programming, ...sampleTexts.languages }[key]!
        )
      }
      defaultValue="ascii"
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a sample text" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Programming</SelectLabel>
          {keys(sampleTexts.programming).map((key) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {keys(sampleTexts.languages).map((key) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
