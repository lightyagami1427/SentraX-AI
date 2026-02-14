"use client"

import dynamic from "next/dynamic"

const LandingPage = dynamic(() => import("@/components/landing-page"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-background" />
})

export default function Home() {
  return <LandingPage />
}
