import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Layout from '../../components/layout/content'
import Section from '../../components/section'
import { Title, Badge, WorkImage } from '../../components/projects-items'

import PROJECTS from './PROJECTS-DETAIL'

const printDescription = (str) => {
  const newText = str.split('\n').map((str, index) => <p className="sub-text-color" key={'p-' + index}>{str}</p >);
  return newText
}

const Project = () => {
  const { name } = useRouter().query
  const [project, setProject] = useState(null)

  useEffect(() => {
    const foundProject = PROJECTS.find(p => p.name === name)
    setProject(foundProject)
  }, [name])

  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Section>
        <Title badge="2023">{project.title}</Title>

        <Section delay={0.2}>
          <div className='flex flex-col gap-2'>
            {printDescription(project.desc)}
          </div>
        </Section>

        <Section delay={0.3}>
          <div className="text-sm sm:text-base flex flex-col sm:gap-1">
            <div>
              <Badge>Website</Badge>
              {project.website == 'Not available' ? <span className='sub-text-color'>{project.website}</span> : (
                <a className='link-color' href={project.website} target="_blank" rel="noreferrer">
                  {project.website}
                </a>
              )}
            </div>
            <div>
              <Badge>Source</Badge>
              {project.source == 'Private Repository' ? <span className='sub-text-color'>{project.source}</span> : (
                <a className='link-color' href={project.source} target="_blank" rel="noreferrer">
                  {project.source}
                </a>
              )}
            </div>
            <div>
              <Badge>Stack</Badge>
              <span className="sub-text-color">{project.stack}</span>
            </div>
          </div>
        </Section>

        <Section delay={0.4}>
          {
            project.images.map(image => (
              <WorkImage src={require('../../public/images/projects/' + image)} alt='project-image' key={image} />
            ))
          }
        </Section>
      </Section>
    </Layout>
  )
}

export default Project
