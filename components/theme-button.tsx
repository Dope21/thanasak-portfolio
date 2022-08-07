import { useEffect, useState } from 'react'
import Image from 'next/image'

import sunIcon from '../public/images/icons/sun.png'
import moonIcon from '../public/images/icons/moon.png'

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const currentTheme = localStorage.getItem('theme')
      if (currentTheme) return currentTheme
    } else return 'light'
  })

  useEffect(() => {
    localStorage.theme = theme
    const body = document.getElementsByTagName('body')[0]
    body.setAttribute('class', localStorage.theme)
  }, [theme])

  const handleTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div
      className="theme-button-color inline-flex relative items-center cursor-pointer select-none w-[70px] h-[38px] rounded-full"
      onClick={handleTheme}
    >
      <div className="absolute h-[34px] w-[34px] bg-white rounded-full top-[2px] left-[2px] transition-all flex items-center justify-center dark:translate-x-[95%]">
        <Image
          width={16}
          height={16}
          src={theme === 'light' ? sunIcon : moonIcon}
          alt="theme-icon"
        />
      </div>
    </div>
  )
}

export default Theme
