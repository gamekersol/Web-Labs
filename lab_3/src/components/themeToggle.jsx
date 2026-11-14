function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Перемкнути тему"
    >
      {theme === "light" ? "🌙 Нічна" : "☀️ Денна"}
    </button>
  );
}

export default ThemeToggle;