interface CardExpProps {
  year: string
  occupation: string
  description: string
  isCurrent?: boolean
}

export function CardExp({
  year,
  occupation,
  description,
  isCurrent = false,
}: CardExpProps) {
  return (
    <div className="relative mx-auto flex h-[320px] flex-1 flex-col justify-center rounded bg-gradient-to-bl from-white to-zinc-50 px-4 drop-shadow-xl dark:from-zinc-800 dark:to-zinc-900 ">
      <h6 className="mb-6 text-3xl font-bold text-orange-500">{year}</h6>

      {isCurrent && (
        <div className="absolute right-4 top-4 rounded-md bg-green-400 px-2 py-1 font-bold text-zinc-900">
          Atual
        </div>
      )}
      <strong className="mb-4 text-2xl font-light text-zinc-500 dark:text-zinc-100">
        {occupation}
      </strong>
      <p className="text-base font-light text-zinc-400">{description}</p>
    </div>
  )
}
