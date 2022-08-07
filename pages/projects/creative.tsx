import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'

import image_1 from '../../public/images/projects/creative_01.png'
import image_2 from '../../public/images/projects/creative_02.png'
import image_3 from '../../public/images/projects/creative_03.png'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title>Creative Agency</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">
            A Bootstrap responsive landing page with Semantic HTML
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col gap-1">
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color ">Bootstrap 5, SCSS, jQuery</p>
            </div>
            <div className="flex items-center">
              <Badge>Source</Badge>
              <a
                className="link-color"
                href="https://github.com/Dope21/bootstarp-creative-agency"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Dope21/bootstarp-creative-agency
              </a>
            </div>
            <div className="flex items-center">
              <Badge>Website</Badge>
              <a
                className="link-color"
                href="https://thanasak-demo-creative-agency.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://thanasak-demo-creative-agency.netlify.app/
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
