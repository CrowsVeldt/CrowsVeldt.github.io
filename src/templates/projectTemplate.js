import ContentContainer from '../components/ContentContainer'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

export const ProjectTemplate = ({ data, context }) => {
  const {prev, next} = context

  const previousPost = prev.frontmatter ? prev.frontmatter.path : null
  const nextPost = next.frontmatter ? next.frontmatter.path : null

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
      <div
        className='prev-and-next-links'
        css={{
          width: '150px',
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'space-between'

        }}
      >
        {
          previousPost
          ? <Link to={previousPost}>{prev.frontmatter.title}</Link>
          : null
        }
        {
          nextPost
          ? <Link to={nextPost}>{next.frontmatter.title}</Link>
          : null
        }
      </div>
    </ContentContainer>
  )
}
export default ProjectTemplate
