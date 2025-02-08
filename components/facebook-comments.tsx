"use client"

import { useTheme } from "next-themes"

const FB_APP_ID = "1325310982973103"

interface FacebookCommentsProps {
  url: string
  numPosts?: number
}

export function FacebookComments({ url, numPosts = 5 }: FacebookCommentsProps) {
  const { resolvedTheme } = useTheme()

  if (!resolvedTheme) return null

  const isDark = resolvedTheme === "dark"
  const iframeSrc = `https://www.facebook.com/plugins/comments.php?href=${encodeURIComponent(url)}&width=100%&numposts=${numPosts}&appId=${FB_APP_ID}`

  return (
    <div className="mt-8 w-full">
      <iframe
        src={iframeSrc}
        className="w-full"
        style={{
          border: "none",
          overflow: "hidden",
          filter: isDark ? "invert(1) hue-rotate(180deg)" : undefined,
        }}
      />
    </div>
  )
}
