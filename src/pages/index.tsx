import { Hero } from '@/components/Hero'
import { Header } from '../components/Header'
import { Experience } from '@/components/Experience'

export default function Home() {
  return (
    <section className="flex h-full w-full flex-col bg-zinc-900 text-zinc-50">
      <Header />
      <main className="flex flex-col gap-32">
        <Hero />
      </main>

      <Experience />
    </section>
  )
}
