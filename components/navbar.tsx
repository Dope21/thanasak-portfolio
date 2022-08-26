import Link from 'next/link'
import Theme from './theme-button'
import { AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState, useCallback } from 'react'
import Logo from './logo'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const NavLink = ({ href, children, path }) => {
  const active = path === href
  return (
    <li>
      <Link href={href} passHref>
        <a
          className={`navlink-color p-2 rounded-md cursor-pointer transition-all
          ${
            active
              ? 'text-black dark:text-white underline underline-offset-[20px]'
              : ''
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

const Navbar = ({ path }) => {
  const [menu, setMenu] = useState(false)
  const { events } = useRouter()

  const handleSubmenu = () => {
    setMenu(!menu)
  }

  const handleSubLink = useCallback(() => {
    setMenu(false)
  }, [])

  useEffect(() => {
    events.on('routeChangeStart', handleSubLink)
    return () => {
      events.off('routeChangeStart', handleSubLink)
    }
  }, [handleSubLink, events])

  const subMenuAnimate = {
    close: {
      scale: 1,
      opacity: 0,
      y: -30,
      transitionEnd: {
        display: 'none',
      },
    },
    open: {
      display: 'block',
      scale: 1,
      opacity: 1,
      y: 0,
    },
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
                  <a className="py-2 px-5 navlink-color">Home</a>
                </Link>
                <Link href="/projects">
                  <a className="py-2 px-5 navlink-color">Projects</a>
                </Link>
                <Link href="/skills">
                  <a className="py-2 px-5 navlink-color">Skills</a>
                </Link>
                <Link href="/contact">
                  <a className="py-2 px-5 navlink-color">Contact</a>
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
