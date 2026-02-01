import { Documents as DocumentsEN } from '@/settings/documents.en'
import { DocumentsPL } from '@/settings/documents.pl'
import type { Language } from '@/lib/i18n'
import type { Paths } from '@/lib/pageroutes'

interface Page {
  title: string
  href: string
}

function isRoute(node: Paths): node is Extract<Paths, { title: string; href: string }> {
  return 'title' in node && 'href' in node
}

function getAllLinks(node: Paths): Page[] {
  const pages: Page[] = []

  if (isRoute(node) && !node.noLink) {
    pages.push({ title: node.title, href: node.href })
  }

  if (isRoute(node) && node.items) {
    node.items.forEach((subNode) => {
      if (isRoute(subNode)) {
        const temp = { ...subNode, href: `${node.href}${subNode.href}` }
        pages.push(...getAllLinks(temp))
      }
    })
  }

  return pages
}

export function getRoutesByLanguage(lang: Language): Paths[] {
  return lang === 'pl' ? DocumentsPL : DocumentsEN
}

export function getPageRoutesByLanguage(lang: Language): Page[] {
  const routes = getRoutesByLanguage(lang)
  return routes.map((it) => getAllLinks(it)).flat()
}
