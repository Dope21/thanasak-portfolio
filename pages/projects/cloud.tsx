import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'

import image_1 from '../../public/images/projects/cloud_01.png'
import image_2 from '../../public/images/projects/cloud_02.png'
import image_3 from '../../public/images/projects/cloud_03.png'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title>ToDo App</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">
            A responsive website with react and tailwind
          </p>
        </Section>

        <Section delay={0.3}>
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
        <Section delay={0.4}>
          <WorkImage src={image_1} alt={'task-page'} />
          <WorkImage src={image_2} alt={'dark-theme'} />
          <WorkImage src={image_3} alt={'light-theme'} />
        </Section>
      </Section>
    </Layout>
  )
}

export default Project
