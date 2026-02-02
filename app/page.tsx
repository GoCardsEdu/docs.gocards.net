import { redirect } from 'next/navigation'
import { PageRoutes } from '@/lib/pageroutes'

export default function Home() {
  redirect(`/en${PageRoutes[0].href}`)
}
