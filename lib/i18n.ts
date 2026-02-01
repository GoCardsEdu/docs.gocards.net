export const SUPPORTED_LANGUAGES = ['en', 'pl'] as const
export type Language = typeof SUPPORTED_LANGUAGES[number]

export function getLanguageFromPath(pathname: string): Language {
  const lang = pathname.split('/')[1]
  return SUPPORTED_LANGUAGES.includes(lang as Language)
    ? (lang as Language)
    : 'en'
}
