import ContactForm from '../components/contact-form'
import { Article } from '../components/layout'
import Section from '../components/section'
import { Title } from '../components/title'
import Social from '../components/social'
import {
  AiOutlineGoogle,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai'

const Contact = () => {
  return (
    <Article>
      <Section>
        <Title>Sending your message to me!</Title>

        <Section>
          <ContactForm />
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
      </Section>
    </Article>
  )
}

export default Contact
