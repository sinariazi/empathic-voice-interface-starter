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
  Tooltip,
} from "recharts";

const allQuestions = [
  "How satisfied are you with our service?",
  "How likely are you to recommend us to a friend?",
  "How would you rate the quality of our products?",
  "How easy was it to use our website?",
  "How would you rate our customer support?",
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

  const chartData = questions.map((q, i) => ({
    question: `Q${i + 1}`,
    score: answers[i] ?? 0,
    fullQuestion: q,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden">
        <CardHeader className="space-y-4">
          <Link href="/moodWhisper/personalDashboard">
            <Button
              onClick={() => console.log("Enter your current mood here")}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm"
            >
              Back to Dashboard
            </Button>
          </Link>
          {!showResults && (
            <>
              <CardTitle className="text-xl sm:text-2xl text-blue-800">
                Question {currentQuestionIndex + 1} of {questions.length}
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-blue-600">
                {questions[currentQuestionIndex]}
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent>
          {!showResults ? (
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
          ) : (
            <>
              <CardTitle className="text-xl sm:text-2xl text-blue-800 mb-4">
                Survey Results
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-blue-600 mb-6">
                Thank you for completing the survey!
              </CardDescription>
              <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis
                      type="number"
                      domain={[0, 10]}
                      ticks={[0, 2, 4, 6, 8, 10]}
                    />
                    <YAxis
                      dataKey="question"
                      type="category"
                      width={40}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#f3f4f6",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        padding: "0.5rem",
                      }}
                      formatter={(value, name, props) => [
                        value,
                        props.payload.fullQuestion,
                      ]}
                    />
                    <Legend />
                    <Bar
                      dataKey="score"
                      fill="#4f46e5"
                      name="Score"
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg sm:text-xl text-blue-800">
                  Average Score: {averageScore.toFixed(2)}
                </p>
              </div>
            </>
          )}
        </CardContent>
        {!showResults && (
          <CardFooter className="flex justify-between">
            <Button
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
              variant="outline"
              className="text-xs sm:text-sm"
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm"
            >
              {currentQuestionIndex === questions.length - 1
                ? "Finish"
                : "Next"}
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
