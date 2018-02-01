import Link from 'gatsby-link'
import React from 'react'

const NavLink = ({title, to}) => (
  <Link
    to={to}
    css={{
      color: 'white',
      marginRight: '1rem',
      textDecoration: 'none',
      ':hover': {
        color: 'green',
        textDecoration: 'underline'
      }
    }}
  >
    {title}
  </Link>
)

export default NavLink
