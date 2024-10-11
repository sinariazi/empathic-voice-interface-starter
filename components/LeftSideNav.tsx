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
        className={`fixed left-0 top-0 z-40 h-full bg-white transition-all duration-300 ease-in-out shadow-lg ${
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
                  href="/landingPage"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={toggleMenu}
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
                  href="/personalDashboard/moodTracker"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={toggleMenu}
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
                  href="/personalDashboard"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={toggleMenu}
                  aria-label="Mood Dashboard"
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
                  aria-label="Start a Therapy Session"
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

          {/* Bottom Section - Login/Logout */}
          <div>
            <button
              onClick={toggleLogin}
              className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              aria-label={isLoggedIn ? "Logout" : "Login"}
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
      </nav>
    </div>
  );
}
