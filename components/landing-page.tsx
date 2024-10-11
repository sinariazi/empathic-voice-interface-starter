"use client";

import Image from "next/image";

export function LandingPage() {
  return (
    <div>
      {/* Main Content */}
      <main
        className={`flex-1 p-2 transition-all duration-300 ease-in-out ml-64`}
      >
        <h1 className="mb-8 text-4xl font-bold">
          Welcome to Your Mental Health Journey
        </h1>

        {/* First Image and Text Box */}
        <div className="mb-12 flex flex-col items-center space-y-2 md:flex-row md:space-x-8 md:space-y-0">
          <Image
            src="/placeholder.svg"
            alt="Mental Health Illustration"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          <div className="max-w-md rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Track Your Mood</h2>
            <p className="text-gray-600">
              Our mood tracker helps you understand your emotional patterns. By
              regularly logging your mood, you can gain insights into what
              affects your mental well-being and take proactive steps towards
              improvement.
            </p>
          </div>
        </div>

        {/* Second Image and Text Box */}
        <div className="flex flex-col-reverse items-center space-y-8 space-y-reverse md:flex-row md:space-x-8 md:space-y-0">
          <div className="max-w-md rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">
              Professional Support
            </h2>
            <p className="text-gray-600">
              Connect with licensed therapists for personalized support. Our
              platform offers secure, confidential sessions to help you navigate
              life's challenges and work towards your mental health goals.
            </p>
          </div>
          <Image
            src="/placeholder.svg"
            alt="Therapy Session Illustration"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </main>
    </div>
  );
}
