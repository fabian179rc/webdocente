"use client"

import { useEffect, useRef } from "react"

type YouTubeWindow = Window & {
  YT?: {
    Player: new (element: HTMLElement, options: Record<string, unknown>) => unknown
    PlayerState?: {
      ENDED?: number
    }
  }
  onYouTubeIframeAPIReady?: () => void
}

export function Exp4Vsl({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<unknown>(null)

  useEffect(() => {
    const win = window as YouTubeWindow

    if (!containerRef.current || typeof win === "undefined") return

    const loadPlayer = () => {
      if (!win.YT || !containerRef.current) return

      playerRef.current = new win.YT.Player(containerRef.current, {
        videoId: "4g-U9ixPzk0",
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          mute: 0,
          controls: 0,
          loop: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          showinfo: 0,
          fs: 0,
          iv_load_policy: 3,
          autohide: 1,
          disablekb: 1,
        },
        events: {
          onReady: (event: { target: { playVideo: () => void } }) => event.target.playVideo(),
          onStateChange: (event: { data: number }) => {
            if (event.data === win.YT?.PlayerState?.ENDED) {
              onComplete()
            }
          },
        },
      })
    }

    if (win.YT?.Player) {
      loadPlayer()
      return
    }

    const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]')
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://www.youtube.com/iframe_api"
      script.async = true
      document.body.appendChild(script)
    }

    win.onYouTubeIframeAPIReady = loadPlayer

    return () => {
      if (playerRef.current) {
        const player = playerRef.current as { destroy?: () => void }
        player.destroy?.()
        playerRef.current = null
      }
    }
  }, [onComplete])

  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-[#04070c] px-3 py-4 sm:px-5 sm:py-6">
      <div style={{ position: "relative", width: "432px", height: "769px", overflow: "hidden", backgroundColor: "#000" }}>
        <div
          ref={containerRef}
          style={{ position: "absolute", top: "-60px", left: 0, width: "432px", height: "900px", pointerEvents: "none" }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  )
}
