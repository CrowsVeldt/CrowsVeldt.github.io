import Link from 'gatsby-link'
import React from 'react'

const NavLink = ({title, to}) => (
  <span
    css={{
      height: '64px',
      display: 'flex',

      background: '#cccccc',
      ':hover': {
        background: '#bbbbbb'
      },
      ':active': {
        background: '#aaaaaa'
      }
    }}
  >
    <Link
      to={to}
      css={{
        paddingRight: '0.5rem',
        paddingLeft: '0.5rem',
        paddingTop: 'calc(50% - .75rem)',
        height: '100%',

        display: 'block',

        color: 'black',
        fontSize: '18px',
        fontStyle: 'bold',
        textDecoration: 'none'
      }}
    >
      {title}
    </Link>
  </span>
)

export default NavLink
