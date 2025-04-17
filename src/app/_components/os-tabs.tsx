"use client"

import { Apple } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { OS, useOS } from "../../hooks/use-os"
import { AntDesignWindowsFilled } from "./icons"

export function OSTabs() {
  const { os, setOS } = useOS()

  return (
    <Tabs
      defaultValue="windows"
      value={os}
      onValueChange={(v) => setOS(v as OS)}
    >
      <TabsList>
        <TabsTrigger value="windows">
          <AntDesignWindowsFilled />
          Windows
        </TabsTrigger>
        <TabsTrigger value="mac">
          <Apple />
          Mac
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
