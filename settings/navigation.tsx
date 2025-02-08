import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Google Play",
    href: "https://play.google.com/store/apps/details?id=pl.gocards",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/GoCardsEdu/docs.gocards.net",
}
