"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to presentation page on load
    router.push("/presentation")
  }, [router])

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-4">
      <div className="text-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-3 sm:mb-4"></div>
        <p className="text-cyan-300 text-base sm:text-lg">Loading...</p>
      </div>
    </div>
  )
}

