import Image from 'next/image'
import Link from 'next/link'
import { MainBtn } from './button'
import { AiOutlineRight } from 'react-icons/ai'

export const BlogItem = ({ src, alt, title, desc, href }) => {
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
        <MainBtn href={href}>
          View project
          <AiOutlineRight size={18} />
        </MainBtn>
      </div>
    </div>
  )
}

export const Title = ({ children, badge }) => {
  return (
    <div className="flex items-center mb-5">
      <Link href="/projects">
        <a className="link-color flex items-center">
          Projects <AiOutlineRight size={10} className="mx-2" />
        </a>
      </Link>
      <h3 className="text-xl font-bold main-text-color">{children}</h3>
      <Badge>{badge}</Badge>
    </div>
  )
}

export const Badge = ({ children }) => {
  return (
    <span className="badge-color uppercase mx-2 text-xs px-2 py-[1px] flex items-center justify-center rounded-xl font-bold">
      {children}
    </span>
  )
}

export const WorkImage = ({ src, alt }) => {
  return (
    <div className="max-w-[480px] mb-4 flex mx-auto shadow-lg">
      <Image src={src} alt={alt} className=" rounded-md" />
    </div>
  )
}
