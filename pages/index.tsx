import Section from '../components/section'
import { Title } from '../components/title'
import { MainBtn, GithubBtn } from '../components/button'
import { FaTelegramPlane, FaFolderOpen } from 'react-icons/fa'
import Layout from '../components/layout/content'
import Socials from '../components/other-socials'

const Home = () => {
  return (
    <Layout>
      <div>
        <Section delay={0.2}>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="font-bold text-3xl md:text-5xl uppercase banner-color">
              thanasak limsila
            </h2>
            <p className="md:text-xl sub-text-color mt-2 tracking-wide">
              Hello, I&apos;m a Full-Stack developer based in Thailand!
            </p>

            <div className="flex items-center justify-center gap-3 mt-6 md:mt-9">
              <GithubBtn />
              <MainBtn href="/projects">
                <FaFolderOpen size={20} />
                Projects
              </MainBtn>
            </div>
          </div>
        </Section>

        <Section delay={0.3}>
          <Title>About Me</Title>
          <p className="sub-text-color tracking-wider">
            I&apos;m currnetly studying in Bachelor degree of Computer
            Engineering. Due to being a college student, I&apos;m not available
            for a full-time job right now.{' '}
            <strong className="main-text-color">
              I&apos;m however interested in freelance projects, part-time job,
              and internship opportunities.
            </strong>
          </p>
          <div className="flex justify-center mt-6">
            <MainBtn href="/contact">
              <FaTelegramPlane size={20} />
              Contact
            </MainBtn>
          </div>
        </Section>

        <Section delay={0.4}>
          <Socials />
        </Section>
      </div>
    </Layout>
  )
}

export default Home
