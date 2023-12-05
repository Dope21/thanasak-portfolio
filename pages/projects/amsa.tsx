import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'

import image_1 from '../../public/images/projects/amsa_eyecatching.png'
import image_2 from '../../public/images/projects/amsa_02.png'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title badge="2023">AMSA Thailand&apos;s website</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">
            Our team developed an official website for The Asian Medical Student's
            Association of Thailand, which serves as a platform for public relations
            and event registration.
          </p>
          <p className="sub-text-color mt-5">
            As a backend developer, my primary responsibility is to create a
            REST API integrated with MongoDB, which provided functionalities for
            managing Events and User information, implementing authentication
            and authorization mechanism to ensure data security on the website.
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col sm:gap-1">
            <div className="flex items-center">
              <Badge>Website</Badge>
              <a className='link-color'
                href="https://amsa-th.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://amsa-th.org/
              </a>
            </div>
            <div className="flex items-center">
              <Badge>Source</Badge>
              <p className="sub-text-color ">Private Repository</p>
            </div>
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color ">
                Next.js, Typescript, Tailwind, MUI, Node.js,
                Express.js, MongoDB
              </p>
            </div>
          </div>
        </Section>

        <Section delay={0.4}>
          <WorkImage src={image_1} alt='home-page' />
          <WorkImage src={image_2} alt='past-events' />
        </Section>
      </Section>
    </Layout>
  )
}

export default Project
