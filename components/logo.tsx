import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <a className="font-bold text-black text-sm md:text-lg dark:text-white">
        THANASAK.DEV
      </a>
    </Link>
  )
}

export default Logo
