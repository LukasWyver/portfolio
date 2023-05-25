import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavLinkProps {
  path: string
  title: string
}

export default function NavLink({ path, title }: NavLinkProps) {
  const router = useRouter()
  const isActive = router.pathname === path

  return (
    <li
      className={`${
        isActive ? 'text-orange-500' : 'text-zinc-400'
      } uppercase transition-colors ${
        isActive ? 'hover:text-orange-400' : 'hover:text-zinc-300'
      }`}
    >
      <Link href={path}>{title}</Link>
    </li>
  )
}
