import Link from 'next/link'
import Theme from './theme-button'
import Logo from './logo'
import SubNav from './sub-nav'

const NavLink = ({ href, children, path }) => {
  const linkStyle = path === href ? 'text-black dark:text-white underline underline-offset-[20px]' : ''
  return (
    <li>
      <Link href={href} passHref>
        <a className={`navlink-color p-2 rounded-md cursor-pointer transition-all ${linkStyle}`}>
          {children}
        </a>
      </Link>
    </li>
  )
}

const Navbar = ({ path }) => {

  return (
    <nav className="fixed w-full backdrop-blur-sm z-10">
      <div className="p-2 flex w-full items-center justify-between max-w-3xl mx-auto">

        <div className="flex w-full items-center">
          <Logo />

          <ul className="items-center ml-7 hidden sm:flex gap-2">
            <NavLink path={path} href="/projects">
              Projects
            </NavLink>
            <NavLink path={path} href="/contact">
              Contact
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center gap-1">
          <Theme />
          <SubNav />
        </div>

      </div>
    </nav>
  )
}

export default Navbar
