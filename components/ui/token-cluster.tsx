"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const tokens = [
    { name: "BTC", path: "/tokens/btc.png", size: 120 },
    { name: "ETH", path: "/tokens/eth.png", size: 110 },
    { name: "SOL", path: "/tokens/sol.png", size: 105 },
    { name: "USDT", path: "/tokens/usdt.png", size: 95 },
    { name: "USDC", path: "/tokens/usdc.png", size: 90 },
]

export function TokenCluster() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-4xl h-[250px] mt-4 mb-4 flex items-center justify-center overflow-visible"
        >
            {tokens.map((token, i) => (
                <DraggableToken
                    key={token.name}
                    token={token}
                    index={i}
                    containerRef={containerRef}
                />
            ))}

            {/* Interaction Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] font-mono text-primary animate-pulse pointer-events-none"
            >
                — Drag to Interact —
            </motion.div>
        </div>
    )
}

function DraggableToken({ token, index, containerRef }: {
    token: typeof tokens[0],
    index: number,
    containerRef: React.RefObject<HTMLDivElement | null>
}) {
    // Initial positions (Scaled down for smaller Hero)
    const initialX = (index - 2) * 80
    const initialY = Math.sin(index) * 20

    return (
        <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            whileDrag={{ scale: 1.1, zIndex: 50 }}
            whileHover={{ scale: 1.05, cursor: "grab" }}
            initial={{
                opacity: 0,
                x: initialX,
                y: initialY + 100
            }}
            animate={{
                opacity: 1,
                x: initialX,
                y: [initialY, initialY - 20, initialY],
            }}
            transition={{
                opacity: { duration: 0.8, delay: index * 0.1 },
                x: { duration: 0.8, delay: index * 0.1 },
                y: {
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                }
            }}
            className="absolute flex items-center justify-center select-none"
            style={{
                zIndex: tokens.length - index,
            }}
        >
            <div className="relative group">
                {/* Glow behind token */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />

                {/* Real-time Status Pulse */}
                <div className="absolute -top-1 -right-1 z-50">
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                    </div>
                </div>

                <Image
                    src={token.path}
                    alt={token.name}
                    width={token.size}
                    height={token.size}
                    className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-none"
                    priority
                />

                {/* Tooltip on hover */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-white/10 rounded-full text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md pointer-events-none">
                    $ {token.name}
                </div>
            </div>
        </motion.div>
    )
}
