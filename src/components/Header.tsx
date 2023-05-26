import { useEffect, useState } from 'react'
import NavLink from './NavLink'
import { Sun, Moon } from 'lucide-react'

export function Header() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex gap-2.5 pl-4">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
      </div>

      <ul className="flex items-center gap-8">
        <NavLink path="/" title="Home" />
        <NavLink path="/projetos" title="Projetos" />
      </ul>

      <button onClick={toggleDarkMode} className="pr-4">
        {darkMode ? (
          <Moon size={32} fillRule="inherit" strokeWidth={1} />
        ) : (
          <Sun size={32} fillRule="inherit" strokeWidth={1} />
        )}
      </button>
    </header>
  )
}
