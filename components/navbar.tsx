import Link from 'next/link'
import Theme from './theme-button'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import Logo from './logo'

const NavLink = ({ href, children, path }) => {
  const active = path === href
  return (
    <li className="p-2">
      <Link href={href}>
        <a className={`sub-text-color ${active ? 'font-bold text-black' : ''}`}>
          {children}
        </a>
      </Link>
    </li>
  )
}

const Navbar = ({ path }) => {
  const [menu, setMenu] = useState(false)
  const handleSubmenu = () => {
    setMenu(!menu)
  }
  return (
    <nav className="fixed w-full backdrop-blur-sm z-10">
      <div className="p-2 flex w-full items-center justify-between max-w-3xl mx-auto">
        <div className="flex w-full items-center">
          <Logo />
          <ul className="items-center ml-7 hidden sm:flex">
            <NavLink path={path} href="/projects">
              Projects
            </NavLink>
            <NavLink path={path} href="/skills">
              Skills
            </NavLink>
            <NavLink path={path} href="/contact">
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <Theme />
          <div className="block sm:hidden">
            <div
              className="cursor-pointer select-none flex items-center justify-center w-[40px] h-[40px] border border-zinc-300 rounded-md"
              onClick={handleSubmenu}
            >
              <AiOutlineMenu className="text-zinc-400" />
            </div>
            <div
              className={`absolute top-14 right-[9px] w-[220px] h-[165px] drop-shadow-md rounded-md bg-white ${
                menu ? '' : 'hidden'
              }`}
            >
              <div className="h-full flex flex-col text-zinc-500">
                <Link href="/">
                  <a className="py-2 px-5 hover:text-black">Home</a>
                </Link>
                <Link href="/projects">
                  <a className="py-2 px-5 hover:text-black">Projects</a>
                </Link>
                <Link href="/skills">
                  <a className="py-2 px-5 hover:text-black">Skills</a>
                </Link>
                <Link href="/contact">
                  <a className="py-2 px-5 hover:text-black">Contact</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
