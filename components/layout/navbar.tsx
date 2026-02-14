"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogoRenderer } from "@/components/ui/logo-renderer"

export function Navbar() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault()
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
            const offset = 80 // Height of sticky navbar
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md" suppressHydrationWarning>
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group-hover:scale-110 transition-transform overflow-hidden relative">
                        <LogoRenderer />
                    </div>
                    <span>SentraX-AI</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="hover:text-foreground transition-colors underline-offset-4 hover:underline">Features</Link>
                    <Link href="#reports" onClick={(e) => handleSmoothScroll(e, 'reports')} className="hover:text-foreground transition-colors underline-offset-4 hover:underline">Reports</Link>
                    <Link href="#performance" onClick={(e) => handleSmoothScroll(e, 'performance')} className="hover:text-foreground transition-colors underline-offset-4 hover:underline">Performance</Link>
                    <Link href="#roadmap" onClick={(e) => handleSmoothScroll(e, 'roadmap')} className="hover:text-foreground transition-colors underline-offset-4 hover:underline">Roadmap</Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* Mobile menu trigger could go here */}
                    <Button asChild size="sm" className="hidden sm:inline-flex rounded-full">
                        <Link href="https://t.me/sentrax_ai_bot" target="_blank">
                            Get Started
                        </Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}
