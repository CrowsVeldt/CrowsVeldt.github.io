import Link from 'gatsby-link'
import React from 'react'

const NavLink = ({title, to}) => (
  <span
    css={{
      height: '2.5rem',

      display: 'flex',

      background: 'black',
      ':hover': {
        background: 'green'
      },
      ':active': {
        background: 'darkgreen'
      }
    }}
  >
    <Link
      to={to}
      css={{
        paddingRight: '1rem',
        paddingLeft: '1rem',
        paddingTop: 'calc(50% - .75rem)',
        height: '100%',

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
