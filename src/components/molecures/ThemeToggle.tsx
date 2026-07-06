"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10"></div>; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full glass hover:bg-white/10 dark:hover:bg-white/20 transition-colors flex items-center justify-center w-10 h-10"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5 text-neutral" />
      ) : (
        <Sun className="w-5 h-5 text-neutral" />
      )}
    </button>
  );
}
