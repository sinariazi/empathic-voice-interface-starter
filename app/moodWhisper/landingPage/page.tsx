import { NewsletterSubscribeComponent } from "@/components/newsletter-subscribe";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageCircle, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 via-blue-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-600">
                    Your AI-Powered Mental Health Companion
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Mood Whisper uses advanced AI to provide personalized
                    support, helping you navigate your emotional well-being with
                    confidence and ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="text-blue-500 border-blue-500 hover:bg-blue-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Mood Whisper App"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="300"
                  src="/mw.svg"
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Brain className="w-12 h-12 text-blue-500" />
                  <h3 className="text-xl font-bold text-blue-600">
                    AI-Powered Insights
                  </h3>
                  <p className="text-gray-600 text-center">
                    Our advanced AI analyzes your mood patterns and provides
                    personalized insights.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <MessageCircle className="w-12 h-12 text-blue-500" />
                  <h3 className="text-xl font-bold text-blue-600">
                    24/7 Support
                  </h3>
                  <p className="text-gray-600 text-center">
                    Access our AI chatbot anytime for immediate emotional
                    support and guidance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Shield className="w-12 h-12 text-blue-500" />
                  <h3 className="text-xl font-bold text-blue-600">
                    Privacy First
                  </h3>
                  <p className="text-gray-600 text-center">
                    Your data is encrypted and protected, ensuring your mental
                    health journey remains private.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-r border-blue-200 px-4">
                <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-blue-600">Sign Up</h3>
                <p className="text-gray-600 text-center">
                  Create your account and complete a brief assessment.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-r border-blue-200 px-4">
                <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-blue-600">
                  Track Your Mood
                </h3>
                <p className="text-gray-600 text-center">
                  Log your emotions daily using our intuitive interface.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-4">
                <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-blue-600">
                  Receive Insights
                </h3>
                <p className="text-gray-600 text-center">
                  Get personalized recommendations and support from our AI.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">
              What Our Users Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  quote:
                    "Mood Whisper has been a game-changer for my mental health journey. The AI insights are spot-on!",
                },
                {
                  name: "Sarah Lee",
                  quote:
                    "I love how accessible and user-friendly the app is. It's like having a therapist in my pocket.",
                },
                {
                  name: "Michael Chen",
                  quote:
                    "The privacy features give me peace of mind. I feel safe sharing my thoughts and feelings.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col space-y-2 p-6">
                    <p className="text-gray-600 italic">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-sm font-bold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-6">
              Join Our Early Users Waiting List!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Be among the first to access our app and help shape its future.
              Your feedback is invaluable in tailoring the experience to meet
              your personal preferences. Sign up today and be part of our
              journey!{" "}
            </p>
            <Link href={"/earlyUsersSignUp"}>
              {" "}
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <NewsletterSubscribeComponent />
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Mood Whisper. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
