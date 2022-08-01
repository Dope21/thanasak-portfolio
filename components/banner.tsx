import { GithubBtn, OutlineBtn } from './button'
import { AiOutlineFolderOpen } from 'react-icons/ai'

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-9 text-center">
      <h2 className="font-bold text-3xl md:text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        thanasak limsila
      </h2>
      <p className="md:text-xl text-zinc-500 mt-2 tracking-wide">
        Hello, I&apos;m a Full-Stack developer based in Thailand!
      </p>

      <div className="flex items-center justify-center gap-3 mt-6 md:mt-9">
        <GithubBtn />
        <OutlineBtn href="/projects" icon={<AiOutlineFolderOpen size={20} />}>
          Projects
        </OutlineBtn>
      </div>
    </div>
  )
}

export default Banner
