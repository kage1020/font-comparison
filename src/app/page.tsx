import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

import { Skeleton } from "../components/ui/skeleton"
import { ModeTabs } from "./_components/mode-tabs"
import { OSTabs } from "./_components/os-tabs"
import { Preview } from "./_components/preview"
import { SampleTextInput } from "./_components/sample-text-input"
import { SampleTextSelector } from "./_components/sample-text-selector"
import { getGoogleFonts } from "./actions"

export const runtime = "edge"

function PreviewFallback() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton />
      </CardContent>
    </Card>
  )
}

export default async function Home() {
  const defaultFonts = await getGoogleFonts("")

  return (
    <main className="bg-neutral-50">
      <div className="container max-w-6xl mx-auto p-4 space-y-4">
        <h1 className="text-3xl text-center font-bold">
          Web Font Comparison Tool
        </h1>
        <Card>
          <CardContent className="flex justify-around">
            <ModeTabs />
            <OSTabs />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sample Text</CardTitle>
          </CardHeader>
          <CardContent>
            <SampleTextSelector />
            <SampleTextInput />
          </CardContent>
        </Card>
        <Suspense fallback={<PreviewFallback />}>
          <Preview defaultFonts={defaultFonts} />
        </Suspense>
      </div>
    </main>
  )
}
