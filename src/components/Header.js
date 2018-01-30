import { css } from 'gatsby-plugin-glamor'
import Link from 'gatsby-link'
import React from 'react'

const Header = ({title}) => (
  <header
    style={{
      background: 'black'
    }}
  >
    <div
      css={{
        margin: '0 auto',
        height: '4.5rem',
        maxWidth: 960,
        padding: '1.25rem 1rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to='/'
          css={{
            color: 'white',
            textDecoration: 'none',
            ':hover': {
              color: 'green',
              textDecoration: 'underline'
            }
          }}
        >
          {title}
        </Link>
      </p>
      <nav>
        <Link
          to='/about'
          css={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '1rem',
            ':hover': {
              color: 'green',
              textDecoration: 'underline'
            }
          }}
            >
          About Me
        </Link>
        <Link
          to='/projects'
          css={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '1rem',
            ':hover': {
              color: 'green',
              textDecoration: 'underline'
            }
          }}
            >
          Projects
        </Link>
        <Link
          to='/blog'
          css={{
            color: 'white',
            textDecoration: 'none',
            ':hover': {
              color: 'green',
              textDecoration: 'underline'
            }
          }}
            >
          Blog
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
