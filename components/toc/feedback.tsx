'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LuArrowUpRight } from 'react-icons/lu'
import { getLanguageFromPath } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { GitHubLink } from '@/settings/navigation'

interface SideBarEdit {
  title: string
  slug: string
}

export default function RightSideBar({ slug, title }: SideBarEdit) {
  const pathname = usePathname()
  const lang = getLanguageFromPath(pathname)

  const feedbackUrl = `${GitHubLink.href}/issues/new?title=Feedback for "${title}"&labels=feedback`
  const editUrl = `${GitHubLink.href}/edit/main/contents/${lang}/${slug}/index.mdx`

  return (
    <div className="flex flex-col gap-3 pl-2">
      <h3 className="text-sm font-semibold">Content</h3>
      <div className="flex flex-col gap-2">
        <Link
          href={feedbackUrl}
          title="Give Feedback"
          aria-label="Give Feedback"
          target="_blank"
          rel="noopener noreferrer"
          className={cn('flex items-center text-sm text-foreground')}
        >
          <LuArrowUpRight className="mr-1 inline-block h-4 w-4" />
          <span>Feedback</span>
        </Link>
        <Link
          href={editUrl}
          title="Edit this page"
          aria-label="Edit this page"
          target="_blank"
          rel="noopener noreferrer"
          className={cn('flex items-center text-sm text-foreground')}
        >
          <LuArrowUpRight className="mr-1 inline-block h-4 w-4" />
          <span>Edit page</span>
        </Link>
      </div>
    </div>
  )
}
