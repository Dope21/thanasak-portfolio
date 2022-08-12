import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'
import Link from 'next/link'

import image_1 from '../../public/images/projects/pos_01.png'
import image_2 from '../../public/images/projects/pos_02.png'
import image_3 from '../../public/images/projects/pos_03.png'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title>Restaurant Management</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">
            A POS dashboard application for a restaurant. Has features to manage
            users, menu, orders, payments, and report sales. This application
            works with a{' '}
            <Link href="/projects/ecom">
              <a className="link-color">Restaurant Website</a>
            </Link>{' '}
            to support online orders from customers.
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col sm:gap-1">
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color ">HTML, SCSS, jQuery, PHP, MySQL</p>
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

        <Section delay={0.4}>
          <WorkImage src={image_1} alt={'first-page'} />
          <WorkImage src={image_2} alt={'mixed-pages'} />
          <WorkImage src={image_3} alt={'responsive'} />
        </Section>
      </Section>
    </Layout>
  )
}

export default Project
