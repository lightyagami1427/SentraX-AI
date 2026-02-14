"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface FeatureCardProps {
    title: string
    description: string
    icon?: ReactNode
    className?: string
    children?: ReactNode
    delay?: number
}

export function FeatureCard({ title, description, icon, className, children, delay = 0 }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 md:p-8 transition-all hover:border-border hover:shadow-lg",
                className
            )}
        >
            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-0 rounded-lg bg-primary/10 text-primary">
                    {icon}
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-card-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>

                {children && <div className="mt-6 flex-1">{children}</div>}
            </div>

            {/* Background Gradient Effect */}
            <div className="absolute -right-20 -top-20 z-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="absolute -left-20 -bottom-20 z-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
        </motion.div>
    )
}
