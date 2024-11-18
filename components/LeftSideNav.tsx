"use client";
import Link from "next/link";
import {
  Menu,
  BarChart,
  MessageCircle,
  LogOut,
  LogIn,
  User,
  Home,
} from "lucide-react";
import { useState } from "react";

export function LeftSidNav() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsMenuExpanded(!isMenuExpanded);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="flex">
      <nav
        className={`fixed left-0 top-12 z-40 h-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuExpanded ? "w-64" : "w-16"
        }`}
        aria-expanded={isMenuExpanded}
      >
        <div className="flex h-full flex-col justify-between p-4">
          {/* Top Section - Menu Button & Links */}
          <div>
            <button
              onClick={toggleMenu}
              className="mb-8 text-gray-500 hover:text-gray-900"
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/moodWhisper/"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  aria-label="Home"
                >
                  <Home size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/moodWhisper/personalDashboard/moodTracker"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  aria-label="Mood Tracker"
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
                  href="/moodWhisper/pricing"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  aria-label="Pricing"
                >
                  <BarChart size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    Pricing
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/moodWhisper/personalDashboard"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  aria-label="Mood Dashboard"
                >
                  <BarChart size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/moodWhisper/survey"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  aria-label="Survey"
                >
                  <BarChart size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    Survey
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/moodWhisper/talkingSession"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  aria-label="Therapy Session"
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
              <li>
                <Link
                  href="/moodWhisper/callFunction"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  aria-label="Start a Call Function"
                >
                  <MessageCircle size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    New Call Function
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/earlyUsersSignUp"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  aria-label="Waiting List"
                >
                  <BarChart size={20} />
                  <span
                    className={`ml-2 ${
                      isMenuExpanded ? "inline-block" : "hidden"
                    }`}
                  >
                    Early Users Waiting List
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Bottom Section - Login/Logout */}
          <div>
            <button
              onClick={toggleLogin}
              className={`mb-20 w-full flex items-center ${
                isMenuExpanded ? "justify-center" : "justify-center"
              } rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700`}
              aria-label={isLoggedIn ? "Logout" : "Login"}
            >
              <div className="flex items-center justify-center">
                {isLoggedIn ? <LogOut size={20} /> : <LogIn size={20} />}
              </div>
              {isMenuExpanded && (
                <span className="ml-2">{isLoggedIn ? "Logout" : "Login"}</span>
              )}
            </button>
            {isLoggedIn && (
              <div className="mt-2 flex items-center justify-center">
                <User size={24} className="text-gray-500" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
