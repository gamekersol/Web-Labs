import { useEffect, useLayoutEffect, useState } from "react";

const getThemeByTime = () => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? "light" : "dark";
};

export default function useTheme() {
  const [theme, setTheme] = useState(getThemeByTime);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    let last = getThemeByTime();
    const id = setInterval(() => {
      const current = getThemeByTime();
      if (current !== last) {
        last = current;
        setTheme(current);
      }
    }, 30000);
    return () => clearInterval(id);
  }, []);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return [theme, toggle];
}