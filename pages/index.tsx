import Banner from '../components/banner'
import Section from '../components/section'
import { Heading } from '../components/title'
import { BlackBtn } from '../components/button'
import { FaTelegramPlane } from 'react-icons/fa'
import Social from '../components/social'
import {
  AiOutlineGoogle,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai'

const Home = () => {
  return (
    <div>
      <Section>
        <Banner />
      </Section>

      <Section>
        <Heading>About Me</Heading>
        <p className="text-zinc-500">
          I&apos;m currnetly studying in Bachelor degree of Computer
          Engineering. Due to being a college student, I&apos;m not available
          for a full-time job right now.{' '}
          <span className="font-bold text-black dark:text-white">
            I&apos;m however interested in freelance projects, part-time job,
            and internship opportunities.
          </span>
        </p>
        <div className="flex justify-center mt-6">
          <BlackBtn href="/contact" icon={<FaTelegramPlane size={20} />}>
            Contact
          </BlackBtn>
        </div>
      </Section>

      <Section>
        <Heading>Other social media!</Heading>
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
  )
}

export default Home
