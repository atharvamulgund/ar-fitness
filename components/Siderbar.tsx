"use client";
import React from "react";
import { Apple, LayoutDashboard, Activity, Camera, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { useAuth } from "@/providers/AuthProvider";
const Siderbar = () => {
  // @ts-expect-error, no need of type
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <aside className="fixed left-0 top-0 h-full w-72 glass border-r border-border p-6 z-50">
      <div className="flex items-center gap-4 mb-12">
        <Logo size={36} isVertical={false} />
        <ModeToggle />
      </div>

      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-smooth"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/diet-plan"
          className="flex items-center gap-3 px-4 py-3 rounded-xl glass hover:bg-primary/10 transition-smooth"
        >
          <Apple className="w-5 h-5" />
          <span>Diet Plan</span>
        </Link>
        <Link
          href="/workout-plan"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-smooth"
        >
          <Activity className="w-5 h-5" />
          <span>Workout Plan</span>
        </Link>
        <Link
          href="/tracker"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-smooth"
        >
          <Camera className="w-5 h-5" />
          <span>Tracker</span>
        </Link>
      </nav>

      <Button
        onClick={handleLogout}
        variant="ghost"
        className="absolute bottom-6 left-6 right-6 flex items-center gap-2"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </Button>
    </aside>
  );
};

export default Siderbar;
