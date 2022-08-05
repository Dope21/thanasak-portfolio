import Link from 'next/link'
import Image from 'next/image'
import { Article } from '../../components/layout'
import Section from '../../components/section'
import { Title } from '../../components/title'
import { AiOutlineRight } from 'react-icons/ai'

import image_1 from '../../public/images/projects/cloud_01.png'
import image_2 from '../../public/images/projects/cloud_02.png'
import image_3 from '../../public/images/projects/cloud_03.png'

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
            <Title>Cloud</Title>
            <div className="mt-2">
              <Badge>2022</Badge>
            </div>
          </div>
        </Section>

        <Section>
          <p className="sub-text-color">
            A responsive website with react and tailwind
          </p>
        </Section>

        <Section>
          <div className="text-sm sm:text-base flex flex-col gap-1">
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color ">React.js, Tailwind</p>
            </div>
            <div className="flex items-center">
              <Badge>Source</Badge>
              <a
                className="link-color"
                href="https://github.com/Dope21/react-website-cloud"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Dope21/react-website-cloud
              </a>
            </div>
            <div className="flex items-center">
              <Badge>Website</Badge>
              <a
                className="link-color"
                href="https://thanasak-demo-cloud.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://thanasak-demo-cloud.netlify.app/
              </a>
            </div>
          </div>
        </Section>

        <WorkImage src={image_1} alt={'task-page'} />
        <WorkImage src={image_2} alt={'dark-theme'} />
        <WorkImage src={image_3} alt={'light-theme'} />
      </Section>
    </Article>
  )
}

export default Project
