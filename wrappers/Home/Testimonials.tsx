import { Star } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aditya Borkar",
      role: "Fitness Trainer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 4,
      text: "Great application.. you can do your workout at home with correct form and counting.. so there is less chance to get injury.. I suggest everyone to use this app.. Thank you",
    },
    {
      name: "Sahil Bhavsar",
      role: "Gym Trainee",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 5,
      text: "This app is amazing 😍 it's very beneficial for those who is not hiring trainer for workout at gym infact it's good 😊 and nice app",
    },
    {
      name: "Omkar",
      role: "Weight Lifter",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 5,
      text: "As an active gym person, sometime it gets very difficult to count our reps on a particular heavy set that too keeping a good form, this project will help to counter the issue. Also the body tracking feature makes it even more accurate to work on our form.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 gradient-secondary rounded-full blur-3xl opacity-10 animate-float" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 elevation mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Loved by{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            See what our community has to say about their FitAI experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 elevation hover:scale-105 transition-smooth"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
