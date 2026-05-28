import { themeAtom } from "@/store/atoms/ui";
import { useAtom } from "jotai";

export function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme, isDark: theme === "dark" };
}
