import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'

import image_1 from '../../public/images/projects/weather_01.png'
import image_2 from '../../public/images/projects/weather_02.png'
import image_3 from '../../public/images/projects/weather_03.png'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title badge="2022">Weather Report App</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">
            A weather report app from OpenWeatherMap API. Support Server Side
            Rendering, Searchbox Suggestion, and Smooth fade in animation.
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col sm:gap-1">
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color">
                Next.js, Tailwind, OpenWeatherMap API
              </p>
            </div>
            <div className="flex items-center">
              <Badge>Source</Badge>
              <a
                className="link-color"
                href="https://github.com/Dope21/next-weather-app"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Dope21/next-weather-app/
              </a>
            </div>
            <div className="flex items-center">
              <Badge>live</Badge>
              <a
                className="link-color"
                href="https://weather-app-three-theta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://weather-app-three-theta.vercel.app/
              </a>
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
