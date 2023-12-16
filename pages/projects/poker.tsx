import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'

import image_1 from '../../public/images/projects/poker_01.png'
import image_2 from '../../public/images/projects/poker_02.png'
import image_3 from '../../public/images/projects/poker_03.png'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title badge="2023">Terminal Poker Game</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">
            A Poker Game playable in command line terminal create with Python.
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col sm:gap-1">
            <div className="flex items-center">
              <Badge>Source</Badge>
              <a
                className="link-color"
                href="https://github.com/Dope21/poker-python"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Dope21/poker-python
              </a>
            </div>
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color ">
                Python
              </p>
            </div>
          </div>
        </Section>

        <Section delay={0.4}>
          <WorkImage src={image_1} alt='game-play-ex1' />
          <WorkImage src={image_2} alt='game-play-ex2' />
          <WorkImage src={image_3} alt='game-play-ex3' />
        </Section>
      </Section>
    </Layout>
  )
}

export default Project
