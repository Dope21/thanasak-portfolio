import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'

export const MainBtn = ({ children, icon, href }) => {
  return (
    <Link href={href}>
      <a className="button button-color-main">
        {icon}
        {children}
      </a>
    </Link>
  )
}

export const OutlineBtn = ({ children, icon, href }) => {
  return (
    <Link href={href}>
      <a className="button button-color-outline">
        {icon}
        {children}
      </a>
    </Link>
  )
}

export const SubmitBtn = ({ children }) => {
  return (
    <button type="submit" className="button button-color-outline">
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
