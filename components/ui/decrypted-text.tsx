"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DecryptedTextProps {
    text: string
    speed?: number
    maxIterations?: number
    sequential?: boolean
    revealDirection?: "start" | "end" | "center"
    useOriginalCharsOnly?: boolean
    characters?: string
    className?: string
    parentClassName?: string
    encryptedClassName?: string
    animateOn?: "view" | "hover"
    [key: string]: any
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = "start",
    useOriginalCharsOnly = false,
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+",
    className = "",
    parentClassName = "",
    encryptedClassName = "",
    animateOn = "hover",
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text)
    const [isHovering, setIsHovering] = useState(false)
    const [isScramble, setIsScramble] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const letters = characters.split("")

    useEffect(() => {
        let interval: NodeJS.Timeout
        let iteration = 0

        if (isScramble) {
            interval = setInterval(() => {
                setDisplayText((prevText) =>
                    text
                        .split("")
                        .map((letter, index) => {
                            if (letter === " ") return " "
                            if (index < iteration) {
                                return text[index]
                            }
                            return letters[Math.floor(Math.random() * letters.length)]
                        })
                        .join("")
                )

                if (iteration >= text.length) {
                    clearInterval(interval)
                    setIsScramble(false)
                }

                iteration += 1 / 3
            }, speed)
        } else {
            setDisplayText(text)
        }

        return () => clearInterval(interval)
    }, [isScramble, text, speed, letters])

    const handleMouseEnter = () => {
        if (animateOn === "hover") {
            setIsScramble(true)
        }
    }

    useEffect(() => {
        if (animateOn === "view") {
            setIsScramble(true)
        }
    }, [animateOn])

    const words = displayText.split(" ");

    return (
        <span
            className={cn("inline-block whitespace-pre-wrap", parentClassName)}
            onMouseEnter={handleMouseEnter}
            {...props}
        >
            <span className="sr-only">{text}</span>
            <span aria-hidden="true" className={cn(className, "inline-block")}>
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block whitespace-nowrap align-bottom mr-[0.25em]">
                        {word.split("").map((char, charIndex) => {
                            // Calculate global index for the character
                            const globalIndex = words.slice(0, wordIndex).join("").length + charIndex;
                            const isRevealed = char === text[globalIndex + wordIndex]; // Adjust for spaces

                            return (
                                <span key={charIndex} className={cn("inline-block text-center transition-all duration-75", {
                                    "w-[1ch] font-mono": !isRevealed, // Fixed width for scrambled
                                    "w-auto font-sans min-w-[0.5ch]": isRevealed,   // Natural width for revealed
                                    "text-primary": isScramble && !isRevealed && globalIndex > text.length * 0.5,
                                })}>
                                    {char}
                                </span>
                            )
                        })}
                    </span>
                ))}
            </span>
        </span>
    )
}
