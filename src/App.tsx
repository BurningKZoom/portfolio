import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import SideProjects from './components/SideProjects'
import Contact from './components/Contact'

function App() {
  return (
    <main className="bg-[#09090b] min-h-screen text-zinc-100 font-sans selection:bg-blue-500/20 selection:text-blue-200 antialiased">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Skills />
        <Projects />
        <SideProjects />
      </div>
      <Contact />
    </main>
  )
}

export default App
