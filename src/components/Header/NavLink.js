import Link from 'gatsby-link'
import React from 'react'

const NavLink = ({title, to}) => (
  <span
    css={{
      height: '64px',
      display: 'flex',
      justifyContent: 'center',

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
        height: '64px',

        display: 'block',

        color: 'black',
        fontSize: '18px',
        fontStyle: 'bold',
        textDecoration: 'none',
        lineHeight: '64px',

        ':visited': {
          color: 'black'
        }

      }}
    >
      {title}
    </Link>
  </span>
)

export default NavLink
