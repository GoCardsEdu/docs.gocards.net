import { PageRoutes } from '@/lib/pageroutes'

const pathIndexMap = new Map(PageRoutes.map((route, index) => [route.href, index]))

export function getPreviousNext(path: string) {
  const index = pathIndexMap.get(`/${path}`)

  if (index === undefined || index === -1) {
    return { prev: null, next: null }
  }

  const prev = index > 0 ? PageRoutes[index - 1] : null
  const next = index < PageRoutes.length - 1 ? PageRoutes[index + 1] : null

  return { prev, next }
}
