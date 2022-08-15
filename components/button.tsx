import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'

export const MainBtn = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="button button-color-main">{children}</a>
    </Link>
  )
}

export const OutlineBtn = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="button button-color-outline">{children}</a>
    </Link>
  )
}

export const SubmitBtn = ({ children }) => {
  return (
    <button type="submit" className="button button-color-main">
      {children}
    </button>
  )
}

export const GithubBtn = () => {
  return (
    <a
      href="https://github.com/Dope21"
      rel="noreferrer"
      target="_blank"
      className="button button-color-outline"
    >
      <AiOutlineGithub size={20} />
      GitHub
    </a>
  )
}
