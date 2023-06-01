import Head from 'next/head'

export default function Projetos() {
  return (
    <>
      <Head>
        <title>Projetos | Portfólio</title>
      </Head>

      <section className="flex h-full min-h-screen w-full flex-1 flex-col">
        <div className="mx-auto my-32 grid w-full max-w-[1360px] gap-5 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex h-64 w-full flex-1 items-center justify-center rounded bg-zinc-200 dark:bg-zinc-800">
            Projeto 1
          </div>
          <div className="flex h-64 w-full flex-1 items-center justify-center rounded bg-zinc-200 dark:bg-zinc-800">
            Projeto 2
          </div>
          <div className="flex h-64 w-full flex-1 items-center justify-center rounded bg-zinc-200 dark:bg-zinc-800">
            Projeto 3
          </div>
          <div className="flex h-64 w-full flex-1 items-center justify-center rounded bg-zinc-200 dark:bg-zinc-800">
            Projeto 4
          </div>
        </div>
      </section>
    </>
  )
}
