import type { MetadataRoute } from 'next'
import { getPageRoutesByLanguage } from '@/lib/pageroutes.language'
import { Settings } from '@/types/settings'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const enRoutes = getPageRoutesByLanguage('en').map((page) => ({
    url: `${Settings.metadataBase}/en${page.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const plRoutes = getPageRoutesByLanguage('pl').map((page) => ({
    url: `${Settings.metadataBase}/pl${page.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...enRoutes, ...plRoutes]
}
