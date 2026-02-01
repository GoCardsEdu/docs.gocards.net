'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'lib/transition'
import { Fragment } from 'react'
import { LuHouse } from 'react-icons/lu'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { getLanguageFromPath } from '@/lib/i18n'
import { getPageRoutesByLanguage } from '@/lib/pageroutes.language'
import { toTitleCase } from '@/utils/toTitleCase'

export function ArticleBreadcrumb({ paths }: { paths: string[] }) {
  const pathname = usePathname()
  const lang = getLanguageFromPath(pathname)
  const pageRoutes = getPageRoutesByLanguage(lang)
  return (
    <div className="pb-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                title="Documentation Home"
                aria-label="Documentation Home"
                href={`/${lang}${pageRoutes[0].href}`}
              >
                <LuHouse className="h-4" />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {paths.length > 2 ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    title={toTitleCase(paths[0])}
                    aria-label={toTitleCase(paths[0])}
                    href={`/${lang}/${paths[0]}`}
                  >
                    {toTitleCase(paths[0])}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis className="h-1" />
              </BreadcrumbItem>

              {paths.slice(-1).map((path, i) => {
                const index = paths.length - 1 + i
                const href = `/${lang}/${paths.slice(0, index + 1).join('/')}`

                return (
                  <Fragment key={path}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {index < paths.length - 1 ? (
                        <BreadcrumbLink asChild>
                          <Link
                            title={toTitleCase(path)}
                            aria-label={toTitleCase(path)}
                            href={href}
                          >
                            {toTitleCase(path)}
                          </Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="b">{toTitleCase(path)}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </Fragment>
                )
              })}
            </>
          ) : (
            paths.map((path, index) => {
              const href = `/en/${paths.slice(0, index + 1).join('/')}`

              return (
                <Fragment key={path}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {index < paths.length - 1 ? (
                      <BreadcrumbLink asChild>
                        <Link title={toTitleCase(path)} aria-label={toTitleCase(path)} href={href}>
                          {toTitleCase(path)}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="b">{toTitleCase(path)}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </Fragment>
              )
            })
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
