import { CardExp } from './CardExp'

export function Experience() {
  return (
    <section className="mx-auto my-32 w-full max-w-[1360px] border-b border-zinc-800 px-4 pb-28">
      <h2 className="text-7xl font-bold text-orange-500">#01 Ano</h2>
      <h4 className="mt-2 text-5xl font-light text-orange-50">
        de experiência
      </h4>

      <div className="mx-auto mt-28 flex h-[515px] w-full gap-6 py-3">
        <div className="flex max-w-[632px] items-stretch justify-between gap-6">
          <div className="mt-16">
            <CardExp
              year="2012"
              occupation="Menor Aprendiz"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis."
            />
          </div>

          <CardExp
            year="2015"
            occupation="Aux. Faturamento"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis."
          />
        </div>

        <div className="flex max-w-[632px] items-stretch justify-between gap-6">
          <div className="mt-16">
            <CardExp
              year="2020"
              occupation="Setor Faturamento"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis."
            />
          </div>

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
