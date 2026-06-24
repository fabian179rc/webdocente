"use client"

export function Exp4Vsl({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-[#04070c] px-3 py-4 sm:px-5 sm:py-6">
      <div style={{ position: "relative", width: "432px", height: "769px", overflow: "hidden" }}>
        <iframe
          width="432"
          height="769"
          src="https://www.youtube.com/embed/4g-U9ixPzk0?autoplay=1&controls=0&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3"
          title="docente cansada"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ pointerEvents: "none" }}
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
