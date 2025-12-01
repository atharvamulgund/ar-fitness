import { UserPlus, Target, Zap, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description:
        "Tell us about your fitness goals, experience level, and preferences.",
      number: "01",
    },
    {
      icon: Target,
      title: "Get Your Plan",
      description:
        "AI generates personalized workout and diet plans tailored to you.",
      number: "02",
    },
    {
      icon: Zap,
      title: "Start Training",
      description:
        "Follow your plan with real-time guidance and form correction.",
      number: "03",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description:
        "Monitor your improvements and adjust plans based on results.",
      number: "04",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 elevation mb-6">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Get started in minutes and transform your fitness journey with AI
            guidance.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 gradient-accent opacity-30" />
              )}

              {/* Card */}
              <div className="glass rounded-3xl p-8 elevation hover:scale-105 transition-smooth relative">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 gradient-accent rounded-2xl flex items-center justify-center font-bold text-lg glow-primary">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 glow-primary">
                  <step.icon className="w-8 h-8 text-white/40" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
