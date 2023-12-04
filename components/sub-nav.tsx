import { useState } from 'react'
import Link from 'next/link'

import { AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'

const SubLink = ({ children, path, onClick }) => {
  return (
    <Link href={path}>
      <a className="py-2 px-5 navlink-color" onClick={onClick}>{children}</a>
    </Link>
  )
}

const SubNav = () => {

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

  const [menu, setMenu] = useState(false)

  const toggleSubmenu = () => {
    setMenu(!menu)
  }

  const hideSubmenu = () => {
    setMenu(false)
  }

  return (
    <div className="block sm:hidden">
      <div
        className="cursor-pointer select-none flex items-center justify-center w-[40px] h-[40px] border border-zinc-300 rounded-md"
        onClick={toggleSubmenu}
      >
        <AiOutlineMenu className="text-zinc-400" />
      </div>

      <motion.div
        variants={subMenuAnimate}
        transition={subMenuSpring}
        animate={menu ? 'open' : 'close'}
        className="absolute top-14 right-[9px] w-[220px] drop-shadow-md rounded-lg bg-white dark:bg-neutral-800"
      >
        <div className="h-full flex flex-col text-zinc-500 ">
          <SubLink path="/" onClick={hideSubmenu}>Home</SubLink>
          <SubLink path="/projects" onClick={hideSubmenu}>Projects</SubLink>
          <SubLink path="/contact" onClick={hideSubmenu}>Contact</SubLink>
        </div>
      </motion.div>

    </div>
  )
}

export default SubNav
