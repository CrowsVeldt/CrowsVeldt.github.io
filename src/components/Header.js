import React from 'react'
import Link from 'gatsby-link'

const Header = ({title}) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {title}
        </Link>
      </p>
      <nav>
        <Link
          to='/about'
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '1rem'
          }}
            >
          About Me
        </Link>
        <Link
          to='/projects'
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '1rem'
          }}
            >
          Projects
        </Link>
        <Link
          to='/blog'
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
            >
          Blog
        </Link>
      </nav>
    </div>
  </div>
)

export default Header
