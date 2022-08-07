import Banner from '../components/banner'
import Section from '../components/section'
import { Title } from '../components/title'
import { MainBtn } from '../components/button'
import { FaTelegramPlane } from 'react-icons/fa'
import Social from '../components/social'
import Layout from '../components/layout/content'
import {
  AiOutlineGoogle,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai'

const Home = () => {
  return (
    <Layout>
      <div>
        <Section delay={0.2}>
          <Banner />
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
            <MainBtn href="/contact" icon={<FaTelegramPlane size={20} />}>
              Contact
            </MainBtn>
          </div>
        </Section>

        <Section delay={0.4}>
          <Title>Other social media!</Title>
          <Social
            href={'https://github.com/Dope21'}
            icon={<AiOutlineGithub size={30} />}
          >
            @Dope21
          </Social>
          <Social
            href={'linkedin.com/in/thanasak-limsila-99a814225'}
            icon={<AiFillLinkedin size={30} />}
          >
            @Thanasak Limsila
          </Social>
          <Social
            href={
              'https://mail.google.com/mail/u/0/?fs=1&to=thanasaklimsila@gmail.com&tf=cm'
            }
            icon={<AiOutlineGoogle size={30} />}
          >
            Thanasaklimsila@gmail.com
          </Social>
        </Section>
      </div>
    </Layout>
  )
}

export default Home
