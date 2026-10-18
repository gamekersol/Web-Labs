import Header from "./components/header.jsx"
import Projects from "./components/projects.jsx"
import Skills from "./components/skills.jsx"
import Education from "./components/education.jsx"
import Footer from "./components/footer.jsx"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-amber-100 p-4 text-slate-800 sm:py-10">
      <div className="mx-auto max-w-2xl space-y-10 rounded-2xl bg-white/80 p-6 shadow-lg sm:p-10 [&_h2]:border-l-4 [&_h2]:border-indigo-500 [&_h2]:pl-3 [&_h2]:text-xl [&_h2]:font-semibold">
        <Header />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </div>
    </div>
  )
}

export default App
