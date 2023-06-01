import htmlImg from '../assets/html.svg'
import cssImg from '../assets/css.svg'
import jsImg from '../assets/javascript.svg'
import reactjsImg from '../assets/reactjs.svg'
import Image from 'next/image'

export function Skills() {
  return (
    <section className="mx-auto my-32 w-full max-w-[1360px] border-b border-zinc-200 px-2 pb-28 dark:border-zinc-800">
      <h2 className="break-words text-5xl font-bold text-orange-500 sm:text-6xl md:text-7xl">
        #Meus Conhecimentos
      </h2>
      <h4 className="mt-2 text-3xl font-light text-zinc-500 dark:text-orange-50 sm:text-4xl md:text-5xl">
        Hard Skills
      </h4>

      <div className="mx-auto mt-32 grid max-w-4xl grid-cols-2 gap-16 px-4 md:grid-cols-4">
        <div>
          <p className="text-center">HTML</p>
          <Image src={htmlImg} alt="" className="mx-auto" />
        </div>

        <div>
          <p className="text-center">CSS</p>
          <Image src={cssImg} alt="" className="mx-auto" />
        </div>

        <div>
          <p className="text-center">JAVASCRIPT</p>
          <Image src={jsImg} alt="" className="mx-auto" />
        </div>

        <div>
          <p className="text-center">REACT</p>
          <Image src={reactjsImg} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  )
}
