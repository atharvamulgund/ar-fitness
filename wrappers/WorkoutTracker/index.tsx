"use client"
import {
  Camera,
  Play,
  Square,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Siderbar from "@/components/Siderbar";

const WorkoutTrackerWrapper = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [repCount, setRepCount] = useState(0);


  const toggleTracking = () => {
    setIsTracking(!isTracking);
    if (isTracking) {
      setRepCount(0);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <Siderbar />

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">AI Workout Tracker</h1>
          <p className="text-foreground/70">
            Real-time form analysis and rep counting
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Camera Feed */}
          <div className="lg:col-span-2">
            <div className="glass rounded-3xl overflow-hidden elevation">
              {/* Video Container */}
              <div className="relative aspect-video bg-linear-to-br from-background to-card flex items-center justify-center">
                {isTracking ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for camera feed */}
                    <div className="relative w-full h-full bg-linear-to-br from-primary/10 to-secondary/10">
                      {/* Skeleton overlay simulation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="w-16 h-16 mx-auto mb-4 text-primary animate-pulse" />
                          <p className="text-foreground/60">
                            Camera feed would display here
                          </p>
                          <p className="text-sm text-foreground/40 mt-2">
                            Mediapipe integration ready
                          </p>
                        </div>
                      </div>

                      {/* Rep Counter Overlay */}
                      <div className="absolute top-8 right-8 glass rounded-2xl p-6">
                        <div className="text-6xl font-bold linear-accent bg-clip-text text-transparent">
                          {repCount}
                        </div>
                        <div className="text-sm text-foreground/60 text-center">
                          Reps
                        </div>
                      </div>

                      {/* Form Analysis Indicator */}
                      <div className="absolute bottom-8 left-8 glass rounded-2xl px-6 py-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                        <span className="text-sm font-medium">
                          Form: Excellent
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-12">
                    <Camera className="w-20 h-20 mx-auto mb-6 text-foreground/40" />
                    <p className="text-xl font-medium mb-2">Ready to Track</p>
                    <p className="text-foreground/60">
                      Click start to begin workout tracking
                    </p>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="p-6 flex items-center justify-center gap-4">
                <Button
                  onClick={toggleTracking}
                  size="lg"
                  className={`${
                    isTracking
                      ? "bg-destructive hover:bg-destructive/90"
                      : "linear-primary glow-primary"
                  } text-white px-8`}
                >
                  {isTracking ? (
                    <>
                      <Square className="w-5 h-5 mr-2" />
                      Stop Tracking
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Start Tracking
                    </>
                  )}
                </Button>

                <Button
                  onClick={() => setRepCount(0)}
                  size="lg"
                  variant="outline"
                  className="glass"
                  disabled={!isTracking}
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="space-y-6">
            {/* Current Exercise */}
            <div className="glass rounded-2xl p-6 elevation">
              <h3 className="font-bold mb-4">Current Exercise</h3>
              <div className="text-2xl font-bold mb-2">Push-ups</div>
              <div className="text-sm text-foreground/60 mb-4">
                Chest & Triceps
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 glass rounded-xl">
                  <span className="text-sm">Target Reps</span>
                  <span className="font-bold">15</span>
                </div>
                <div className="flex justify-between items-center p-3 glass rounded-xl">
                  <span className="text-sm">Sets Remaining</span>
                  <span className="font-bold">3</span>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="glass rounded-2xl p-6 elevation">
              <h3 className="font-bold mb-4">Session Stats</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground/60">Duration</span>
                    <span className="font-bold">12:34</span>
                  </div>
                  <div className="h-2 glass rounded-full overflow-hidden">
                    <div className="h-full linear-primary w-3/4" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground/60">Calories</span>
                    <span className="font-bold">85 kcal</span>
                  </div>
                  <div className="h-2 glass rounded-full overflow-hidden">
                    <div className="h-full linear-secondary w-1/2" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground/60">
                      Form Score
                    </span>
                    <span className="font-bold text-secondary">95%</span>
                  </div>
                  <div className="h-2 glass rounded-full overflow-hidden">
                    <div className="h-full linear-accent w-11/12" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="glass rounded-2xl p-6 elevation">
              <h3 className="font-bold mb-4">AI Tips</h3>
              <div className="space-y-3">
                <div className="p-3 glass rounded-xl">
                  <div className="text-sm">✓ Keep your back straight</div>
                </div>
                <div className="p-3 glass rounded-xl">
                  <div className="text-sm">✓ Control your breathing</div>
                </div>
                <div className="p-3 glass rounded-xl">
                  <div className="text-sm">⚠ Lower yourself slower</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkoutTrackerWrapper;
