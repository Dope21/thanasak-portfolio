import { Title } from '../components/title'
import Article from '../components/layout/article'
import Project from '../components/projects-item'
import Section from '../components/section'

import weather from '../public/images/projects/weather_eyecatching.png'

const Projects = () => {
  return (
    <Article>
      <Section>
        <Title>Some projecsts I&apos;ve done!</Title>

        <Project
          src={weather}
          alt={'weather'}
          title={'Weather Report App'}
          desc={
            'A weather report app from OpenWeatherMap API. Support Server Side Rendering, Searchbox Suggestion, and Smooth fade in animation.'
          }
          href={'/projects/weather'}
        />
      </Section>
    </Article>
  )
}

export default Projects
