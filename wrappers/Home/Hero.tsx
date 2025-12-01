import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/hero-highlight";
import { ArrowRightIcon, Bot, Play } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center flex-col w-full h-[calc(100vh-180px)] gap-4 p-4">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="AI Fitness Technology"
          className="w-full h-full object-cover opacity-30 blur-xs"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      <Badge
        variant="outline"
        className="p-3 flex justify-center items-center gap-4 text-lg mx-4"
      >
        <Bot className="size-6! text-green-500" /> AI-Powered Fitness Revolution
      </Badge>
      <p className="flex flex-col justify-center items-center text-center text-3xl md:text-6xl gap-2 font-medium">
        Transform Your Body with <br />
        <Highlight className="text-black dark:text-white w-fit font-bold p-2">
          AI Intelligence
        </Highlight>
      </p>
      <p className="flex md:w-2/3 text-center text-2xl opacity-60">
        Real-time workout tracking, personalized meal plans, and AI-powered form
        correction—all in one seamless experience.
      </p>
      <div className="flex justify-center items-center w-full md:flex-row flex-col gap-8">
        <Button className="bg-linear-to-r from-cyan-500 to-blue-500 text-black dark:text-white text-lg">
          Start a Free Trail <ArrowRightIcon />
        </Button>
        <Button>
          Watch Demo <Play />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
        {[
          { value: "500+", label: "Users" },
          { value: "1k+", label: "Workouts Tracked" },
          { value: "98%", label: "Success Rate" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              {stat.value}
            </div>
            <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
