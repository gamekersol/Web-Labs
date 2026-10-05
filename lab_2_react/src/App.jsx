import Header from './components/header.jsx'
import Projects from './components/projects.jsx'
import Skills from './components/skills.jsx'
import Education from './components/education.jsx'
import Footer from './components/footer.jsx'
import './App.css'

function App() {
  return (
    <div> 
      <Header />
      <main>
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

export default App