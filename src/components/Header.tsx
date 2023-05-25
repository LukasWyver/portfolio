import NavLink from './NavLink'

export function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-center border-b border-zinc-800">
      <ul className="flex items-center gap-8">
        <NavLink path="/" title="Home" />
        <NavLink path="/projetos" title="Projetos" />
      </ul>
    </header>
  )
}
