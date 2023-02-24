import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'

import image_1 from '../../public/images/projects/amsa_eyecatching.png'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title badge="2023">AMSA Thailand&apos;s website</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">
            Our team is developing the official website of the Asian Medical
            Student&apos;s Association of Thailand, which serves as a platform
            for public relations and event registration.
          </p>
          <p className="sub-text-color mt-5">
            My primary responsibility was to create a REST API integrated with
            MongoDB, which provided functionalities for managing events and user
            information, implementing authentication and authorization mechanism
            to ensure data security on the website.
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col sm:gap-1">
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color ">
                React.js, Vite.js, Typescript, Tailwind, MUI, Node.js,
                Express.js, MongoDB
              </p>
            </div>
            <div className="flex items-center">
              <Badge>Source</Badge>
              <p className="sub-text-color ">Private Repository</p>
            </div>
            <div className="flex items-center">
              <Badge>Website</Badge>
              <p className="sub-text-color ">Currently unavailable</p>
            </div>
          </div>
        </Section>

        <Section delay={0.4}>
          <WorkImage src={image_1} alt={'task-page'} />
        </Section>
      </Section>
    </Layout>
  )
}

export default Project
