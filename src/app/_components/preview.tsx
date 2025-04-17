"use client"

import { PlusCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../../components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable"
import { Textarea } from "../../components/ui/textarea"
import { useMode } from "../../hooks/use-mode"
import { useOS } from "../../hooks/use-os"
import { useSampleText } from "../../hooks/use-sample-text"
import { getGoogleFonts, GoogleFont } from "../actions"

type FontPreviewProps = React.ComponentProps<typeof Textarea> & {
  fontFamily: string
}

// TODO: move ref to the Textarea component
// TODO: if unsupported text rendering, show a warning
function FontPreview({ fontFamily, style, ...props }: FontPreviewProps) {
  const { sampleText, setSampleText } = useSampleText()
  const ref = useRef<HTMLSpanElement>(null)
  const [computedFontFamily, setComputedFontFamily] = useState(fontFamily)

  useEffect(() => {
    if (!ref.current) return

    const computedStyle = window.getComputedStyle(ref.current)
    const computedFontFamily = computedStyle.fontFamily.replace(/"/g, "")
    setComputedFontFamily(computedFontFamily)
  }, [sampleText])

  return (
    <div>
      <div className="flex justify-between">
        <span ref={ref} style={style}>
          {fontFamily}
        </span>
        {fontFamily !== computedFontFamily && (
          <Badge>{computedFontFamily} is displayed now.</Badge>
        )}
      </div>
      <Textarea
        value={sampleText}
        onChange={(e) => setSampleText(e.target.value)}
        style={style}
        {...props}
      />
    </div>
  )
}

function createGoogleFontLink(font: GoogleFont) {
  const link = document.createElement("link")
  link.href = `https://fonts.googleapis.com/css2?family=${font.family.replaceAll(
    " ",
    "+"
  )}&display=swap`
  link.rel = "stylesheet"
  document.head.appendChild(link)
}

type PreviewProps = {
  defaultFonts: GoogleFont[]
}

export function Preview({ defaultFonts }: PreviewProps) {
  const [fonts, setFonts] = useState(defaultFonts)
  const [moreFonts, setMoreFonts] = useState<GoogleFont[]>([])
  const { mode } = useMode()
  const { os } = useOS()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const loadGoogleFonts = async () => {
      const googleFonts = await getGoogleFonts(query)
      setMoreFonts((prev) => {
        const newFonts = googleFonts.filter(
          (font) => ![...prev, ...fonts].some((f) => f.family === font.family)
        )
        return [...prev, ...newFonts]
      })
    }
    loadGoogleFonts()
  }, [query])

  return (
    <>
      {fonts.map((font) => (
        <ResizablePanelGroup
          direction="horizontal"
          className="space-x-4"
          key={font.family}
        >
          <ResizablePanel>
            <Card>
              {mode === "editor" && (
                <CardHeader>
                  <CardTitle className="break-keep whitespace-nowrap">
                    w/o Ligature
                  </CardTitle>
                </CardHeader>
              )}
              <CardContent>
                <FontPreview
                  className="min-w-72"
                  fontFamily={font.family}
                  style={{
                    fontFamily: font.family,
                    fontSmooth: os === "mac" ? "auto" : "none",
                    WebkitFontSmoothing: os === "mac" ? "auto" : "none",
                    MozOsxFontSmoothing: os === "mac" ? "auto" : "none",
                    textRendering:
                      os === "mac" ? "optimizeLegibility" : "optimizeSpeed",
                  }}
                />
              </CardContent>
            </Card>
          </ResizablePanel>
          {mode === "editor" && (
            <>
              <ResizableHandle
                withHandle
                onDelete={() =>
                  setFonts(fonts.filter((f) => f.family !== font.family))
                }
              />
              <ResizablePanel>
                <Card>
                  <CardHeader>
                    <CardTitle className="break-keep whitespace-nowrap">
                      w/ Ligature
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FontPreview
                      className="min-w-72"
                      fontFamily={font.family}
                      style={{
                        fontFamily: font.family,
                        fontSmooth: os === "mac" ? "auto" : "none",
                        WebkitFontSmoothing: os === "mac" ? "auto" : "none",
                        MozOsxFontSmoothing: os === "mac" ? "auto" : "none",
                        textRendering:
                          os === "mac" ? "optimizeLegibility" : "optimizeSpeed",
                        fontFeatureSettings: "'liga' 1, 'calt' 1",
                      }}
                    />
                  </CardContent>
                </Card>
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      ))}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full">
            <PlusCircle />
            <span>Add Another Font</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Command>
            <CommandInput
              placeholder="Search for a font..."
              value={query}
              onValueChange={setQuery}
            />
            <CommandList>
              <CommandEmpty>No fonts found.</CommandEmpty>
              <CommandGroup heading="Default Fonts">
                {defaultFonts
                  .filter((font) => !fonts.includes(font))
                  .map((font) => (
                    <CommandItem
                      key={font.family}
                      value={font.family}
                      onSelect={() => {
                        setFonts((prev) => [...prev, font])
                        setOpen(false)
                      }}
                    >
                      {font.family}
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Google Fonts">
                {moreFonts.map((font) => (
                  <CommandItem
                    key={font.family}
                    value={font.family}
                    onSelect={() => {
                      setFonts((prev) => [...prev, font])
                      createGoogleFontLink(font)
                      setOpen(false)
                    }}
                  >
                    {font.family}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  )
}
