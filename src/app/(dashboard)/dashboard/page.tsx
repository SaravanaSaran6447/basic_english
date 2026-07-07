"use client";

import { useStore } from "@/store/useStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { BookOpen, FileText, Dumbbell, Bot, LineChart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const { currentUser, users } = useStore();  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !currentUser) return null;

  const userProgress = users[currentUser]?.progress?.testScores || [];
  const latestScore = userProgress.length > 0 ? userProgress[userProgress.length - 1] : null;

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/20">
        <CardContent className="pt-6">
          <h2 className="text-3xl font-bold">
            Welcome, {currentUser}! 👋
          </h2>
          <p className="text-muted-foreground mt-2">
            Let's master English Grammar today.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/learn" className={buttonVariants({ variant: "default", className: "shadow-lg shadow-primary/20" })}>
              <BookOpen className="mr-2 w-4 h-4" /> Learn
            </Link>
            <Link href="/test" className={buttonVariants({ variant: "secondary" })}>
              <FileText className="mr-2 w-4 h-4" /> Test
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg text-primary">
              <LineChart className="w-5 h-5" /> Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {userProgress.length}{" "}
              <span className="text-sm font-normal text-muted-foreground">
                Tests taken
              </span>
            </div>
            {latestScore && (
              <div className="mt-2 text-sm text-muted-foreground">
                Last score: {latestScore.score}/{latestScore.total}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-secondary/30 border-secondary">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg text-secondary-foreground">
              <Dumbbell className="w-5 h-5" /> Practice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Practice without pressure and get detailed explanations for your mistakes.
            </p>
            <Link href="/practice" className={buttonVariants({ variant: "outline", className: "w-full mt-4" })}>Start Practice</Link>
          </CardContent>
        </Card>

        <Card className="bg-accent/30 border-accent">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg text-accent-foreground">
              <Bot className="w-5 h-5" /> AI Chatbot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Got a question? Ask our AI grammar assistant anytime.
            </p>
            <Link href="/chatbot" className={buttonVariants({ variant: "outline", className: "w-full mt-4" })}>Ask Chatbot</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
