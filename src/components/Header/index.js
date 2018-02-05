import Link from 'gatsby-link'
import NavLink from './NavLink'
import React from 'react'

const Header = ({title}) => (
  <header
    css={{
      height: '4rem',
      display: 'flex',
      justifyContent: 'space-between',
      background: '#cccccc'
    }}
  >
    <Link to='/'
      css={{
        margin: '4px',
        padding: '4px',
        color: 'black',
        fontSize: '1.7rem',
        fontWeight: 'bold',
        width: '9rem',
        borderBottom: '2px groove black',
        borderRight: '2px groove black',
        textAlign: 'center',
        textDecoration: 'none',

        ':active': {
          border: '2px solid black'
        }
      }}
      >
        This Thing I Did
    </Link>
    <nav>
      <ul
        css={{
          display: 'flex',
          flexDirection: 'row',
          listStyleType: 'none'
        }}>
        <li >
          <NavLink to='/about/' title='About Me' />
        </li>
        <li>
          <NavLink to='/projects/' title='Projects' />
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
