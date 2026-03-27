import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Skills />
        <Projects />
      </div>
      <Contact />
    </main>
  )
}

export default App
