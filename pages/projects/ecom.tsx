import Link from 'next/link'
import Image from 'next/image'
import { Article } from '../../components/layout'
import Section from '../../components/section'
import { Title } from '../../components/title'
import { AiOutlineRight } from 'react-icons/ai'

import image_1 from '../../public/images/projects/ecom_01.png'
import image_2 from '../../public/images/projects/ecom_02.png'
import image_3 from '../../public/images/projects/ecom_03.png'

const Badge = ({ children }) => {
  return (
    <span className="mx-2 text-xs px-2 flex items-center justify-center rounded-xl font-bold bg-emerald-200 text-emerald-600 dark:bg-yellow-100 dark:text-yellow-800">
      {children}
    </span>
  )
}

const WorkImage = ({ src, alt }) => {
  return (
    <div className="max-w-[480px] mb-4 flex mx-auto shadow-lg">
      <Image src={src} alt={alt} className=" rounded-md" />
    </div>
  )
}

const Project = () => {
  return (
    <Article>
      <Section>
        <Section>
          <div className="flex">
            <span className="mt-1">
              <Link href="/projects">
                <a className="link-color flex items-center">
                  projects <AiOutlineRight size={10} className="mx-2" />
                </a>
              </Link>
            </span>
            <Title>Restaurant Website</Title>
            <div className="mt-2">
              <Badge>2021-2022</Badge>
            </div>
          </div>
        </Section>

        <Section>
          <p className="sub-text-color">
            A E-commerce website for a restaurant. Users can register and login
            to order food online through this website.
          </p>
        </Section>

        <Section>
          <div className="text-sm sm:text-base flex flex-col gap-1">
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color ">
                Bootstrap 5, SCSS, jQuery, PHP, MySQL
              </p>
            </div>
            <div className="flex items-center">
              <Badge>Source</Badge>
              <a
                className="link-color"
                href="https://github.com/Dope21/restaurant-management"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Dope21/restaurant-management
              </a>
            </div>
            <div className="flex items-center">
              <Badge>Website</Badge>
              <p className="sub-text-color">Not available</p>
            </div>
          </div>
        </Section>

        <WorkImage src={image_1} alt={'first-page'} />
        <WorkImage src={image_2} alt={'mixed-pages'} />
        <WorkImage src={image_3} alt={'responsive'} />
      </Section>
    </Article>
  )
}

export default Project
