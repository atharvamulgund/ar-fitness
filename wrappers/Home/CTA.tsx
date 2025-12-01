"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const CTA = () => {
  const {push: navigate} = useRouter();

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-accent rounded-full blur-3xl opacity-20 animate-float" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glass Card */}
          <div className="glass rounded-[3rem] p-12 lg:p-16 elevation">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-3xl mb-8 glow-primary">
              <Sparkles className="w-10 h-10 text-white/60" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Fitness?
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join thousands of users who are achieving their fitness goals with
              AI-powered guidance. Start your free trial today—no credit card
              required.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={() => navigate("/register")}
              className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth glow-primary text-xl px-12 py-8 group"
            >
              Get Started Free
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-smooth" />
            </Button>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-12 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">14 Days</div>
                <div className="text-sm text-foreground/60">Free Trial</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">No Card</div>
                <div className="text-sm text-foreground/60">Required</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Cancel</div>
                <div className="text-sm text-foreground/60">Anytime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
