'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AboutUsComponent() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <p className="text-lg mb-4">
            Welcome to <strong>Moodwhisper</strong>—where innovation meets empathy.
          </p>
          <p className="mb-4">
            We are a team of passionate professionals dedicated to transforming workplaces through the power of AI and meaningful insights. At Moodwhisper, we believe that happy, engaged employees are the heart of every successful business. Our mission is to empower organizations to understand, nurture, and elevate employee satisfaction, one insight at a time.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            To revolutionize how businesses approach employee engagement by providing innovative tools that help companies listen, learn, and act.
          </p>
          <p>
            We envision a world where workplaces are not just places to earn a living but environments where individuals feel valued, inspired, and connected.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">What We Do</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Moodwhisper is an employee engagement platform designed to help organizations understand their teams like never before. Through dynamic surveys, advanced analytics, and actionable insights, we help businesses:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Identify what drives engagement within their workforce.</li>
            <li>Predict and prevent disengagement.</li>
            <li>Foster a culture of trust, communication, and well-being.</li>
          </ul>
          <p>
            Whether you're a growing startup or an established enterprise, our platform adapts to your needs, making it easier to prioritize your employees and achieve sustainable success.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Why Moodwhisper?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We know that every organization is unique, and so are its people. That's why Moodwhisper combines cutting-edge technology with a human-centered approach.
          </p>
          <ul className="list-disc list-inside">
            <li><strong>AI-Powered Insights</strong>: Gain clarity through real-time data and predictive analytics.</li>
            <li><strong>Employee-First Approach</strong>: Our tools are designed to prioritize the voices of employees, creating genuine engagement.</li>
            <li><strong>Results-Driven Solutions</strong>: We focus on delivering measurable outcomes for your business.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Our Values</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">At Moodwhisper, our values guide everything we do:</p>
          <ul className="list-disc list-inside">
            <li><strong>Empathy</strong>: Understanding people is at the core of our mission.</li>
            <li><strong>Innovation</strong>: We're committed to staying ahead with technology that delivers real impact.</li>
            <li><strong>Collaboration</strong>: We believe in building strong partnerships with our clients.</li>
            <li><strong>Sustainability</strong>: Happy employees lead to healthier businesses and communities.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Join Us on This Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We're more than a platform—we're your partner in creating workplaces where people and businesses thrive. Together, let's shape the future of work by putting employees at the heart of your success.
          </p>
          <p className="text-xl font-semibold mb-6">
            <strong>Moodwhisper</strong>: Engaging minds, empowering workplaces.
          </p>
          <Button size="lg" className="w-full sm:w-auto">Get Started with Moodwhisper</Button>
        </CardContent>
      </Card>
    </div>
  )
}