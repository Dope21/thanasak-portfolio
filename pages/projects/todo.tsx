import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'

import image_1 from '../../public/images/projects/todo_01.png'
import image_2 from '../../public/images/projects/todo_02.png'
import image_3 from '../../public/images/projects/todo_03.png'

const Project = () => {
  return (
    <Layout>
      <Section>
        <Title badge="2022">Todo App</Title>

        <Section delay={0.2}>
          <p className="sub-text-color">
            A React Todo application that allows users to create and delete
            tasks. It features support for Dark/Light themes and user
            authentication using a Node.js API with MySQL.{' '}
            <strong className="text-black dark:text-white">
              Since Heroku is not free now API fuctionality include login or
              register will not working.
            </strong>
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col sm:gap-1">
            <div className="flex items-center">
              <Badge>Stack</Badge>
              <p className="sub-text-color ">
                React.js, Tailwind, Express.js, JWT, MySQL
              </p>
            </div>
            <div className="flex items-center">
              <Badge>Source</Badge>
              <a
                className="link-color"
                href="https://tnk-todo-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://tnk-todo-app.netlify.app/
              </a>
            </div>
            <div className="flex items-center">
              <Badge>Website</Badge>
              <a
                className="link-color"
                href="https://github.com/Dope21/react-todo-app"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Dope21/react-todo-app
              </a>
            </div>
          </div>
        </Section>

        <Section delay={0.4}>
          <WorkImage src={image_1} alt={'task-page'} />
          <WorkImage src={image_2} alt={'dark-theme'} />
          <WorkImage src={image_3} alt={'light-theme'} />
        </Section>
      </Section>
    </Layout>
  )
}

export default Project
