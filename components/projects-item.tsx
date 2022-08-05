import Image from 'next/image'
import { BlackBtn } from './button'
import { AiOutlineRight } from 'react-icons/ai'

const Project = ({ src, alt, title, desc, href }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-10 relative mb-12">
      <div className="max-w-[275px] max-h-[175px] flex items-center justify-center  shadow-lg">
        <Image src={src} alt={alt} placeholder="blur" className="rounded-md" />
      </div>

      <div className="w-full text-center sm:text-left">
        <h4 className="text-xl main-text-color font-semibold mb-[10px]">
          {title}
        </h4>
        <p className="sub-text-color mb-4">{desc}</p>
        <BlackBtn icon={<AiOutlineRight size={18} />} href={href}>
          View project
        </BlackBtn>
      </div>
    </div>
  )
}

export default Project
