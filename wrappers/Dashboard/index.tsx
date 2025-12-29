"use client";
import { Activity, Apple, Camera, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import Siderbar from "@/components/Siderbar";
import { useAuth } from "@/providers/AuthProvider";

const DashboardWrapper = () => {
  // @ts-expect-error, no need of type
  const { user } = useAuth();
  console.log(user);

  const stats = [
    {
      label: "Calories Burned",
      value: "2,450",
      icon: Zap,
      color: "text-primary",
    },
    {
      label: "Workouts This Week",
      value: "5",
      icon: Activity,
      color: "text-secondary",
    },
    {
      label: "Streak Days",
      value: "12",
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      label: "Meals Logged",
      value: "18",
      icon: Apple,
      color: "text-secondary",
    },
  ];

  const quickLinks = [
    {
      title: "Diet Plan",
      href: "/diet-plan",
      icon: Apple,
      gradient: "gradient-primary",
    },
    {
      title: "Workout Plan",
      href: "/workout-plan",
      icon: Activity,
      gradient: "gradient-secondary",
    },
    {
      title: "Tracker",
      href: "/tracker",
      icon: Camera,
      gradient: "gradient-accent",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <Siderbar />

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome Back, Champion! 💪
          </h1>
          <p className="text-foreground/70">
            Here&apos;s your fitness overview for today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 elevation">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <div
                  className={`w-12 h-12 ${stat.color} opacity-10 rounded-xl`}
                />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="glass rounded-2xl p-8 elevation hover:scale-105 transition-smooth group"
              >
                <div
                  className={`w-16 h-16 ${link.gradient} rounded-2xl flex items-center justify-center mb-4 glow-primary`}
                >
                  <link.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{link.title}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass rounded-2xl p-6 elevation">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                activity: "Completed Upper Body Workout",
                time: "2 hours ago",
                icon: Activity,
              },
              {
                activity: "Logged Breakfast - 450 cal",
                time: "5 hours ago",
                icon: Apple,
              },
              {
                activity: "Morning Run - 5km",
                time: "Yesterday",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 glass rounded-xl"
              >
                <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.activity}</div>
                  <div className="text-sm text-foreground/60">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardWrapper;
