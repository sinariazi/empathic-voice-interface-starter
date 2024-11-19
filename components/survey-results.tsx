"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const mockData = {
  "14d": [
    {
      date: "2023-05-01",
      satisfaction: 7.5,
      mood: 8,
      engagement: 7,
      companyScore: 7.5,
    },
    {
      date: "2023-05-15",
      satisfaction: 8,
      mood: 8.5,
      engagement: 7.5,
      companyScore: 8,
    },
  ],
  "1m": [
    {
      date: "2023-04-01",
      satisfaction: 7,
      mood: 7.5,
      engagement: 6.5,
      companyScore: 7,
    },
    {
      date: "2023-05-01",
      satisfaction: 7.5,
      mood: 8,
      engagement: 7,
      companyScore: 7.5,
    },
  ],
  "3m": [
    {
      date: "2023-02-01",
      satisfaction: 6.5,
      mood: 7,
      engagement: 6,
      companyScore: 6.5,
    },
    {
      date: "2023-05-01",
      satisfaction: 7.5,
      mood: 8,
      engagement: 7,
      companyScore: 7.5,
    },
  ],
  "6m": [
    {
      date: "2022-11-01",
      satisfaction: 6,
      mood: 6.5,
      engagement: 5.5,
      companyScore: 6,
    },
    {
      date: "2023-05-01",
      satisfaction: 7.5,
      mood: 8,
      engagement: 7,
      companyScore: 7.5,
    },
  ],
  all: [
    {
      date: "2022-05-01",
      satisfaction: 5.5,
      mood: 6,
      engagement: 5,
      companyScore: 5.5,
    },
    {
      date: "2023-05-01",
      satisfaction: 7.5,
      mood: 8,
      engagement: 7,
      companyScore: 7.5,
    },
  ],
};

type ChartProps = {
  data: (typeof mockData)["14d"];
  title: string;
  dataKey: keyof (typeof mockData)["14d"][0];
};

const Chart = ({ data, title, dataKey }: ChartProps) => (
  <Card className="w-full ">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export function SurveyResults() {
  const [timeRange, setTimeRange] = useState("14d");
  const data = mockData[timeRange as keyof typeof mockData];

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="14d">Last 14 days</SelectItem>
            <SelectItem value="1m">Last month</SelectItem>
            <SelectItem value="3m">Last 3 months</SelectItem>
            <SelectItem value="6m">Last 6 months</SelectItem>
            <SelectItem value="all">All time</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Chart
          data={data}
          title="Employee Satisfaction"
          dataKey="satisfaction"
        />
        <Chart data={data} title="Employee Mood" dataKey="mood" />
        <Chart data={data} title="Employee Engagement" dataKey="engagement" />
        <Chart data={data} title="Company Scores" dataKey="companyScore" />
      </div>
    </div>
  );
}
