import { useEffect, useState } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

const Theme = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const bg = document.querySelector('html')
    bg.classList.add(localStorage.theme)
    bg.classList.remove(localStorage.theme === 'light' ? 'dark' : 'light')
    setTheme(localStorage.theme)
  }, [])

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    const bg = document.querySelector('html')
    bg.classList.add(newTheme)
    bg.classList.remove(newTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div
      className="theme-button-color inline-flex relative items-center cursor-pointer select-none w-[70px] h-[38px] rounded-full"
      onClick={handleTheme}
    >
      <div className="absolute h-[34px] w-[34px] bg-white rounded-full top-[2px] left-[2px] transition-all flex items-center justify-center dark:translate-x-[95%]">
        <span className="text-blue-500 dark:text-yellow-500">
          {theme === 'light' ? <BsSunFill /> : <BsMoonStarsFill />}
        </span>
      </div>
    </div>
  )
}

export default Theme
