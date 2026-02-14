"use client"

import Link from "next/link"
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"
import {
    Zap,
    ShieldAlert,
    Check,
    BarChart3,
    Bot,
    Sparkles,
    X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TerminalView, TerminalLine, TerminalOutput } from "@/components/ui/terminal-view"
import { StatsCard } from "@/components/ui/stats-card"

// Redefined FeatureCard component
interface FeatureCardProps {
    title: string
    description: string
    icon: React.ReactNode
    className?: string
    children?: React.ReactNode
    delay?: number
    id?: string
}

function FeatureCard({ title, description, icon, className, children, delay = 0, id }: FeatureCardProps) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            onMouseMove={onMouseMove}
            className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-card p-10 transition-all hover:border-primary/20 ${className} scroll-mt-24`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            var(--color-primary-transparent),
                            transparent 80%
                        )
                    `,
                }}
            />
            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary icon-bloom">
                    {icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold tracking-tighter text-card-foreground">{title}</h3>
                <p className="text-muted-foreground/60 leading-relaxed font-light">{description}</p>
                {children && <div className="mt-8 flex-1">{children}</div>}
            </div>
        </motion.div>
    )
}


export default function LandingPage() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
        mouseX.set(clientX)
        mouseY.set(clientY)
    }

    return (
        <div
            id="main-wrapper"
            className="min-h-screen bg-background text-foreground selection:bg-primary/20 noise-bg overflow-x-hidden pt-16 selection:text-white"
            onMouseMove={handleMouseMove}
            suppressHydrationWarning
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:opacity-100 opacity-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(59, 130, 246, 0.05),
                            transparent 80%
                        )
                    `,
                }}
            />
            <Navbar />

            <main className="flex flex-col items-center">
                {/* Hero Section */}
                <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-32 flex justify-center overflow-hidden">
                    {/* Premium Designer Background System */}
                    <div className="absolute inset-0 pointer-events-none -z-10">
                        <div className="absolute inset-0 grid-pattern opacity-20" />
                        <motion.div
                            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 mesh-orb"
                            animate={{
                                x: [0, 50, 0],
                                y: [0, 30, 0],
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 mesh-orb"
                            animate={{
                                x: [0, -40, 0],
                                y: [0, -60, 0],
                            }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_90%)]" />
                    </div>

                    <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center z-10 relative">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <Badge variant="outline" className="mb-8 px-6 py-2 text-xs uppercase tracking-[0.3em] font-mono border-primary/20 bg-primary/5 text-primary/90 backdrop-blur-2xl shimmer-border border-white/5">
                                <Sparkles size={12} className="mr-3 animate-pulse text-primary" />
                                Neural Signal Intelligence v2.0
                            </Badge>
                        </motion.div>

                        <h1 className="text-4xl md:text-7xl lg:text-[80px] font-extrabold tracking-tightest max-w-5xl leading-[0.85] mb-4 overflow-hidden text-shine py-4 text-bloom">
                            {["Trade", "with", "the", "clarity", "of", "AI."].map((word, i) => (
                                <motion.span
                                    key={i}
                                    className="inline-block mr-[0.2em] whitespace-nowrap"
                                    initial={{ opacity: 0, y: 80 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1.2,
                                        delay: i * 0.08,
                                        ease: [0.23, 1, 0.32, 1]
                                    }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.p
                            className="mt-8 text-lg md:text-xl text-muted-foreground/60 max-w-2xl leading-relaxed font-light tracking-wide px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                        >
                            Deep technical analysis, risk intelligence, and automated market reporting delivered directly to your Telegram. <span className="text-foreground/40 italic">No noise, just signals.</span>
                        </motion.p>

                        <motion.div
                            className="mt-16 flex flex-col sm:flex-row gap-8 w-full justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 1, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <Button size="lg" className="h-16 px-12 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all ease-premium hover:scale-105 active:scale-95 shimmer-border overflow-hidden relative group" asChild>
                                <Link href="https://t.me/sentrax_ai_bot" target="_blank">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                                    <Zap className="mr-3 h-5 w-5 fill-current" />
                                    Launch SentraX Bot
                                </Link>
                            </Button>
                            <Button size="lg" variant="ghost" className="h-16 px-12 text-lg rounded-full border border-white/5 hover:bg-white/5 transition-all backdrop-blur-md ease-premium" asChild>
                                <Link href="#features">
                                    Explore Ecosystem
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="w-full py-24 border-y border-white/5 bg-black/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />
                    <div className="container px-4 md:px-6 mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                className="space-y-10 text-left"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="space-y-6">
                                    <Badge variant="outline" className="border-primary/20 text-primary/80 uppercase tracking-widest font-mono">Foundations</Badge>
                                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Clarity <br /> of Signal.</h2>
                                    <p className="text-muted-foreground/80 text-lg leading-relaxed font-light max-w-lg">
                                        SentraX-AI is an intelligence engine designed to provide institutional-grade insights to the individual trader. We analyze, you decide.
                                    </p>
                                </div>

                                <div className="grid gap-6">
                                    <div className="group flex items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all hover:border-primary/20">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-green-500 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                                            <Check size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold">Actionable Intelligence</h4>
                                            <p className="text-muted-foreground/70">Detailed signals with specific risk metrics.</p>
                                        </div>
                                    </div>
                                    <div className="group flex items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all hover:border-red-500/20">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                                            <X size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold">Zero Execution Risk</h4>
                                            <p className="text-muted-foreground/70">Safety by design. We never hold funds.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="relative lg:pl-10"
                                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10" />
                                <TerminalView title="Neural Signal Processor" className="w-full shadow-[0_45px_100px_-20px_rgba(0,0,0,0.8)] border-white/10" showLineNumbers>
                                    <TerminalLine prefix="[SYS]">SentraX Intelligence Engine Init...</TerminalLine>
                                    <TerminalLine prefix="[AI]">Optimizing 17 neural features...</TerminalLine>
                                    <TerminalLine prefix="[DB]">Regime: Bullish Accumulation...</TerminalLine>
                                    <TerminalLine prefix="[✓]" className="text-primary animate-pulse">SIGNAL DETECTED: BTC/USDT</TerminalLine>
                                    <TerminalOutput>
                                        {`✦ TYPE:         LONG (SPOT/PERP)
✦ CONFIDENCE:   94.2%
✦ TARGET 1:     $108,500
✦ STOP LOSS:     $97,400
✦ VALIDITY:     4H / 1D`}
                                    </TerminalOutput>
                                </TerminalView>
                            </motion.div>
                        </div>
                    </div>
                </section >

                {/* Features Grid ("Bento") */}
                < section id="features" className="w-full py-24 bg-background relative overflow-hidden" >
                    <div className="container px-4 md:px-6 mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                            <div className="max-w-2xl text-left">
                                <Badge variant="outline" className="mb-6 border-primary/30 text-primary uppercase tracking-widest font-mono">Ecosystem</Badge>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">The Standard <br /> for Data.</h2>
                            </div>
                            <p className="text-muted-foreground text-lg max-w-sm font-light tracking-wide">
                                Institutional tools democratized for the next generation of digital asset traders.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:auto-rows-[minmax(400px,auto)]">
                            {/* Main Feature: Reports */}
                            <FeatureCard
                                id="reports"
                                title="Automated Intelligence"
                                description="Comprehensive market digests and hourly pulses delivered with zero latency."
                                icon={<BarChart3 size={24} />}
                                className="md:col-span-8"
                                delay={0.1}
                            >
                                <div className="mt-12 flex flex-wrap gap-6">
                                    <StatsCard label="Daily Digest" value="08:00" subtext="UTC" className="bg-white/[0.03] border-white/5" />
                                    <StatsCard label="Pulse Sync" value="REALTIME" trend="up" className="bg-white/[0.03] border-white/5" />
                                    <div className="flex-1 min-w-[200px] flex items-center justify-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]">
                                        <span className="text-xs text-muted-foreground uppercase tracking-[0.4em] font-mono animate-pulse">Processing Stream...</span>
                                    </div>
                                </div>
                            </FeatureCard>

                            {/* Feature: AI Core */}
                            <FeatureCard
                                title="Neural Core"
                                description="17 concurrent data layers."
                                icon={<Bot size={24} />}
                                className="md:col-span-4"
                                delay={0.2}
                            >
                                <div className="mt-8 space-y-3">
                                    {['Momentum', 'Liquidity', 'Regime', 'Sentiment'].map((feature) => (
                                        <div key={feature} className="px-4 py-3 rounded-xl bg-white/[0.03] flex items-center justify-between border border-white/5 hover:bg-white/[0.06] transition-all">
                                            <span className="text-sm font-mono tracking-widest">{feature}</span>
                                            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)] animate-pulse" />
                                        </div>
                                    ))}
                                </div>
                            </FeatureCard>

                            {/* Feature: RiskGuard */}
                            <FeatureCard
                                title="Risk Intelligence"
                                description="Deep probability-weighted entry zones and liquidity sweeps."
                                icon={<ShieldAlert size={24} />}
                                className="md:col-span-4"
                                delay={0.3}
                            >
                                <div className="mt-8 space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                                            <span>Probability Edge</span>
                                            <span className="text-primary font-bold">88.4%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-primary"
                                                initial={{ width: 0 }}
                                                animate={{ width: "88.4%" }}
                                                transition={{ duration: 1.5, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                                        {['Entry Zone: $96.4k', 'Liquidity Sweep: -2.3%', 'Stop Cluster: $94.1k'].map((txt, i) => (
                                            <div key={i} className="flex items-center gap-3 text-[11px] font-mono">
                                                <div className="h-1 w-1 rounded-full bg-primary" />
                                                <span className="opacity-60">{txt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FeatureCard>

                            {/* Big Feature: Performance */}
                            <FeatureCard
                                id="performance"
                                title="Verified Backtesting"
                                description="Neural verification across 300+ institutional assets."
                                icon={<Check size={24} />}
                                className="md:col-span-8 overflow-hidden group"
                                delay={0.4}
                            >
                                <div className="relative mt-12 py-8 bg-white/[0.01] rounded-3xl border border-white/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex items-end gap-3 h-32 px-10 relative z-10">
                                        {[45, 75, 55, 90, 65, 100, 80, 110, 95, 88, 120, 105].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex-1 bg-primary/10 hover:bg-primary/40 transition-all border-t border-primary/40 rounded-t-sm relative group/bar"
                                                initial={{ height: 0 }}
                                                animate={{ height: `${(height / 120) * 100}%` }}
                                                transition={{ duration: 1, delay: 0.8 + (i * 0.04), ease: [0.23, 1, 0.32, 1] }}
                                            >
                                                <div className="absolute inset-x-0 -top-6 text-[8px] font-mono text-primary opacity-0 group-hover/bar:opacity-100 transition-opacity text-center">
                                                    +{height}%
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                    <div className="flex-1 flex justify-between items-center bg-white/[0.03] px-6 py-4 rounded-2xl border border-white/5 backdrop-blur-md">
                                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">Backtest Score</span>
                                        <span className="text-xl font-bold text-primary tracking-tighter shadow-primary/20 drop-shadow-glow">A+ Elite</span>
                                    </div>
                                    <div className="flex-1 flex justify-between items-center bg-white/[0.03] px-6 py-4 rounded-2xl border border-white/5 backdrop-blur-md">
                                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">Neural Confidence</span>
                                        <span className="text-xl font-bold text-foreground tracking-tighter">72.43%</span>
                                    </div>
                                </div>
                            </FeatureCard>
                        </div>
                    </div>
                </section >

                {/* Performance Roadmap */}
                < section id="roadmap" className="w-full py-24 bg-black/40 border-t border-white/5 relative" >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center text-center mb-16">
                            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Future Horizon.</h3>
                            <p className="text-muted-foreground text-lg font-light max-w-2xl tracking-wide uppercase font-mono text-xs spacing-[0.5em] opacity-60">
                                Constant Evolution. Institutional Scale.
                            </p>
                        </div>

                        <div className="relative max-w-4xl mx-auto">
                            {/* The Glass-Timeline Connector */}
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/10 to-transparent -translate-x-1/2 hidden md:block" />

                            <div className="space-y-12">
                                {[
                                    {
                                        phase: "Phase 01",
                                        title: "Liquidity Aggregation Web",
                                        status: "Live Beta",
                                        description: "Cross-chain DEX liquidity aggregation with MEV protection and slippage optimization.",
                                        metrics: ["0.2ms Sync Latency", "99.2% Node Uptime"],
                                        color: "text-green-500"
                                    },
                                    {
                                        phase: "Phase 02",
                                        title: "Whale Intelligence v2",
                                        status: "Under Development",
                                        description: "Bespoke cluster analysis for shadow-tracking high-net-worth wallet movements in realtime.",
                                        metrics: ["94.7% Signal Accuracy", "Shadow Mapping v4"],
                                        color: "text-primary"
                                    },
                                    {
                                        phase: "Phase 03",
                                        title: "SentraX Prime SDK",
                                        status: "Strategic Q3 2026",
                                        description: "Institutional-grade API for high-frequency data streams and automated market reporting.",
                                        metrics: ["1M+ Signals/Sec", "Zero-Trust Auth"],
                                        color: "text-blue-400"
                                    },
                                    {
                                        phase: "Phase 04",
                                        title: "Neural Architectures",
                                        status: "Strategic Horizon",
                                        description: "User-trained inference models for custom market regime detection and alpha discovery.",
                                        metrics: ["Unlimited Scale", "Proprietary Models"],
                                        color: "text-muted-foreground"
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 md:left-1/2 top-0 md:top-12 h-4 w-4 rounded-full bg-background border-2 border-primary shadow-[0_0_20px_rgba(59,130,246,0.5)] -translate-x-1/2 z-20 hidden md:block" />

                                        {/* Content Card */}
                                        <div className="w-full md:w-[45%] group">
                                            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all hover:bg-white/[0.04] relative overflow-hidden backdrop-blur-3xl group">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                                <div className="flex items-center justify-between mb-6">
                                                    <span className={`text-xs font-mono uppercase tracking-[0.3em] font-bold ${item.color} ${item.status === 'Live Beta' ? 'animate-pulse' : ''}`}>{item.status}</span>
                                                    <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">{item.phase}</span>
                                                </div>

                                                <h4 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                                                <p className="text-muted-foreground/80 text-sm leading-relaxed mb-8 font-light italic">
                                                    &ldquo;{item.description}&rdquo;
                                                </p>

                                                <div className="flex flex-wrap gap-3">
                                                    {item.metrics.map((metric, mi) => (
                                                        <div key={mi} className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[9px] font-mono tracking-wider opacity-60">
                                                            {metric}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Empty space for the other side on desktop */}
                                        <div className="hidden md:block md:w-[45%]" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section >

                {/* CTA Section */}
                < section className="w-full py-32 relative overflow-hidden flex justify-center" >
                    <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center"
                        >
                            <h2 className="text-7xl md:text-9xl font-black tracking-tightest mb-10 leading-[0.8]">
                                <span className="text-shine">Unleash AI.</span>
                            </h2>
                            <p className="text-2xl text-muted-foreground/80 max-w-2xl mx-auto mb-16 font-light tracking-wide">
                                Join the elite tier of traders leveraging neural signal intelligence.
                                Secure your edge in the most volatile markets.
                            </p>
                            <Button size="lg" className="h-20 px-16 text-xl rounded-full bg-white text-black hover:bg-white/90 shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all hover:scale-110 shimmer-border overflow-hidden" asChild>
                                <Link href="https://t.me/sentrax_ai_bot" target="_blank">
                                    <Zap className="mr-4 h-6 w-6 fill-current" />
                                    Launch Bot Instance
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-20 -z-20" />
                </section >

            </main >
            <Footer />
        </div >
    )
}
