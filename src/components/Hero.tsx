import Image from 'next/image'
import meImg from '../assets/me.png'

export function Hero() {
  return (
    <section className="mx-auto mt-20 flex max-w-5xl flex-col-reverse items-center justify-center gap-8 lg:flex-row">
      <div className="w-1/4">
        <Image src={meImg} alt="" height={1024} className="" />
      </div>
      <div className="w-3/4">
        <div className="mb-8 w-full">
          <h1 className="text-5xl font-bold text-orange-500 lg:text-['5rem'] 2xl:text-9xl">
            Olá
          </h1>
          <h2 className="text-2xl font-normal text-orange-200 lg:text-4xl 2xl:text-5xl">
            Me chamo Lucas
          </h2>
        </div>
      </div>
    </section>
  )
}
