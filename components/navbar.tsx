import Link from 'next/link'
import Theme from './theme-button'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import Logo from './logo'
import { motion } from 'framer-motion'

const NavLink = ({ href, children, path }) => {
  const active = path === href
  return (
    <li>
      <Link href={href}>
        <a
          className={`main-text-color p-2 rounded-md cursor-pointer hover:underline hover:underline-offset-2
          ${active ? 'bg-teal-400 dark:bg-red-400' : ''}`}
        >
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

  const subMenuAnimate = {
    close: { scale: 0, opacity: 0, y: -100, x: 100 },
    open: { scale: 1, opacity: 1, y: 0, x: 0 },
  }

  const subMenuSpring = { type: 'spring', damping: 25, stiffness: 500 }

  return (
    <nav className="fixed w-full backdrop-blur-sm z-10">
      <div className="p-2 flex w-full items-center justify-between max-w-3xl mx-auto">
        <div className="flex w-full items-center">
          <Logo />
          <ul className="items-center ml-7 hidden sm:flex gap-2">
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
            <motion.div
              variants={subMenuAnimate}
              transition={subMenuSpring}
              animate={menu ? 'open' : 'close'}
              className="absolute top-14 right-[9px] w-[220px] h-[165px] drop-shadow-md rounded-lg bg-white dark:bg-neutral-800"
            >
              <div className="h-full flex flex-col text-zinc-500 ">
                <Link href="/">
                  <a className="py-2 px-5 sub-text-color hover:main-text-color">
                    Home
                  </a>
                </Link>
                <Link href="/projects">
                  <a className="py-2 px-5 sub-text-color hover:main-text-color">
                    Projects
                  </a>
                </Link>
                <Link href="/skills">
                  <a className="py-2 px-5 sub-text-color hover:main-text-color">
                    Skills
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="py-2 px-5 sub-text-color hover:main-text-color">
                    Contact
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
