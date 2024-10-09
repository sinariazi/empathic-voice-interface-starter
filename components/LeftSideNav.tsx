"use client";
import Link from "next/link";

import {
  Menu,
  BarChart,
  MessageCircle,
  LogOut,
  LogIn,
  User,
} from "lucide-react";
import { useState } from "react";

export function LeftSidNav() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleMenu = () => setIsMenuExpanded(!isMenuExpanded);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);
  return (
    <div className="flex min-h-screen bg-gray-100">
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
                  href="/personalDashboard"
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
      </nav>
    </div>
  );
}
