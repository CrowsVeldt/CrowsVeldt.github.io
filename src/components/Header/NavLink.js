import Link from 'gatsby-link'
import React from 'react'

const NavLink = ({title, to}) => (
  <span
    css={{
      height: '4.5rem',

      display: 'flex',

      background: 'black',
      ':hover': {
        background: 'green'
      },

      fontAlign: 'center',
      lineHeight: '4.5rem'
    }}
  >
    <Link
      to={to}
      css={{
        marginRight: '1rem',
        marginLeft: '1rem',
        height: '100%',
        maxWidth: '100px',

        display: 'block',

        color: 'white',
        textDecoration: 'none'
      }}
    >
      {title}
    </Link>
  </span>
)

export default NavLink
