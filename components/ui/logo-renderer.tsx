"use client"

import { useState } from "react"
import { Bot } from "lucide-react"

export function LogoRenderer() {
    const [logoState, setLogoState] = useState<'trying-png' | 'trying-svg' | 'png' | 'svg' | 'fallback'>('trying-png')

    return (
        <div className="absolute inset-0 flex items-center justify-center p-1.5">
            {/* Try PNG first */}
            {(logoState === 'trying-png' || logoState === 'png') && (
                <img
                    src="/logo.png"
                    alt="Logo"
                    className={`h-full w-full object-contain ${logoState === 'png' ? 'block' : 'opacity-0'}`}
                    onLoad={() => setLogoState('png')}
                    onError={() => setLogoState('trying-svg')}
                />
            )}

            {/* Try SVG second */}
            {(logoState === 'trying-svg' || logoState === 'svg') && (
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className={`h-full w-full object-contain ${logoState === 'svg' ? 'block' : 'opacity-0'}`}
                    onLoad={() => setLogoState('svg')}
                    onError={() => setLogoState('fallback')}
                />
            )}

            {/* Fallback to Default Icon */}
            {logoState === 'fallback' && <Bot size={24} className="logo-icon icon-bloom z-10" />}
        </div>
    )
}
