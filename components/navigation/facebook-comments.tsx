"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Settings } from "@/lib/meta"

interface FacebookCommentsProps {
  numPosts?: number
  width?: string
}

export default function FacebookComments({
  numPosts = 5,
  width = "",
}: FacebookCommentsProps) {
  const pathname = usePathname()
  const fullUrl = `${Settings.metadataBase}${pathname}`

  useEffect(() => {
    // Parse Facebook XFBML when component mounts or pathname changes
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }, [pathname])

  return (
    <div className="mt-8 pt-8 border-t border-border fb-comments-wrapper">
      <div
        className="fb-comments"
        data-href={fullUrl}
        data-width={width}
        data-numposts={numPosts}
      />
    </div>
  )
}

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void
      }
    }
  }
}