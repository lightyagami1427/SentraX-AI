"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const HeroGlow = () => {
    const [lines, setLines] = useState<Array<{ id: number; left: string; height: string; duration: number; delay: number }>>([])

    useEffect(() => {
        // Generate random vertical lines
        const lineCount = 120
        const newLines = Array.from({ length: lineCount }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            height: `${Math.random() * 60 + 20}%`, // 20-80% height
            duration: Math.random() * 3 + 2, // 2-5s duration
            delay: Math.random() * 2,
        }))
        setLines(newLines)
    }, [])

    return (
        <div className="absolute inset-0 bg-[#050505] overflow-hidden -z-20">
            {/* Background Gradients for Depth */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-20" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-20" />

            {/* Vertical Glowing Lines */}
            {lines.map((line) => (
                <motion.div
                    key={line.id}
                    className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-30"
                    style={{
                        left: line.left,
                        height: line.height,
                    }}
                    animate={{
                        y: ["-100%", "100%"],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: line.duration,
                        repeat: Infinity,
                        delay: line.delay,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Static "Bar" elements to replicate the screenshot's 'matrix' feel */}
            <div className="absolute inset-0 flex justify-between px-12 md:px-24 pointer-events-none opacity-20">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-[1px] h-full bg-white/5" />
                ))}
            </div>
        </div>
    )
}
