import Head from 'next/head'

import { Hero } from '@/components/Hero'
import { Header } from '../components/Header'
import { Experience } from '@/components/Experience'

import { Skills } from '@/components/Skills'
import { ContainerProj } from '@/components/ContainerProj'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Gimenes | Portfólio</title>
      </Head>

      <section className="flex h-full w-full flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
        <Header />
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
