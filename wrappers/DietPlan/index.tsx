"use client"
import {
  Plus,
  Edit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Siderbar from "@/components/Siderbar";


const DietPlanWrapper = () => {


  const meals = [
    {
      type: "Breakfast",
      time: "8:00 AM",
      calories: 450,
      items: ["Oatmeal with berries", "Greek yogurt", "Green tea"],
    },
    {
      type: "Lunch",
      time: "1:00 PM",
      calories: 650,
      items: [
        "Grilled chicken breast",
        "Brown rice",
        "Mixed vegetables",
        "Avocado",
      ],
    },
    {
      type: "Snack",
      time: "4:00 PM",
      calories: 200,
      items: ["Protein shake", "Almonds"],
    },
    {
      type: "Dinner",
      time: "7:00 PM",
      calories: 600,
      items: ["Salmon fillet", "Sweet potato", "Steamed broccoli"],
    },
  ];

 

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
     <Siderbar />

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">AI Diet Plan</h1>
            <p className="text-foreground/70">
              Personalized nutrition for your goals
            </p>
          </div>
          <Button className="gradient-primary text-primary-foreground glow-primary">
            <Plus className="w-4 h-4 mr-2" />
            Generate New Plan
          </Button>
        </div>

        {/* Daily Summary */}
        <div className="glass rounded-2xl p-6 elevation mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">1,900</div>
              <div className="text-sm text-foreground/60">Total Calories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">150g</div>
              <div className="text-sm text-foreground/60">Protein</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">180g</div>
              <div className="text-sm text-foreground/60">Carbs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">65g</div>
              <div className="text-sm text-foreground/60">Fats</div>
            </div>
          </div>
        </div>

        {/* Meal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {meals.map((meal, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 elevation hover:scale-105 transition-smooth"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{meal.type}</h3>
                  <p className="text-sm text-foreground/60">{meal.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="font-bold text-primary">
                      {meal.calories}
                    </div>
                    <div className="text-xs text-foreground/60">calories</div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="hover:bg-primary/10"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                {meal.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 glass rounded-xl"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DietPlanWrapper;
