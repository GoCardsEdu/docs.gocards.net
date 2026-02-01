'use client'

import { usePathname, useRouter } from 'next/navigation'
import * as React from 'react'
import { LuLanguages } from 'react-icons/lu'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getLanguageFromPath, SUPPORTED_LANGUAGES, type Language } from '@/lib/i18n'

const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  pl: 'Polski',
}

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLang = getLanguageFromPath(pathname)

  const switchLanguage = (newLang: Language) => {
    if (newLang === currentLang) return

    // Replace the language segment in the pathname
    const pathParts = pathname.split('/')
    pathParts[1] = newLang
    const newPath = pathParts.join('/')

    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9 cursor-pointer">
          <LuLanguages className="h-[1.1rem] w-[1.1rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {SUPPORTED_LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => switchLanguage(lang)}
            className={currentLang === lang ? 'font-bold' : ''}
          >
            {LANGUAGE_LABELS[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}