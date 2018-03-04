import BlogPostTemplate from './blogPostTemplate'
import React from 'react'

export default function Template ({ data, pathContext }) {
  const { markdownRemark: post } = data
  return <BlogPostTemplate data={post} context={pathContext} />
}

export const query = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`
