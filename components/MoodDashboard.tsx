"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Mock data for the mood charts
const todayEmotions = [
  { emotion: "Happiness", value: 8 },
  { emotion: "Excitement", value: 7 },
  { emotion: "Contentment", value: 6 },
  { emotion: "Gratitude", value: 9 },
  { emotion: "Love", value: 8 },
  { emotion: "Anxiety", value: 4 },
  { emotion: "Stress", value: 5 },
  { emotion: "Sadness", value: 3 },
  { emotion: "Anger", value: 2 },
  { emotion: "Fear", value: 3 },
];

const dailyData = [
  { date: "06/01", mood: 7 },
  { date: "06/02", mood: 6 },
  { date: "06/03", mood: 8 },
  { date: "06/04", mood: 7 },
  { date: "06/05", mood: 9 },
  { date: "06/06", mood: 8 },
  { date: "06/07", mood: 7 },
];

const weeklyData = [
  { week: "Week 1", mood: 7.5 },
  { week: "Week 2", mood: 6.8 },
  { week: "Week 3", mood: 8.2 },
  { week: "Week 4", mood: 7.9 },
];

const monthlyData = [
  { month: "Jan", mood: 7.2 },
  { month: "Feb", mood: 6.9 },
  { month: "Mar", mood: 7.5 },
  { month: "Apr", mood: 8.1 },
  { month: "May", mood: 7.8 },
  { month: "Jun", mood: 8.3 },
];

const motivationalMessages = [
  "Every day is a new beginning. Take a deep breath and start again.",
  "You are stronger than you think.",
  "Believe you can and you're halfway there.",
  "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
  "Small steps every day lead to big changes over time.",
];

const emotionColors = {
  Happiness: "#FFD700",
  Excitement: "#FF6347",
  Contentment: "#98FB98",
  Gratitude: "#DDA0DD",
  Love: "#FF69B4",
  Anxiety: "#4682B4",
  Stress: "#8B4513",
  Sadness: "#4169E1",
  Anger: "#DC143C",
  Fear: "#800080",
};

export function MoodDashboard() {
  const [motivationalMessage, setMotivationalMessage] = useState("");

  useEffect(() => {
    updateMotivationalMessage();
  }, []);

  const updateMotivationalMessage = () => {
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    setMotivationalMessage(motivationalMessages[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 md:p-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Mood Whisper Logo"
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-indigo-800">
              Mood Whisper
            </span>
          </div>
        </Link>
        <Link href="/personalDashboard/moodTracker">
          <Button
            onClick={() => console.log("Enter your current mood here")}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            how do you feel today
          </Button>
        </Link>
      </header>

      <main className="space-y-6 sm:space-y-8">
        <Card className="bg-white shadow-lg border border-indigo-100">
          <CardHeader>
            <CardTitle className="text-indigo-800">
              Your Mood Dashboard
            </CardTitle>
            <CardDescription className="text-indigo-600">
              {motivationalMessage}
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          <Card className="bg-white shadow-lg border border-indigo-100">
            <CardHeader>
              <CardTitle className="text-indigo-800">
                Today's Emotions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={todayEmotions}
                  >
                    <PolarGrid stroke="#E0E7FF" />
                    <PolarAngleAxis dataKey="emotion" stroke="#4F46E5" />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 10]}
                      stroke="#4F46E5"
                    />
                    <Radar
                      name="Emotions"
                      dataKey="value"
                      stroke="#6366F1"
                      fill="#6366F1"
                      fillOpacity={0.6}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#EEF2FF",
                        border: "1px solid #C7D2FE",
                      }}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-indigo-100">
            <CardHeader>
              <CardTitle className="text-indigo-800">Daily Mood</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E7FF" />
                    <XAxis dataKey="date" stroke="#4F46E5" />
                    <YAxis domain={[0, 10]} stroke="#4F46E5" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#EEF2FF",
                        border: "1px solid #C7D2FE",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="mood" fill="#6366F1" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-indigo-100">
            <CardHeader>
              <CardTitle className="text-indigo-800">Weekly Mood</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E7FF" />
                    <XAxis dataKey="week" stroke="#4F46E5" />
                    <YAxis domain={[0, 10]} stroke="#4F46E5" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#EEF2FF",
                        border: "1px solid #C7D2FE",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="mood"
                      stroke="#6366F1"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-indigo-100">
            <CardHeader>
              <CardTitle className="text-indigo-800">Monthly Mood</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E7FF" />
                    <XAxis dataKey="month" stroke="#4F46E5" />
                    <YAxis domain={[0, 10]} stroke="#4F46E5" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#EEF2FF",
                        border: "1px solid #C7D2FE",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="mood"
                      stroke="#6366F1"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
