import { Activity, Apple, BarChart3, HeartPulse } from "lucide-react";
import dietImage from "@/assets/diet-feature.jpg";
import workoutImage from "@/assets/workout-feature.jpg";
import analyticsImage from "@/assets/analytics-feature.jpg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const FeaturesSection = () => {
  const features = [
    {
      icon: Apple,
      title: "AI Diet Planning",
      description:
        "Personalized meal plans tailored to your goals, preferences, and nutritional needs.",
      image: dietImage,
      gradient: "gradient-primary",
    },
    {
      icon: Activity,
      title: "Smart Workout Tracking",
      description:
        "Real-time form analysis and rep counting using advanced computer vision.",
      image: workoutImage,
      gradient: "gradient-secondary",
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description:
        "Comprehensive insights and visualizations to track your fitness journey.",
      image: analyticsImage,
      gradient: "gradient-accent",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 gradient-secondary rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="p-2"><HeartPulse size={36} /> Powerful Features</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Cutting-edge AI technology meets intuitive design for the ultimate
            fitness experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-3xl overflow-hidden elevation hover:scale-105 transition-smooth group"
            >
              {/* Image or Gradient Background */}
              <div className="relative h-48 overflow-hidden">
                {feature.image ? (
                  <>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div
                      className={`absolute inset-0 ${feature.gradient} opacity-40`}
                    />
                  </>
                ) : (
                  <div className={`w-full h-full ${feature.gradient}`} />
                )}
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-14 h-14 glass rounded-2xl flex items-center justify-center glow-primary">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
