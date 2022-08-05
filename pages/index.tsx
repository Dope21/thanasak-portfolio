import Banner from '../components/banner'
import Section from '../components/section'
import { Title } from '../components/title'
import { MainBtn } from '../components/button'
import { FaTelegramPlane } from 'react-icons/fa'
import Social from '../components/social'
import {
  AiOutlineGoogle,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai'
import Article from '../components/layout/article'

const Home = () => {
  return (
    <Article>
      <div>
        <Section>
          <Banner />
        </Section>

        <Section>
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

        <Section>
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
    </Article>
  )
}

export default Home
