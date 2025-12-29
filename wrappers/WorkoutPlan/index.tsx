"use client"
import {
  Filter,
  Clock,
  TrendingUp,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Siderbar from "@/components/Siderbar";

const WorkoutPlanWrapper = () => {

  const exercises = [
    {
      name: "Bench Press",
      sets: 4,
      reps: "8-10",
      rest: "90s",
      category: "Chest",
      difficulty: "Intermediate",
    },
    {
      name: "Squats",
      sets: 4,
      reps: "10-12",
      rest: "120s",
      category: "Legs",
      difficulty: "Advanced",
    },
    {
      name: "Pull-ups",
      sets: 3,
      reps: "6-8",
      rest: "90s",
      category: "Back",
      difficulty: "Advanced",
    },
    {
      name: "Shoulder Press",
      sets: 3,
      reps: "10-12",
      rest: "60s",
      category: "Shoulders",
      difficulty: "Intermediate",
    },
    {
      name: "Deadlifts",
      sets: 4,
      reps: "6-8",
      rest: "120s",
      category: "Back",
      difficulty: "Advanced",
    },
    {
      name: "Bicep Curls",
      sets: 3,
      reps: "12-15",
      rest: "45s",
      category: "Arms",
      difficulty: "Beginner",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <Siderbar  />

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Workout Plan</h1>
            <p className="text-foreground/70">
              Today&apos;s strength training routine
            </p>
          </div>
          <Button variant="outline" className="glass">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Workout Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass rounded-2xl p-6 elevation">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">60 min</div>
                <div className="text-sm text-foreground/60">Duration</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 elevation">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">6 Exercises</div>
                <div className="text-sm text-foreground/60">Total</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 elevation">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">450 cal</div>
                <div className="text-sm text-foreground/60">Est. Burn</div>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 elevation hover:scale-105 transition-smooth group"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 glass rounded-full text-xs font-medium">
                  {exercise.category}
                </span>
                <span
                  className={`text-xs ${
                    exercise.difficulty === "Beginner"
                      ? "text-secondary"
                      : exercise.difficulty === "Intermediate"
                      ? "text-primary"
                      : "text-destructive"
                  }`}
                >
                  {exercise.difficulty}
                </span>
              </div>

              {/* Exercise Name */}
              <h3 className="text-xl font-bold mb-4">{exercise.name}</h3>

              {/* Stats */}
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 glass rounded-xl">
                  <span className="text-sm text-foreground/60">Sets</span>
                  <span className="font-bold">{exercise.sets}</span>
                </div>
                <div className="flex justify-between items-center p-3 glass rounded-xl">
                  <span className="text-sm text-foreground/60">Reps</span>
                  <span className="font-bold">{exercise.reps}</span>
                </div>
                <div className="flex justify-between items-center p-3 glass rounded-xl">
                  <span className="text-sm text-foreground/60">Rest</span>
                  <span className="font-bold">{exercise.rest}</span>
                </div>
              </div>

              {/* Start Button */}
              <Button className="w-full mt-4 gradient-primary text-primary-foreground glow-primary">
                Start Exercise
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WorkoutPlanWrapper;
