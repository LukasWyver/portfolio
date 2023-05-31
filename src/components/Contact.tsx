export function Contact() {
  return (
    <section className="mx-auto w-full max-w-[1360px] px-4 pb-28">
      <h2 className="max-w-2xl text-5xl font-bold text-orange-500 sm:text-6xl md:text-7xl">
        #Precisa dos <br className="hidden sm:block" /> meus serviços?
      </h2>
      <h4 className="mt-2 max-w-3xl text-3xl font-light text-zinc-500 dark:text-orange-50 sm:text-4xl md:text-5xl">
        Preencha o formulário abaixo que irei retornar
      </h4>

      <form className="mx-auto mt-32 max-w-5xl space-y-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <input
            id="name"
            placeholder="Nome"
            className="w-full rounded border-2 border-orange-500 bg-zinc-200 px-2.5 py-2 outline-1 outline-offset-0 outline-zinc-600 ring-0 placeholder:font-semibold placeholder:text-orange-500 placeholder-shown:border-zinc-400 dark:bg-zinc-800 dark:outline-zinc-200 placeholder-shown:dark:border-zinc-700"
          />

          <input
            id="email"
            placeholder="E-mail"
            className="w-full rounded border-2 border-orange-500 bg-zinc-200 px-2.5 py-2 outline-1 outline-offset-0 outline-zinc-600 ring-0 placeholder:font-semibold placeholder:text-orange-500 placeholder-shown:border-zinc-400 dark:bg-zinc-800 dark:outline-zinc-200 placeholder-shown:dark:border-zinc-700"
          />
        </div>
        <textarea
          id="message"
          rows={5}
          placeholder="Mensagem"
          className="w-full resize-none rounded border-2 border-orange-500 bg-zinc-200 px-2.5 py-2 outline-1 outline-offset-0 outline-zinc-600 ring-0 placeholder:font-semibold placeholder:text-orange-500 placeholder-shown:border-zinc-400 dark:bg-zinc-800 dark:outline-zinc-200 placeholder-shown:dark:border-zinc-700"
        ></textarea>

        <button
          type="submit"
          className="ml-auto flex w-full max-w-xs justify-center rounded bg-orange-500 px-3 py-2 text-center text-2xl font-light"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
