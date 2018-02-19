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
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr'
    }}
      >
    {
      props.previous
      ? <Link
        css={{
          gridColumnStart: '1'
        }}
        className='previous'
        to={props.previous.path}
        >
        {`Previous: ${props.previous.title}`}</Link>
      : null
    }
    {
      props.next
      ? <Link
        css={{
          gridColumnStart: '3'
        }}
        className='next'
        to={props.next.path}
        >
        {`Next: ${props.next.title}`}</Link>
      : null
    }
  </div>
)
export default PageNavLinks
