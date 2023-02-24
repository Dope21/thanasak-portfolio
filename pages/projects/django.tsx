import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'

import image_1 from '../../public/images/projects/django_eyecatching.png'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title badge="2023">Django REST API</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">
            After learning Python for a while, I decided to combine this
            skillwith my proficiency in web development. That is why I plan to
            use Django, a Python framework for building websites, to create an
            API.
          </p>
          <p className="sub-text-color mt-3 sm:pr-9">
            My goal is to create a REST API for the e-commerce website that is
            easy to maintain and scalable. The project also prioritizes security
            by having authentication and authorization mechanisms to protect the
            website and its user&apos;s data.
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col sm:gap-1">
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color ">
                Django, Django REST framework, PostgreSQL
              </p>
            </div>
            <div className="flex items-center">
              <Badge>Source</Badge>
              <a
                className="link-color"
                href="https://github.com/Dope21/ecommerce-api-django"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Dope21/ecommerce-api-django
              </a>
            </div>
            <div className="flex items-center">
              <Badge>Website</Badge>
              <p className="sub-text-color ">Not yet available</p>
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
