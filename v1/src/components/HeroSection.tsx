import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    CheckCircle,
    ArrowRight,
    FileText,
    Zap,
    Shield,
    Play,
    Star,
} from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative hero-height flex items-center bg-gradient-to-br from-muted/30 via-background to-muted/30 overflow-hidden will-change-transform">
            {/* Optimized background decorations */}
            <div className="absolute inset-0 opacity-60">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Optimized badge */}
                    <br />
                    <br />
                    <div className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-8 animate-fade-in">
                        <Zap className="w-4 h-4 mr-2 text-primary" />

                        <span className="font-semibold">
                            AaLightning-Fast Document Automation
                        </span>
                        <span className="ml-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                            NEW
                        </span>
                    </div>

                    {/* Optimized main headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                        <span className="text-foreground">
                            Automate Documents &
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            E-Signatures
                        </span>
                        <br />
                        <span className="text-foreground text-4xl sm:text-5xl lg:text-6xl">
                            in Minutes
                        </span>
                    </h1>

                    {/* Optimized subheadline */}
                    <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in leading-relaxed">
                        MyTypist revolutionizes document workflows with{" "}
                        <span className="font-semibold text-primary">
                            AI-powered automation
                        </span>{" "}
                        and
                        <span className="font-semibold text-primary">
                            {" "}
                            seamless e-signatures
                        </span>
                        . Transform your business processes in minutes, not
                        hours.
                    </p>

                    {/* Optimized CTA section */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
                        <Link to="/signup">
                            <Button
                                size="lg"
                                className="px-10 py-6 text-lg font-semibold group"
                            >
                                Start Free Trial
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link to="/how-to-use">
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-10 py-6 text-lg font-semibold group"
                            >
                                <Play className="mr-2 h-5 w-5" />
                                Watch Demo
                            </Button>
                        </Link>
                    </div>

                    {/* Optimized trust indicators */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8 animate-fade-in">
                        <div className="flex items-center gap-6 text-sm lg:text-base text-muted-foreground">
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                <span className="font-medium">
                                    14-day free trial
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Shield className="w-5 h-5 text-green-500 mr-2" />
                                <span className="font-medium">
                                    SOC 2 Compliant
                                </span>
                            </div>
                            <div className="flex items-center">
                                <FileText className="w-5 h-5 text-green-500 mr-2" />
                                <span className="font-medium">
                                    No credit card required
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-yellow-400 fill-current"
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">
                                4.9/5 from 2,500+ users
                            </span>
                        </div>
                    </div>

                    {/* Customer logos */}
                    <div className="animate-fade-in">
                        <p className="text-sm text-muted-foreground mb-6 font-medium">
                            Trusted by leading companies worldwide
                        </p>
                        <div className="flex items-center justify-center gap-8 opacity-60">
                            <div className="px-4 py-2 bg-card rounded-lg shadow-sm">
                                <span className="font-bold text-muted-foreground">
                                    TechCorp
                                </span>
                            </div>
                            <div className="px-4 py-2 bg-card rounded-lg shadow-sm">
                                <span className="font-bold text-muted-foreground">
                                    InnovateLab
                                </span>
                            </div>
                            <div className="px-4 py-2 bg-card rounded-lg shadow-sm">
                                <span className="font-bold text-muted-foreground">
                                    GlobalTech
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optimized hero demo section */}
                <div className="mt-20 animate-fade-in">
                    <div className="bg-card rounded-3xl shadow-lg p-8 border">
                        <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-2xl flex items-center justify-center relative">
                            <div className="text-center">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                                        <FileText className="w-10 h-10 text-primary-foreground" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-foreground font-bold text-xl mb-2">
                                    Interactive Demo
                                </h3>
                                <p className="text-muted-foreground text-lg mb-4">
                                    See MyTypist in action
                                </p>
                                <Button>
                                    <Play className="mr-2 h-4 w-4" />
                                    Launch Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
