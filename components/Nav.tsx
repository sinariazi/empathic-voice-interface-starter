"use client";

import pkg from "@/package.json";
import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import MWLogo from "./logos/MWLogo";
import { Button } from "./ui/button";
import Link from "next/link";

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div>
        {" "}
        <Link href="/landingPage">
          <MWLogo className={"h-5 w-auto"} />
        </Link>
      </div>
      <div className={"ml-auto flex items-center gap-1"}>
        <Button
          onClick={() => {
            window.open(pkg.homepage, "_blank", "noopener noreferrer");
          }}
          variant="ghost"
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            <MWLogo className={"size-4"} />
          </span>
          <span>Star on GitHub</span>
        </Button>
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
