"use client"

import { Code2, Globe } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Mode, useMode } from "../../hooks/use-mode"

export function ModeTabs() {
  const { mode, setMode } = useMode()

  return (
    <Tabs
      defaultValue="web"
      value={mode}
      onValueChange={(v) => setMode(v as Mode)}
    >
      <TabsList>
        <TabsTrigger value="web">
          <Globe />
          Web Mode
        </TabsTrigger>
        <TabsTrigger value="editor">
          <Code2 />
          Editor Mode
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
