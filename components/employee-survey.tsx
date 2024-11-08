"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const surveyData = {
  employee_engagement_questions: {
    leadership_and_management_quality: [
      "How clear is the company's vision and direction?",
      "How well does your manager support your professional growth?",
      "How much do you trust the leadership team?",
      "How transparent is the management with company updates?",
      "How frequently do you receive feedback from your manager?",
    ],
    work_culture_and_values: [
      "How well do the company's values align with your personal values?",
      "How inclusive and diverse do you find the company culture?",
      "How valued do you feel in your workplace?",
      "How often do you receive recognition for your contributions?",
      "How well does the company celebrate employee achievements?",
    ],
    job_role_and_responsibilities: [
      "How clear are your job responsibilities and expectations?",
      "How empowered do you feel to make decisions within your role?",
      "How well do you feel your skills are being utilized?",
      "How meaningful do you find the work you do?",
      "How satisfied are you with your level of autonomy in your role?",
    ],
    career_growth_and_development: [
      "How satisfied are you with the learning opportunities available?",
      "How clear is your career path within the company?",
      "How well does the company support your career progression?",
      "How accessible is mentorship or guidance for your development?",
      "How supported do you feel in reaching your professional goals?",
    ],
    work_life_balance_and_flexibility: [
      "How well does the company support a healthy work-life balance?",
      "How flexible are your work arrangements?",
      "How manageable do you find your workload?",
      "How accessible are mental health resources in the company?",
      "How balanced do you feel between work and personal life?",
    ],
    employee_recognition_and_rewards: [
      "How frequently do you receive recognition for your work?",
      "How satisfied are you with the rewards for good performance?",
      "How fairly is your performance compensated?",
      "How meaningful do you find non-monetary rewards?",
      "How valued do you feel for your contributions to the team?",
    ],
    team_dynamics_and_relationships: [
      "How supportive is the team environment you work in?",
      "How often do you receive recognition from your peers?",
      "How open is your team to hearing and discussing new ideas?",
      "How comfortable do you feel sharing ideas with your team?",
      "How well do you feel your team collaborates on projects?",
    ],
    job_security_and_fair_compensation: [
      "How satisfied are you with your current compensation and benefits?",
      "How secure do you feel in your job position?",
      "How fair do you find the compensation policies in the company?",
      "How satisfied are you with the company's health benefits?",
      "How fairly do you feel you are compensated relative to your peers?",
    ],
    employee_empowerment_and_voice: [
      "How much influence do you feel you have in decision-making?",
      "How accessible are the resources you need to perform well?",
      "How encouraged do you feel to contribute new ideas?",
      "How frequently are your ideas implemented in the workplace?",
      "How empowered do you feel to make decisions impacting your work?",
    ],
    organizational_stability_and_communication: [
      "How frequently do you receive updates on company changes?",
      "How predictable and stable do you find your work environment?",
      "How accessible is communication from senior leadership?",
      "How well does the company handle internal communication?",
      "How frequently do you feel updated on the company's direction?",
    ],
  },
  rating_scale: {
    "0": "Not at all",
    "1": "Slightly",
    "2": "Somewhat",
    "3": "Moderately",
    "4": "Very",
    "5": "Extremely",
  },
} as const;

type Question = {
  category: string;
  question: string;
};

type Answer = {
  category: string;
  question: string;
  value: number;
};

export function EmployeeSurveyComponent() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: Answer }>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const randomQuestions: Question[] = Object.entries(
      surveyData.employee_engagement_questions
    ).map(([category, categoryQuestions]) => ({
      category,
      question:
        categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)],
    }));
    setQuestions(randomQuestions);
    const defaultAnswers: { [key: number]: Answer } = {};
    randomQuestions.forEach((question, index) => {
      defaultAnswers[index] = { ...question, value: 0 };
    });
    setAnswers(defaultAnswers);
  }, []);

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: { ...questions[currentQuestionIndex], value },
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (Object.keys(answers).length === questions.length) {
      setShowResults(true);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const resetSurvey = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };
  const chartConfig: ChartConfig = {
    bar: { color: "#3B82F6" }, // Example configuration
  };

  const resultsData = Object.entries(answers)
    .reduce((acc, [_, answer]) => {
      if (answer && answer.category && typeof answer.value === "number") {
        const existingCategory = acc.find(
          (item) => item.category === answer.category
        );
        if (existingCategory) {
          existingCategory.value += answer.value;
          existingCategory.count += 1;
        } else {
          acc.push({
            category: answer.category,
            value: answer.value,
            count: 1,
          });
        }
      }
      return acc;
    }, [] as { category: string; value: number; count: number }[])
    .map((item) => ({
      category: item.category
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      averageScore: item.value / item.count,
    }));

  if (showResults) {
    return (
      <Card className="w-full max-w-md mx-auto bg-sky-50">
        <CardHeader>
          <CardTitle className="text-sky-700">
            Employee Engagement Survey Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          {resultsData.length > 0 ? (
            <ChartContainer className="h-[400px]" config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={resultsData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 5]} />
                  <YAxis dataKey="category" type="category" width={150} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const score =
                          typeof payload[0].value === "number"
                            ? payload[0].value
                            : 0;
                        const label =
                          surveyData.rating_scale[
                            `${Math.round(
                              score
                            )}` as keyof typeof surveyData.rating_scale
                          ];
                        return (
                          <div className="bg-white p-2 border border-gray-300 rounded shadow">
                            <p className="font-bold">
                              {payload[0].payload.category}
                            </p>
                            <p>
                              Average Score: {score.toFixed(2)} ({label})
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="averageScore" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          ) : (
            <p className="text-center text-sky-700">
              No data available. Please complete the survey.
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={resetSurvey}
            className="w-full bg-sky-600 hover:bg-sky-700"
          >
            Start Over
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-sky-50">
      <CardHeader>
        <CardTitle className="text-sky-700">
          Employee Engagement Survey
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sky-900">
          {questions[currentQuestionIndex]?.question}
        </p>
        <Slider
          min={0}
          max={5}
          step={1}
          value={[answers[currentQuestionIndex]?.value ?? 0]}
          onValueChange={(value) => handleAnswer(value[0])}
          className="mb-6"
        />
        <div className="flex justify-between text-sky-600 text-xs">
          {Object.entries(surveyData.rating_scale).map(([value, label]) => (
            <div key={value} className="flex flex-col items-center">
              <span>{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="bg-sky-600 hover:bg-sky-700"
        >
          Previous
        </Button>
        <Button
          onClick={goToNextQuestion}
          className="bg-sky-600 hover:bg-sky-700"
        >
          {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  );
}
