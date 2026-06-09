import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Open-Facilitation-Library",
      Substack: "https://openfac.substack.com",
      Giveth: "https://giveth.io/project/open-facilitation-library",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        const order: Record<string, number> = {
          "Knowledge Base": 0,
          "Method Specs": 1,
          "Evaluation Frameworks": 2,
          "Seminars": 0,
          "Research": 1,
          "Teardowns": 2,
          "Glossary": 3,
          "AI Facilitation Approaches": 4,
          "Conversation Types": 5,
          "Protocols": 0,
        }
        const oa = order[a.displayName] ?? 99
        const ob = order[b.displayName] ?? 99
        if (oa !== ob) return oa - ob
        return a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        const order: Record<string, number> = {
          "Knowledge Base": 0,
          "Method Specs": 1,
          "Evaluation Frameworks": 2,
          "Seminars": 0,
          "Research": 1,
          "Teardowns": 2,
          "Glossary": 3,
          "AI Facilitation Approaches": 4,
          "Conversation Types": 5,
          "Protocols": 0,
        }
        const oa = order[a.displayName] ?? 99
        const ob = order[b.displayName] ?? 99
        if (oa !== ob) return oa - ob
        return a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
      },
    }),
  ],
  right: [],
}
