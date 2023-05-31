import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-[1360px] justify-between  px-4 py-6 ">
        <a href="#hero" className="uppercase">
          Voltar ao Topo
        </a>
        <div className="flex items-center gap-1">
          <GithubIcon />
          <LinkedinIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  )
}
