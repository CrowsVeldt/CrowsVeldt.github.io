import Link from 'gatsby-link'
import React from 'react'

const PageNavLinks = (props) => (
  (!props.previous && !props.next)
  ? null
  : <div
    className='prev-and-next-links'
    css={{
      width: '80vw',
      maxWidth: '800px',
      justifyContent: 'center',
      display: 'flex'
    }}
      >
    {
      props.previous
      ? <Link className='previous' to={props.previous.path}>{props.previous.title}</Link>
      : null
    }
    {
      props.next
      ? <Link className='next' to={props.next.path}>{props.next.title}</Link>
      : null
    }
  </div>
)
export default PageNavLinks
