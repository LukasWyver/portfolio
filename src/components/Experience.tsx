import { CardExp } from './CardExp'

export function Experience() {
  return (
    <section className="mx-auto my-32 w-full max-w-[1360px] border-b border-zinc-800 px-4 pb-28">
      <h2 className="text-7xl font-bold text-orange-500">#10 Anos</h2>
      <h4 className="mt-2 text-5xl font-light text-orange-50">de Carreira</h4>

      <div className="mx-auto mt-28 grid w-full gap-6 py-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="sm:mt-16">
          <CardExp
            year="2012"
            occupation="Menor Aprendiz"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis."
          />
        </div>
        <div className="">
          <CardExp
            year="2015"
            occupation="Aux. Faturamento"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis."
          />
        </div>

        <div className="sm:mt-16">
          <CardExp
            year="2020"
            occupation="Setor Faturamento"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis."
          />
        </div>

        <div className="">
          <CardExp
            isCurrent
            year="2022"
            occupation="Dev Front-end"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis."
          />
        </div>
      </div>
    </section>
  )
}
