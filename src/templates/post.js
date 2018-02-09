import BlogPostTemplate from './blog-post'
import ProjectTemplate from './project'
import React from 'react'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  // I want a different template for 'Blog' and 'Project' pages
  // So far I haven't found a better way of doing that
  switch (post.frontmatter.type) {
    case 'post':
      return <BlogPostTemplate postData={post} />
    case 'project':
      return <ProjectTemplate projectData={post} />
    default:
      return <p>
                You shouldn't be seeing this. The dev messed up somehow.
                Feel free to let him/her know!
             </p>
  }
}

export const query = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        path
        title
        type
        imgUrl
        tools
      }
    }
  }
`
