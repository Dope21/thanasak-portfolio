import { useState } from 'react'
import Image from 'next/image'

import sunIcon from '../public/images/icons/sun.png'
import moonIcon from '../public/images/icons/moon.png'

const Theme = () => {
  const [theme, setTheme] = useState(false)
  const handleTheme = () => {
    setTheme(!theme)
  }
  return (
    <div
      className="inline-flex relative items-center cursor-pointer select-none w-[50px] h-[28px] rounded-full bg-gradient-to-r from-blue-500 to-green-400"
      onClick={handleTheme}
    >
      <div
        className={`absolute h-6 w-6 bg-white rounded-full left-[2px] top-[2px] transition-all flex items-center justify-center 
        ${theme ? 'translate-x-[95%]' : ''}`}
      >
        <Image
          width={16}
          height={16}
          src={theme ? moonIcon : sunIcon}
          alt="theme-icon"
        />
      </div>
    </div>
  )
}

export default Theme
