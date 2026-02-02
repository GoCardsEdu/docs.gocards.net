import { PageRoutes } from '@/lib/pageroutes'

export const Navigations = [
  {
    title: 'Docs',
    href: `/en/${PageRoutes[0].href}`,
  },
  {
    title: 'Get App',
    href: 'https://play.google.com/store/apps/details?id=pl.gocards&referrer=utm_source%3Ddocs.gocards.net%26utm_content%3Dgetapp',
    external: true,
  },
  {
    title: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=pl.gocards&referrer=utm_source%3Ddocs.gocards.net%26utm_content%3Dgoogleplay',
    external: true,
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100092886761908&utm_source=docs.gocards.net',
    external: true,
  },
  {
    title: 'Discord',
    href: 'https://discord.gg/RtbcQsWm',
    external: true,
  },
  {
    title: 'YouTube',
    href: 'https://www.youtube.com/@gocardsnet?utm_source=docs.gocards.net',
    external: true,
  }
]

export const GitHubLink = {
  href: 'https://github.com/GoCardsEdu/docs.gocards.net',
}
