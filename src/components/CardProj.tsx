import Image from 'next/image'
import { ChevronRightSquare } from 'lucide-react'

import placeholderImg from '../assets/div_overlay.png'

interface CardProjProps {
  title: string
  subtitle: string
  description: string
  link: string
  isFlip?: boolean
}

export function CardProj({
  description,
  link,
  subtitle,
  title,
  isFlip = false,
}: CardProjProps) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col  gap-9 xl:max-w-7xl xl:flex-row">
      <div className="flex max-h-[400px] w-full max-w-[800px] items-center justify-center overflow-hidden rounded bg-gradient-to-tr from-orange-300 from-20% via-orange-500 via-50% to-70% p-1">
        <Image
          width={800}
          height={400}
          src={placeholderImg}
          alt={subtitle + ' ' + title}
          className="rounded"
        />
      </div>

      <div
        className={`group flex min-h-[300px] flex-1 flex-col justify-between ${
          isFlip && 'xl:order-first'
        }`}
      >
        <div className="">
          <h5 className="mb-6 text-4xl font-bold text-orange-500">{title}</h5>
          <h6 className="mb-4 text-3xl font-light text-zinc-100">{subtitle}</h6>
          <p className="mb-4 text-base font-light text-zinc-400">
            {description}
          </p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-3xl font-light text-zinc-100 group-hover:text-orange-500"
        >
          <span>Ver mais</span>
          <ChevronRightSquare
            size={32}
            fillRule="inherit"
            strokeWidth={1}
            className="group-hover:text-orange-500"
          />
        </a>
      </div>
    </section>
  )
}
