'use client'

import { usePathname } from 'next/navigation'
import SubLink from '@/components/sidebar/sublink'
import { Separator } from '@/components/ui/separator'
import { getLanguageFromPath, SUPPORTED_LANGUAGES } from '@/lib/i18n'
import { getRoutesByLanguage } from '@/lib/pageroutes.language'

export function PageMenu({ isSheet = false }) {
  const pathname = usePathname()
  const lang = getLanguageFromPath(pathname)

  if (!SUPPORTED_LANGUAGES.some(l => pathname.startsWith(`/${l}`))) return null

  const routes = getRoutesByLanguage(lang)

  return (
    <div className="flex flex-col gap-3.5 pb-6">
      {routes.map((item, index) => {
        if ('spacer' in item) {
          return <Separator key={`spacer-${index}`} className="my-2" />
        }
        return (
          <div key={item.title + index}>
            {item.heading && <div className="mb-4 text-sm font-bold">{item.heading}</div>}
            <SubLink
              {...{
                ...item,
                href: `/${lang}${item.href}`,
                level: 0,
                isSheet,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
