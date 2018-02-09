import React from 'react'
import Helmet from 'react-helmet'

// TODO: fill this out

export const ProjectTemplate = ({ projectData }) => {
  return (
    <div
      className='project-container'
      css={{
        padding: '3rem 2rem 3rem 2rem',
        maxWidth: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
        >
      <Helmet title={`TTID - ${projectData.frontmatter.title}`} />
      <div className='project'>
        <h1
          css={{
            fontSize: '2rem',
            borderBottom: '2px groove black'
          }}
        >
          {projectData.frontmatter.title}
        </h1>
        <div
          className='project-content'
          dangerouslySetInnerHTML={{ __html: projectData.html }}
          />
      </div>
    </div>
  )
}
export default ProjectTemplate
