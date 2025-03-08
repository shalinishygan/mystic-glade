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
          light: "#f8f6f7",         // Light Background
          lightgray: "#e4dcd9",    // Light Grayish-Brown
          gray: "#b4a9a4",         // Medium Grayish-Brown
          darkgray: "#615651",      // Very Dark Grayish-Brown
          dark: "#332c29",           // Very Dark Taupe for Main Text
          secondary: "#a56353",    // Deep Dusty Rose - accents
          tertiary: "#c98f7d",     // Lighter - less important buttons/labels
          highlight: "rgba(165, 99, 83, 0.15)",  // Dusty Rose highlight
          textHighlight: "#87746788",  // Muted Brown text highlight
        },
        darkMode: {
          light: "#292523",        // Dark background
          lightgray: "#3d3735",    // Very Dark
          gray: "#695e59",         // Medium - Dark Brown/Taupe
          darkgray: "#a19590",      // Lighter for readability
          dark: "#d6c7c0",          // Very Light Brown
          secondary: "#d18873",    // Dusty Rose
          tertiary: "#e7a995",     // Very Light
          highlight: "rgba(209, 136, 115, 0.3)", // Dusty Rose Highlight
          textHighlight: "#56413a", // Muted Brown text highlight
        }
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