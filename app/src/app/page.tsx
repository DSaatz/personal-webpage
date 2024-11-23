import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialLinks />
      <Projects />
      <Contact />
    </main>
  )
}

