import Image from 'next/image'
import meImg from '../assets/me.png'

export function Hero() {
  return (
    <section className="mx-auto mt-20 flex max-w-5xl flex-col-reverse items-center justify-center gap-8 px-4 lg:flex-row">
      <div className="flex-1">
        <Image src={meImg} alt="" width={641} height={601} className="" />
      </div>
      <div className="w-full flex-1">
        <div className="mb-8 w-full">
          <h1 className="text-5xl font-bold text-orange-500 sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl">
            Olá
          </h1>
          <h2 className="text-2xl font-normal text-zinc-500 dark:text-orange-50 lg:text-4xl 2xl:text-5xl">
            Me chamo Lucas
          </h2>
        </div>

        <div className=" max-w-sm rounded bg-gradient-to-bl from-zinc-200 to-zinc-50 p-4 font-code dark:from-gray-800 dark:to-zinc-900 sm:p-8">
          <p className="text-zinc-400 dark:text-zinc-500">{`// Minha apresentação`}</p>
          <p className="mt-2 text-yellow-500">
            <span className="pr-2 text-pink-400">const</span>
            <span className="pr-2 text-rose-500 dark:text-zinc-50">Infos</span>
            {`{`}
          </p>
          <p className="pl-4 text-zinc-500 dark:text-zinc-50">
            <span className="pr-2 text-purple-600 dark:text-purple-300">
              Nome:
            </span>
            Lucas,
          </p>
          <p className="pl-4 text-zinc-500 dark:text-zinc-50">
            <span className="pr-2 text-purple-600 dark:text-purple-300">
              Sobrenome:
            </span>
            Gimenes
          </p>
          <p className="text-yellow-500">{`}`}</p>
        </div>

        <div className="ml-auto mt-8 block max-w-sm rounded bg-gradient-to-bl from-zinc-200 to-zinc-50 p-4 font-code dark:from-gray-800 dark:to-zinc-900 sm:p-8">
          <p className="mt-2 text-yellow-500">
            <span className="pr-2 text-pink-400">let</span>
            <span className="pr-2 text-rose-500 dark:text-zinc-50">Cargo</span>
            {`{`}
          </p>
          <p className="pl-4 text-zinc-500 dark:text-zinc-50">
            <span className="pr-2 text-purple-600 dark:text-purple-300">
              Função:
            </span>
            Dev Front-end,
          </p>
          <p className="pl-4 text-zinc-500 dark:text-zinc-50">
            <span className="pr-2 text-purple-600 dark:text-purple-300">
              Empresa:
            </span>
            Web2midia
          </p>
          <p className="text-yellow-500">{`}`}</p>
          <span className="motion-safe:animate-ping">|</span>
        </div>
      </div>
    </section>
  )
}
