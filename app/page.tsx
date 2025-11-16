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
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-cyan-300 text-lg">Loading...</p>
      </div>
    </div>
  )
}

