import Image from 'next/image'
import Section from './section'
import { BlackBtn } from './button'
import { AiOutlineRight } from 'react-icons/ai'

const Project = ({ src, alt, title, desc, href }) => {
  return (
    <Section>
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-10 relative">
        <div className="max-w-[275px] max-h-[175px] flex items-center justify-center  shadow-lg">
          <Image
            src={src}
            alt={alt}
            placeholder="blur"
            className="rounded-md"
          />
        </div>

        <div>
          <h4 className="text-xl main-text-color font-semibold mb-[10px]">
            {title}
          </h4>
          <p className="sub-text-color mb-4">{desc}</p>
          <BlackBtn icon={<AiOutlineRight size={18} />} href={href}>
            View project
          </BlackBtn>
        </div>
      </div>
    </Section>
  )
}

export default Project
