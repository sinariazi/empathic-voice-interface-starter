"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const allQuestions = [
  "How satisfied are you with our service?",
  "How likely are you to recommend us to a friend?",
  "How would you rate the quality of our products?",
  "How easy was it to use our website?",
  "How would you rate our customer support?",
  "How satisfied are you with the delivery time?",
  "How would you rate the value for money of our products?",
  "How likely are you to make another purchase from us?",
  "How would you rate your overall experience with us?",
  "How satisfied are you with the variety of our products?",
];

export function MoodTracker() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentSliderValue, setCurrentSliderValue] = useState<number>(5);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5));
    setAnswers(new Array(5).fill(null));
  }, []);

  useEffect(() => {
    setCurrentSliderValue(answers[currentQuestionIndex] ?? 5);
  }, [currentQuestionIndex, answers]);

  const handleSliderChange = (value: number[]) => {
    setCurrentSliderValue(value[0]);
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = currentSliderValue;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const averageScore =
    answers.filter((a) => a !== null).reduce((a, b) => a + b, 0) /
    answers.filter((a) => a !== null).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm shadow-xl">
        <Link href="/personalDashboard">
          <Button
            onClick={() => console.log("Enter your current mood here")}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            go back to your personalDashboard
          </Button>
        </Link>
        {!showResults ? (
          <>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">
                Question {currentQuestionIndex + 1} of {questions.length}
              </CardTitle>
              <CardDescription className="text-lg text-blue-600">
                {questions[currentQuestionIndex]}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="py-6">
                <Slider
                  value={[currentSliderValue]}
                  max={10}
                  step={1}
                  onValueChange={handleSliderChange}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-sm text-blue-500">
                  <span>0</span>
                  <span>5</span>
                  <span>10</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                onClick={handleBack}
                disabled={currentQuestionIndex === 0}
                variant="outline"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Finish"
                  : "Next"}
              </Button>
            </CardFooter>
          </>
        ) : (
          <>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">
                Survey Results
              </CardTitle>
              <CardDescription className="text-lg text-blue-600">
                Thank you for completing the survey!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  score: {
                    label: "Score",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={questions.map((q, i) => ({
                      question: `Q${i + 1}`,
                      score: answers[i] ?? 0,
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="question" />
                    <YAxis domain={[0, 10]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="score" fill="var(--color-score)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-6 text-center">
                <p className="text-xl text-blue-800">
                  Average Score: {averageScore.toFixed(2)}
                </p>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}
