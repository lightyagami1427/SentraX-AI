import { cn } from "@/lib/utils"

interface StatsCardProps {
    label: string
    value: string
    subtext?: string
    trend?: "up" | "down" | "neutral"
    className?: string
}

export function StatsCard({ label, value, subtext, trend, className }: StatsCardProps) {
    return (
        <div className={cn("rounded-xl border border-border/50 bg-card p-6 shadow-sm", className)}>
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-foreground">{value}</span>
                {trend && (
                    <span className={cn(
                        "text-xs font-medium px-2 py-0.5 rounded-full",
                        trend === "up" ? "bg-green-500/10 text-green-500" :
                            trend === "down" ? "bg-red-500/10 text-red-500" :
                                "bg-gray-500/10 text-gray-500"
                    )}>
                        {trend === "up" ? "↑" : trend === "down" ? "↓" : "•"}
                    </span>
                )}
            </div>
            {subtext && <p className="mt-2 text-xs text-muted-foreground">{subtext}</p>}
        </div>
    )
}
