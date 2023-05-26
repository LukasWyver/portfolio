import { Hero } from '@/components/Hero'
import { Header } from '../components/Header'
import { Experience } from '@/components/Experience'
import { CardProj } from '@/components/CardProj'

import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex h-full w-full flex-col bg-zinc-900 text-zinc-50">
      <Header />
      <main className="flex flex-col gap-32">
        <Hero />
      </main>

      <Experience />

      <section className="mx-auto w-full max-w-[1360px] px-4 pb-28">
        <h2 className="text-7xl font-bold text-orange-500">
          #Últimos Projetos
        </h2>
        <h4 className="mb-20 mt-2 text-5xl font-light text-orange-50">
          desenvolvidos
        </h4>

        <div className="mb-14 space-y-20">
          <CardProj
            title="# Projeto 01"
            subtitle="Website"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            nesciunt a praesentium molestiae omnis dolorum dolor dignissimos
            neque minima asperiores placeat, corporis saepe earum perferendis
            deleniti."
            link="/"
          />

          <CardProj
            isFlip
            title="# Projeto 02"
            subtitle="Website"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            nesciunt a praesentium molestiae omnis dolorum dolor dignissimos
            neque minima asperiores placeat, corporis saepe earum perferendis
            deleniti."
            link="/"
          />

          <CardProj
            title="# Projeto 03"
            subtitle="Website"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            nesciunt a praesentium molestiae omnis dolorum dolor dignissimos
            neque minima asperiores placeat, corporis saepe earum perferendis
            deleniti."
            link="/"
          />
        </div>

        <Link
          href="/projetos"
          className="mx-auto flex w-full max-w-[416px] flex-1 justify-center rounded-lg bg-orange-500 py-3 text-center text-2xl font-light"
        >
          Ver todos os projetos
        </Link>
      </section>
    </section>
  )
}
