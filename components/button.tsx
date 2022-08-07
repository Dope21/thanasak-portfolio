import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'

export const MainBtn = ({ children, icon, href }) => {
  return (
    <Link href={href}>
      <a className="bg-black text-white inline-flex items-center px-4 py-2 border border-black rounded-md gap-1 tracking-wide dark:text-black dark:bg-white dark:border-white">
        {children}
        {icon}
      </a>
    </Link>
  )
}

export const BlackBtn = ({ children, icon, href }) => {
  return (
    <Link href={href}>
      <a className="bg-black text-white inline-flex items-center px-4 py-2 border border-black rounded-md gap-1 tracking-wide">
        {children}
        {icon}
      </a>
    </Link>
  )
}

export const OutlineBtn = ({ children, icon, href }) => {
  return (
    <Link href={href}>
      <a className="text-zinc-500 inline-flex items-center px-4 py-2 border border-zinc-500 rounded-md gap-1 tracking-wide dark:text-black dark:bg-white dark:border-white">
        {children}
        {icon}
      </a>
    </Link>
  )
}

export const GithubBtn = () => {
  return (
    <a
      href="https://github.com/Dope21"
      rel="noreferrer"
      target="_blank"
      className="bg-black text-white flex items-center px-4 py-2 border border-black rounded-md gap-1 tracking-wide"
    >
      GitHub
      <AiOutlineGithub size={20} />
    </a>
  )
}

export const SubmitBtn = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-black text-white inline-flex items-center px-4 py-2 border tracking-wide border-black rounded-md gap-1 dark:text-black dark:bg-white dark:border-white"
    >
      {children}
    </button>
  )
}
