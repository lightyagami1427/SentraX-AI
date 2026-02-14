"use client"

import { cn } from "@/lib/utils"
import { Copy, Terminal } from "lucide-react"
import { useState } from "react"

interface TerminalViewProps {
    title?: string
    children: React.ReactNode
    className?: string
    showLineNumbers?: boolean
}

export function TerminalView({ title = "bash", children, className, showLineNumbers = false }: TerminalViewProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        // Basic text extraction for copy (this is simplified)
        const text = document.getElementById("terminal-content")?.innerText || ""
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={cn("overflow-hidden rounded-xl border border-border/50 bg-[#0c0c0c] shadow-2xl", className)}>
            <div className="flex items-center justify-between bg-[#1a1a1a] px-4 py-3 border-b border-border/20">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                        <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="ml-4 flex items-center gap-2 rounded-md bg-black/20 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        <Terminal size={12} />
                        <span className="font-mono">{title}</span>
                    </div>
                </div>
                <button
                    onClick={handleCopy}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    title="Copy content"
                >
                    {copied ? <span className="text-xs text-green-500 font-medium">Copied!</span> : <Copy size={14} />}
                </button>
            </div>
            <div className="p-4 font-mono text-sm overflow-x-auto custom-scrollbar">
                <div id="terminal-content" className="space-y-1">
                    {showLineNumbers ? (
                        <div className="flex gap-4">
                            <div className="flex flex-col text-right text-muted-foreground/30 select-none">
                                {/* This is a simple implementation, for robust usage we'd map children */}
                                {Array.isArray(children) ? children.map((_, i) => <span key={i}>{i + 1}</span>) : <span>1</span>}
                            </div>
                            <div className="space-y-1 flex-1">{children}</div>
                        </div>
                    ) : (
                        children
                    )}
                </div>
            </div>
        </div>
    )
}

export function TerminalLine({ children, prefix = "$", className }: { children: React.ReactNode, prefix?: string, className?: string }) {
    return (
        <div className={cn("flex gap-3 text-[#ededed]", className)}>
            <span className="select-none text-muted-foreground/50">{prefix}</span>
            <span>{children}</span>
        </div>
    )
}

export function TerminalOutput({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("text-muted-foreground pl-6 whitespace-pre-wrap", className)}>
            {children}
        </div>
    )
}
