import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mystic Glade",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "shalinishygan.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Offside",
        body: "Overpass",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#E6F4F1",        // Soft minty pastel background
          lightgray: "#D0E7E2",    // Light muted seafoam for subtle elements
          gray: "#86A788",         // Muted sage green for secondary text
          darkgray: "#5E8B7E",     // Warm desaturated teal for contrast
          dark: "#4DA1A9",         // Rich blue-green for headers and important elements
          secondary: "#5FA69A",    // Vibrant sea green for buttons and links
          tertiary: "#3B8D81",     // Deep teal-green for subheadings
          highlight: "rgba(77, 161, 169, 0.2)",  // Transparent teal-green for background highlights
          textHighlight: "#5FA69A88", // Soft ocean teal text highlight
        },
        darkMode: {
          light: "#1E2D2B",        // Dark muted teal background
          lightgray: "#263B38",    // Soft desaturated green-gray for contrast
          gray: "#4A6B64",         // Muted deep sage for secondary elements
          darkgray: "#A3C2B8",     // Soft misty green for text
          dark: "#C4E0D8",         // Gentle pastel teal for main text
          secondary: "#7FA89A",    // Muted soft sage green for buttons and links
          tertiary: "#5B877C",     // Deep teal-sage for headings
          highlight: "rgba(70, 109, 83, 0.3)",  // Soft forest green for background highlights
          textHighlight: "#97B6A9", // Gentle light seafoam green for text highlights
        },                                                                      
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config