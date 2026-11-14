import Header from "./components/header.jsx"
import Projects from "./components/projects.jsx"
import Skills from "./components/skills.jsx"
import Education from "./components/education.jsx"
import Footer from "./components/footer.jsx"
import Comments from "./components/comments.jsx"
import FeedbackModal from "./components/feedbackModeal.jsx";
import ThemeToggle from "./components/themeToggle.jsx";
import useTheme from "./hooks/useTheme.js";

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div>
      <div className="page">
        <div className="card">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Header />
          <Projects />
          <Skills />
          <Education />
          <div className="comments-section">
            <Comments />
          </div>
          <Footer />
        </div>
      </div>
      <FeedbackModal />
    </div>
  )
}

export default App