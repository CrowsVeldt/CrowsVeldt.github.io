import React from 'react'
import Helmet from 'react-helmet'

export const ProjectTemplate = ({ projectData }) => {
  return (

    <div className='project'
      css={{
        padding: '3rem 1rem 3rem 1rem',
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <Helmet title={`TTID - ${projectData.frontmatter.title}`} />
      <h1
        css={{
          borderBottom: '2px groove black',
          textAlign: 'center'
        }}
      >
        {projectData.frontmatter.title}
      </h1>
      <p>
        first commit: {projectData.frontmatter.firstCommit},
        last commit: {projectData.frontmatter.lastCommit}
      </p>
      <a href={projectData.frontmatter.projectUrl}>Check it out here!</a>
      {/* <img src={projectData.frontmatter.img} alt={`Image: ${projectData.frontmatter.title}`} /> */}
      <p>Tools I used: {projectData.frontmatter.tools.join(', ')}</p>
      <div
        className='project-content'
        css={{
          textAlign: 'start'
        }}
        dangerouslySetInnerHTML={{ __html: projectData.html }}
        />
    </div>
  )
}
export default ProjectTemplate
