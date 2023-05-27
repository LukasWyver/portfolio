import Link from 'next/link'
import { CardProj } from './CardProj'

export function ContainerProj() {
  return (
    <section className="mx-auto w-full max-w-[1360px] px-4 pb-28">
      <h2 className="text-5xl font-bold text-orange-500 sm:text-6xl md:text-7xl">
        #Últimos Projetos
      </h2>
      <h4 className="mb-20 mt-2 text-3xl font-light text-zinc-500 dark:text-orange-50 sm:text-4xl md:text-5xl">
        Desenvolvidos
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
  )
}
