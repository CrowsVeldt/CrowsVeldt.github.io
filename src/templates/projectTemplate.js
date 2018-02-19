import ContentContainer from '../components/Page/ContentContainer'
import PageNavLinks from '../components/Page/PageNavLinks'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

export const ProjectTemplate = ({ data, context }) => {
  const previousPage = context.prev.frontmatter
  const nextPage = context.next.frontmatter

  return (

    <ContentContainer className='project'>
      <Helmet title={`TTID - ${data.frontmatter.title}`} />
      <h1
        css={{
          borderBottom: '2px groove black',
          textAlign: 'center'
        }}
      >
        {data.frontmatter.title}
      </h1>
      <p>
        first commit: {data.frontmatter.firstCommit},
        last commit: {data.frontmatter.lastCommit}
      </p>
      <a href={data.frontmatter.projectUrl}>Check it out here!</a>
      {/* <img src={data.frontmatter.img} alt={`Image: ${data.frontmatter.title}`} /> */}
      <p>Tools I used: {data.frontmatter.tools.join(', ')}</p>
      <div
        className='project-content'
        css={{
          textAlign: 'start'
        }}
        dangerouslySetInnerHTML={{ __html: data.html }}
        />
      <PageNavLinks previous={previousPage} next={nextPage} />
    </ContentContainer>
  )
}
export default ProjectTemplate
