import Navbar from './components/navbar'
import Hero from './components/hero'
import ProjectCard from './components/projectCard'
import Footer from './components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="projects" className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Portfolio Website"
          description="A personal site built with Next.js and Tailwind CSS."
          image="/profile.jpg"
          link="#"
        />
        <ProjectCard
          title="Cool App"
          description="A modern web app example."
          image="/profile.jpg"
          link="#"
        />
      </section>
      <Footer />
    </main>
  )
}
