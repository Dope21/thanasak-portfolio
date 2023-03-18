import Layout from '../components/layout/content'
import Section from '../components/section'
import { Title } from '../components/title'
import SkillBanner from '../components/skill-banner'
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiVite,
  SiBootstrap,
  SiJquery,
  SiDjango,
  SiPython,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiAdobephotoshop,
  SiFigma,
  SiAdobexd,
  SiGit,
  SiVim,
} from 'react-icons/si'
import { BsFiletypeScss } from 'react-icons/bs'

const Icon = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="main-text-color">{icon}</span>
      <p className="text-sm mt-2 main-text-color">{name}</p>
    </div>
  )
}

const Skills = () => {
  return (
    <Layout>
      <Section>
        <Title>The Technologies I use!</Title>

        <div className="mt-10">
          <Section delay={0.2}>
            <SkillBanner title="Main Stack" main={true}>
              <Icon icon={<SiTypescript size={30} />} name="TypeScript" />
              <Icon icon={<SiReact size={30} />} name="React" />
              <Icon icon={<SiNextdotjs size={30} />} name="Next" />
              <Icon icon={<SiNodedotjs size={30} />} name="Node" />
              <Icon icon={<SiMongodb size={30} />} name="MongoDB" />
              <Icon icon={<SiTailwindcss size={30} />} name="Tailwind" />
            </SkillBanner>
          </Section>

          <Section delay={0.3}>
            <SkillBanner title="Front-End">
              <Icon icon={<SiVite size={30} />} name="Vite" />
              <Icon icon={<SiBootstrap size={30} />} name="Bootstrap" />
              <Icon icon={<SiJquery size={30} />} name="Jquery" />
              <Icon icon={<BsFiletypeScss size={30} />} name="SCSS" />
            </SkillBanner>
          </Section>

          <Section delay={0.4}>
            <SkillBanner title="Back-End">
              <Icon icon={<SiPython size={30} />} name="Python" />
              <Icon icon={<SiDjango size={30} />} name="Django" />
              <Icon icon={<SiPhp size={30} />} name="PHP" />
              <Icon icon={<SiMysql size={30} />} name="MySQL" />
              <Icon icon={<SiPostgresql size={30} />} name="PostgreSQL" />
            </SkillBanner>
          </Section>

          <Section delay={0.5}>
            <SkillBanner title="Other">
              <Icon icon={<SiGit size={30} />} name="Git" />
              <Icon icon={<SiAdobephotoshop size={30} />} name="Photoshop" />
              <Icon icon={<SiAdobexd size={30} />} name="XD" />
              <Icon icon={<SiFigma size={30} />} name="Figma" />
              <Icon icon={<SiVim size={30} />} name="Vim" />
            </SkillBanner>
          </Section>
        </div>
      </Section>
    </Layout>
  )
}

export default Skills
