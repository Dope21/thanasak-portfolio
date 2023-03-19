import Layout from '../components/layout/content'
import Section from '../components/section'
import { Title } from '../components/title'
import { SkillBanner, Icon } from '../components/skill-banner'
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

const Skills = () => {
  return (
    <Layout>
      <Section>
        <Title>The Technologies I use!</Title>

        <div className="mt-10">
          <Section delay={0.2}>
            <SkillBanner title="Main Stack" main={true}>
              <Icon
                icon={<SiTypescript size={30} />}
                name="TypeScript"
                color="text-blue-500"
              />
              <Icon
                icon={<SiReact size={30} />}
                name="React"
                color="text-cyan-500"
              />
              <Icon
                icon={<SiNextdotjs size={30} />}
                name="Next"
                color="main-text-color"
              />
              <Icon
                icon={<SiNodedotjs size={30} />}
                name="Node"
                color="text-green-500"
              />
              <Icon
                icon={<SiMongodb size={30} />}
                name="MongoDB"
                color="text-emerald-500"
              />
              <Icon
                icon={<SiTailwindcss size={30} />}
                name="Tailwind"
                color="text-teal-500"
              />
            </SkillBanner>
          </Section>

          <Section delay={0.3}>
            <SkillBanner title="Front-End">
              <Icon
                icon={<SiVite size={30} />}
                name="Vite"
                color="text-amber-500"
              />
              <Icon
                icon={<SiBootstrap size={30} />}
                name="Bootstrap"
                color="text-indigo-500"
              />
              <Icon
                icon={<SiJquery size={30} />}
                name="Jquery"
                color="text-blue-500"
              />
              <Icon
                icon={<BsFiletypeScss size={30} />}
                name="SCSS"
                color="text-pink-500"
              />
            </SkillBanner>
          </Section>

          <Section delay={0.4}>
            <SkillBanner title="Back-End">
              <Icon
                icon={<SiPython size={30} />}
                name="Python"
                color="text-yellow-500"
              />
              <Icon
                icon={<SiDjango size={30} />}
                name="Django"
                color="text-emerald-800"
              />
              <Icon
                icon={<SiPhp size={30} />}
                name="PHP"
                color="text-purple-800"
              />
              <Icon
                icon={<SiMysql size={30} />}
                name="MySQL"
                color="text-blue-500"
              />
              <Icon
                icon={<SiPostgresql size={30} />}
                name="PostgreSQL"
                color="text-indigo-500"
              />
            </SkillBanner>
          </Section>

          <Section delay={0.5}>
            <SkillBanner title="Other">
              <Icon
                icon={<SiGit size={30} />}
                name="Git"
                color="text-orange-500"
              />
              <Icon
                icon={<SiAdobephotoshop size={30} />}
                name="Photoshop"
                color="text-cyan-500"
              />
              <Icon
                icon={<SiAdobexd size={30} />}
                name="XD"
                color="text-fuchsia-500"
              />
              <Icon
                icon={<SiFigma size={30} />}
                name="Figma"
                color="text-violet-500"
              />
              <Icon
                icon={<SiVim size={30} />}
                name="Vim"
                color="text-green-400"
              />
            </SkillBanner>
          </Section>
        </div>
      </Section>
    </Layout>
  )
}

export default Skills
