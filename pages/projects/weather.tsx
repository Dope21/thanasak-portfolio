import Link from 'next/link'
import Image from 'next/image'
import Article from '../../components/layout/article'
import Section from '../../components/section'
import { Title } from '../../components/title'
import { AiOutlineRight } from 'react-icons/ai'

import image_1 from '../../public/images/projects/weather_01.png'
import image_2 from '../../public/images/projects/weather_02.png'
import image_3 from '../../public/images/projects/weather_03.png'

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
            <span className="mt-1 text-blue-500 dark:text-pink-500">
              <Link href="/projects">
                <a className="flex items-center">
                  projects <AiOutlineRight size={10} className="mx-2" />
                </a>
              </Link>
            </span>
            <Title>Weather Report App</Title>
            <div className="mt-2">
              <Badge>2022</Badge>
            </div>
          </div>
        </Section>

        <Section>
          <p className="sub-text-color">
            A weather report app from OpenWeatherMap API. Support Server Side
            Rendering, Searchbox Suggestion, and Smooth fade in animation.
          </p>
        </Section>

        <Section>
          <div className="text-sm flex flex-col gap-1">
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color ">
                Next.js, Tailwind, OpenWeatherMap API
              </p>
            </div>
            <div className="flex items-center">
              <Badge>Source</Badge>
              <a
                className="link-color"
                href="https://github.com/Dope21/next-weather-app"
              >
                https://github.com/Dope21/next-weather-app/
              </a>
            </div>
            <div className="flex items-center">
              <Badge>Website</Badge>
              <a
                className="link-color"
                href="https://weather-app-three-theta.vercel.app/ "
              >
                https://weather-app-three-theta.vercel.app/
              </a>
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
