"use client";

import Image from "next/image";
import { useState } from "react";

export function LandingPage() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  /*  const toggleMenu = () => setIsMenuExpanded(!isMenuExpanded);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn); */

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/*       
      <nav
        className={`fixed left-0 top-0 z-40 h-full bg-white transition-all duration-300 ease-in-out ${
          isMenuExpanded ? "w-64" : "w-16"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-4">
          <div>
            <button
              onClick={toggleMenu}
              className="mb-8 text-gray-500 hover:text-gray-900"
            >
              <Menu size={24} />
            </button>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/personalDashboard/moodTracker"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  <BarChart size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    My Mood Tracker
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="personalDashboard"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  <BarChart size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    My Mood Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/talkingSession"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  <MessageCircle size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    Start a Therapy Session
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              onClick={toggleLogin}
              className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              {isLoggedIn ? (
                <>
                  <LogOut size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    Logout
                  </span>
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    Login
                  </span>
                </>
              )}
            </button>
            {isLoggedIn && (
              <div className="mt-2 flex items-center justify-center">
                <User size={24} className="text-gray-500" />
              </div>
            )}
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <main
        className={`flex-1 p-8 transition-all duration-300 ease-in-out ml-64`}
      >
        <h1 className="mb-8 text-4xl font-bold">
          Welcome to Your Mental Health Journey
        </h1>

        {/* First Image and Text Box */}
        <div className="mb-12 flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
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
