import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'
import Link from 'next/link'

import image_1 from '../../public/images/projects/ecom_01.png'
import image_2 from '../../public/images/projects/ecom_02.png'
import image_3 from '../../public/images/projects/ecom_03.png'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title badge="2022">Restaurant Website</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">
            An e-commerce website for a restaurant,
            allowing customers to create accounts, explore the menu, and place
            online food orders. This website also come with{' '}
            <Link href="/projects/pos">
              <a className="link-color">a POS web application </a>
            </Link>{' '}
            for management.
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col sm:gap-1">
            <div className="flex items-center">
              <Badge>Website</Badge>
              <p className="sub-text-color">Not available</p>
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
              <Badge>Stack</Badge>
              <p className="sub-text-color ">
                Bootstrap 5, SCSS, jQuery, PHP, MySQL
              </p>
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
