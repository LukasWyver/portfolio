import Head from 'next/head'

import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { Footer } from '@/components/Footer'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { ContainerProj } from '@/components/ContainerProj'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Portfólio</title>
      </Head>

      <section className="flex h-full w-full flex-col">
        <main className="flex flex-col gap-32">
          <Hero />
        </main>

        <Experience />
        <ContainerProj />
        <Skills />
        <Contact />
        <Footer />
      </section>
    </>
  )
}
