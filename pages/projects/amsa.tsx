import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge } from '../../components/projects-items'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title>AMSA Thailand Website</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">A website for AMSA Thailand</p>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col sm:gap-1">
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color">
                React.js, Vite.js, Tailwind, Express.js, MongoDB
              </p>
            </div>
            <div className="flex items-center">
              <Badge>website</Badge>
              <a
                className="link-color"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                something
              </a>
            </div>
            <div className="flex items-center"></div>
          </div>
        </Section>
      </Section>
    </Layout>
  )
}

export default Project
