import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`inline-flex items-center justify-center w-9 h-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200 ${className}`}
    >
      {mounted ? (
        isDark ? <Sun size={18} /> : <Moon size={18} />
      ) : (
        <Sun size={18} className="opacity-0" />
      )}
    </button>
  );
};

export default ThemeToggle;
