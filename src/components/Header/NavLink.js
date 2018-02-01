import Link from 'gatsby-link'
import React from 'react'

const NavLink = ({title, to}) => (
  <span
    css={{
      height: '4.5rem',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'black',
      ':hover': {
        background: 'green'
      }
    }}
  >
    <Link
      to={to}
      css={{
        color: 'white',
        marginRight: '1rem',
        marginLeft: '1rem',
        textDecoration: 'none'
      }}
    >
      {title}
    </Link>
  </span>
)

export default NavLink
