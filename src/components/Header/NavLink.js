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
        paddingRight: '1rem',
        paddingTop: 'calc(50% - .75rem)',
        height: '100%',

        display: 'block',

        color: 'black',
        textAlign: 'center',
        textDecoration: 'none'
      }}
    >
      {title}
    </Link>
  </span>
)

export default NavLink
