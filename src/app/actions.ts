'use server'

export type GoogleFont = {
    family: string
    variants: string[]
    subsets: string[]
    version: string
    lastModified: string
    files: {
      [key: string]: string
    }
    category: string
    kind: string
    menu: string
    axes?: {
      tag: string,
      start: number,
      end: number,
    }[]
  }

type GoogleFontResponse = {
  kind: string
  items: GoogleFont[]
}

const defaultFonts: GoogleFontResponse["items"] = [
  {
      "family": "Inter",
      "variants": [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
        "100italic",
        "200italic",
        "300italic",
        "italic",
        "500italic",
        "600italic",
        "700italic",
        "800italic",
        "900italic"
      ],
      "subsets": [
        "cyrillic",
        "cyrillic-ext",
        "greek",
        "greek-ext",
        "latin",
        "latin-ext",
        "vietnamese"
      ],
      "version": "v18",
      "lastModified": "2024-09-04",
      "files": {
        "100": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf",
        "200": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyfMZhrib2Bg-4.ttf",
        "300": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf",
        "regular": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
        "500": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
        "600": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
        "700": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf",
        "800": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf",
        "900": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuBWYMZhrib2Bg-4.ttf",
        "100italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc2dphjZ-Ek-7MeA.ttf",
        "200italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcWdthjZ-Ek-7MeA.ttf",
        "300italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTch9thjZ-Ek-7MeA.ttf",
        "italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc2dthjZ-Ek-7MeA.ttf",
        "500italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc69thjZ-Ek-7MeA.ttf",
        "600italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcB9xhjZ-Ek-7MeA.ttf",
        "700italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcPtxhjZ-Ek-7MeA.ttf",
        "800italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcWdxhjZ-Ek-7MeA.ttf",
        "900italic": "https://fonts.gstatic.com/s/inter/v18/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTccNxhjZ-Ek-7MeA.ttf"
      },
      "category": "sans-serif",
      "kind": "webfonts#webfont",
      "menu": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZlhjQ.ttf"
    },
    {
      "family": "Roboto",
      "variants": [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
        "100italic",
        "200italic",
        "300italic",
        "italic",
        "500italic",
        "600italic",
        "700italic",
        "800italic",
        "900italic"
      ],
      "subsets": [
        "cyrillic",
        "cyrillic-ext",
        "greek",
        "greek-ext",
        "latin",
        "latin-ext",
        "math",
        "symbols",
        "vietnamese"
      ],
      "version": "v47",
      "lastModified": "2025-01-08",
      "files": {
        "100": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbGmTggvWl0Qn.ttf",
        "200": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZEbWmTggvWl0Qn.ttf",
        "300": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabWmTggvWl0Qn.ttf",
        "regular": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmTggvWl0Qn.ttf",
        "500": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bWmTggvWl0Qn.ttf",
        "600": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYaammTggvWl0Qn.ttf",
        "700": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjammTggvWl0Qn.ttf",
        "800": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZEammTggvWl0Qn.ttf",
        "900": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtammTggvWl0Qn.ttf",
        "100italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLoHRiA_0klQnx24.ttf",
        "200italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLgHQiA_0klQnx24.ttf",
        "300italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLt_QiA_0klQnx24.ttf",
        "italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLoHQiA_0klQnx24.ttf",
        "500italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLrPQiA_0klQnx24.ttf",
        "600italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLl_XiA_0klQnx24.ttf",
        "700italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLmbXiA_0klQnx24.ttf",
        "800italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLgHXiA_0klQnx24.ttf",
        "900italic": "https://fonts.gstatic.com/s/roboto/v47/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLijXiA_0klQnx24.ttf"
      },
      "category": "sans-serif",
      "kind": "webfonts#webfont",
      "menu": "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmSiA8.ttf"
    },
    {
      "family": "Poppins",
      "variants": [
        "100",
        "100italic",
        "200",
        "200italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "600",
        "600italic",
        "700",
        "700italic",
        "800",
        "800italic",
        "900",
        "900italic"
      ],
      "subsets": [
        "latin",
        "latin-ext"
      ],
      "version": "v22",
      "lastModified": "2024-12-04",
      "files": {
        "100": "https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrLPTed3FBGPaTSQ.ttf",
        "100italic": "https://fonts.gstatic.com/s/poppins/v22/pxiAyp8kv8JHgFVrJJLmE3tFOvODSVFF.ttf",
        "200": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLFj_V1tvFP-KUEg.ttf",
        "200italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmv1plEN2PQEhcqw.ttf",
        "300": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf",
        "300italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm21llEN2PQEhcqw.ttf",
        "regular": "https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf",
        "italic": "https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrJJLed3FBGPaTSQ.ttf",
        "500": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf",
        "500italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmg1hlEN2PQEhcqw.ttf",
        "600": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf",
        "600italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmr19lEN2PQEhcqw.ttf",
        "700": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf",
        "700italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmy15lEN2PQEhcqw.ttf",
        "800": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDD4V1tvFP-KUEg.ttf",
        "800italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm111lEN2PQEhcqw.ttf",
        "900": "https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLBT5V1tvFP-KUEg.ttf",
        "900italic": "https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm81xlEN2PQEhcqw.ttf"
      },
      "category": "sans-serif",
      "kind": "webfonts#webfont",
      "menu": "https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJHedw.ttf"
    },
    {
      "family": "Lato",
      "variants": [
        "100",
        "100italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "700",
        "700italic",
        "900",
        "900italic"
      ],
      "subsets": [
        "latin",
        "latin-ext"
      ],
      "version": "v24",
      "lastModified": "2024-09-04",
      "files": {
        "100": "https://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHh30wWyWrFCbw7A.ttf",
        "100italic": "https://fonts.gstatic.com/s/lato/v24/S6u-w4BMUTPHjxsIPy-vNiPg7MU0.ttf",
        "300": "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USew-FGC_p9dw.ttf",
        "300italic": "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI9w2PHA3s5dwt7w.ttf",
        "regular": "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHvxk6XweuBCY.ttf",
        "italic": "https://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHjxswWyWrFCbw7A.ttf",
        "700": "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf",
        "700italic": "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI5wqPHA3s5dwt7w.ttf",
        "900": "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh50Xew-FGC_p9dw.ttf",
        "900italic": "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI3wiPHA3s5dwt7w.ttf"
      },
      "category": "sans-serif",
      "kind": "webfonts#webfont",
      "menu": "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjxgwWw.ttf"
    },
    {
      "family": "Montserrat",
      "variants": [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
        "100italic",
        "200italic",
        "300italic",
        "italic",
        "500italic",
        "600italic",
        "700italic",
        "800italic",
        "900italic"
      ],
      "subsets": [
        "cyrillic",
        "cyrillic-ext",
        "latin",
        "latin-ext",
        "vietnamese"
      ],
      "version": "v29",
      "lastModified": "2024-11-07",
      "files": {
        "100": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Uw-Y3tcoqK5.ttf",
        "200": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr6Ew-Y3tcoqK5.ttf",
        "300": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Ew-Y3tcoqK5.ttf",
        "regular": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf",
        "500": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-Y3tcoqK5.ttf",
        "600": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf",
        "700": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-Y3tcoqK5.ttf",
        "800": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr70w-Y3tcoqK5.ttf",
        "900": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC70w-Y3tcoqK5.ttf",
        "100italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R8aX9-p7K5ILg.ttf",
        "200italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqyR9aX9-p7K5ILg.ttf",
        "300italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq_p9aX9-p7K5ILg.ttf",
        "italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R9aX9-p7K5ILg.ttf",
        "500italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq5Z9aX9-p7K5ILg.ttf",
        "600italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq3p6aX9-p7K5ILg.ttf",
        "700italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6aX9-p7K5ILg.ttf",
        "800italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqyR6aX9-p7K5ILg.ttf",
        "900italic": "https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqw16aX9-p7K5ILg.ttf"
      },
      "category": "sans-serif",
      "kind": "webfonts#webfont",
      "menu": "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw_aX8.ttf"
    },
    {
      "family": "Noto Sans",
      "variants": [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
        "100italic",
        "200italic",
        "300italic",
        "italic",
        "500italic",
        "600italic",
        "700italic",
        "800italic",
        "900italic"
      ],
      "subsets": [
        "cyrillic",
        "cyrillic-ext",
        "devanagari",
        "greek",
        "greek-ext",
        "latin",
        "latin-ext",
        "vietnamese"
      ],
      "version": "v39",
      "lastModified": "2025-03-11",
      "files": {
        "100": "https://fonts.gstatic.com/s/notosans/v39/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9At9d41P6zHtY.ttf",
        "200": "https://fonts.gstatic.com/s/notosans/v39/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyB9A99d41P6zHtY.ttf",
        "300": "https://fonts.gstatic.com/s/notosans/v39/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyCjA99d41P6zHtY.ttf",
        "regular": "https://fonts.gstatic.com/s/notosans/v39/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A99d41P6zHtY.ttf",
        "500": "https://fonts.gstatic.com/s/notosans/v39/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyDPA99d41P6zHtY.ttf",
        "600": "https://fonts.gstatic.com/s/notosans/v39/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAjBN9d41P6zHtY.ttf",
        "700": "https://fonts.gstatic.com/s/notosans/v39/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAaBN9d41P6zHtY.ttf",
        "800": "https://fonts.gstatic.com/s/notosans/v39/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyB9BN9d41P6zHtY.ttf",
        "900": "https://fonts.gstatic.com/s/notosans/v39/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyBUBN9d41P6zHtY.ttf",
        "100italic": "https://fonts.gstatic.com/s/notosans/v39/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QDcf6VfYyWtY1rI.ttf",
        "200italic": "https://fonts.gstatic.com/s/notosans/v39/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QLce6VfYyWtY1rI.ttf",
        "300italic": "https://fonts.gstatic.com/s/notosans/v39/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QGke6VfYyWtY1rI.ttf",
        "italic": "https://fonts.gstatic.com/s/notosans/v39/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QDce6VfYyWtY1rI.ttf",
        "500italic": "https://fonts.gstatic.com/s/notosans/v39/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QAUe6VfYyWtY1rI.ttf",
        "600italic": "https://fonts.gstatic.com/s/notosans/v39/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QOkZ6VfYyWtY1rI.ttf",
        "700italic": "https://fonts.gstatic.com/s/notosans/v39/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QNAZ6VfYyWtY1rI.ttf",
        "800italic": "https://fonts.gstatic.com/s/notosans/v39/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QLcZ6VfYyWtY1rI.ttf",
        "900italic": "https://fonts.gstatic.com/s/notosans/v39/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QJ4Z6VfYyWtY1rI.ttf"
      },
      "category": "sans-serif",
      "kind": "webfonts#webfont",
      "menu": "https://fonts.gstatic.com/s/notosans/v39/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9c6Vc.ttf"
    },
    {
      "family": "Noto Sans JP",
      "variants": [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900"
      ],
      "subsets": [
        "cyrillic",
        "japanese",
        "latin",
        "latin-ext",
        "vietnamese"
      ],
      "version": "v53",
      "lastModified": "2024-08-07",
      "files": {
        "100": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEi75vY0rw-oME.ttf",
        "200": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFJEj75vY0rw-oME.ttf",
        "300": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFE8j75vY0rw-oME.ttf",
        "regular": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75vY0rw-oME.ttf",
        "500": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFCMj75vY0rw-oME.ttf",
        "600": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFM8k75vY0rw-oME.ttf",
        "700": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFPYk75vY0rw-oME.ttf",
        "800": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFJEk75vY0rw-oME.ttf",
        "900": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFLgk75vY0rw-oME.ttf"
      },
      "category": "sans-serif",
      "kind": "webfonts#webfont",
      "menu": "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj35rS1g.ttf"
    }
]

export async function getGoogleFonts(query: string) {
  if (query === '') return defaultFonts

  const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.GOOGLE_API_KEY}&sort=popularity`, { cache: 'force-cache'})
  if (!response.ok) {
    throw new Error("Failed to fetch Google Fonts")
  }
  const data: GoogleFontResponse = await response.json()
  if (!data.items || data.items.length === 0) {
    throw new Error("No items found in Google Fonts response")
  }


  return data.items.filter((font) => {
    const fontName = font.family.replace(/_/g, " ").toLowerCase()
    return fontName.includes(query.toLowerCase())
  }).slice(0, 10)
}
