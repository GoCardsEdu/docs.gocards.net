import { notFound, redirect } from 'next/navigation'
import { ArticleBreadcrumb } from '@/components/article/breadcrumb'
import { Pagination } from '@/components/article/pagination'
import { TableOfContents } from '@/components/toc'
import { Separator } from '@/components/ui/separator'
import { Typography } from '@/components/ui/typography'
import { getDocument } from '@/lib/markdown'
import { getPageRoutesByLanguage } from '@/lib/pageroutes.language'
import { Settings } from '@/types/settings'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

export default async function Pages({ params }: PageProps) {
  const { slug = [] } = await params

  // Redirect root path to first page
  if (slug.length === 0) {
    const routes = getPageRoutesByLanguage('pl')
    const firstPage = routes.find((route) => route.href)
    if (firstPage) {
      redirect(`/pl${firstPage.href}`)
    }
  }

  const pathName = slug.join('/')
  const res = await getDocument(pathName, 'pl')

  if (!res) notFound()

  const { frontmatter, content, tocs } = res

  return (
    <div className="flex items-start gap-10">
      <section className="flex-3">
        <ArticleBreadcrumb paths={slug} />
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">{frontmatter.title}</h1>
          <p className="text-sm">{frontmatter.description}</p>
          <Separator />
        </div>
        <Typography>
          <section>{content}</section>
          <Pagination pathname={pathName} />
        </Typography>
      </section>
      <TableOfContents tocs={{ tocs }} pathName={pathName} frontmatter={frontmatter} />
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug = [] } = await params

  // Return null for root path (will redirect)
  if (slug.length === 0) return null

  const pathName = slug.join('/')
  const res = await getDocument(pathName, 'pl')

  if (!res) return null

  const { frontmatter, lastUpdated } = res

  return {
    title: `${frontmatter.title} - ${Settings.title}`,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    ...(lastUpdated && {
      lastModified: new Date(lastUpdated).toISOString(),
    }),
    openGraph: {
      title: `${frontmatter.title} - ${Settings.openGraph.title}`,
      description: frontmatter.description || Settings.openGraph.description,
      url: `${Settings.metadataBase}/en/${pathName}`,
      siteName: Settings.openGraph.siteName,
      type: 'article',
      images: Settings.openGraph.images.map((image) => ({
        ...image,
        url: `${Settings.metadataBase}${image.url}`,
      })),
    },
    twitter: {
      title: `${frontmatter.title} - ${Settings.twitter.title}`,
      description: frontmatter.description || Settings.twitter.description,
      card: Settings.twitter.card,
      site: Settings.twitter.site,
      images: Settings.twitter.images.map((image) => ({
        ...image,
        url: `${Settings.metadataBase}${image.url}`,
      })),
    },
    alternates: {
      canonical: `${Settings.metadataBase}/pl/${pathName}`,
    },
  }
}

export function generateStaticParams() {
  const pages = getPageRoutesByLanguage('pl')
    .filter((item) => item.href)
    .map((item) => ({
      slug: item.href.split('/').slice(1),
    }))

  // Include root path for redirect
  return [{ slug: [] }, ...pages]
}
