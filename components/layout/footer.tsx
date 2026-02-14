import Link from "next/link"
import { LogoRenderer } from "@/components/ui/logo-renderer"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 font-bold text-2xl tracking-tighter group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group-hover:scale-110 transition-transform overflow-hidden relative">
                                <LogoRenderer />
                            </div>
                            <span>SentraX-AI</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Understand the market before acting. AI-driven insights, not automated trading.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#reports" className="hover:text-primary transition-colors">Reports</Link></li>
                            <li><Link href="#performance" className="hover:text-primary transition-colors">Performance</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Connect</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="https://t.me/sentrax_ai_bot" target="_blank" className="hover:text-primary transition-colors">
                                    Telegram Bot
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} SentraX-AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-medium text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Systems Operational
                    </div>
                </div>
            </div>
        </footer>
    )
}
