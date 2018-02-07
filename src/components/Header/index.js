import Link from 'gatsby-link'
import NavLink from './NavLink'
import React from 'react'

const Header = () => (
  <header
    css={{
      height: '64px',
      display: 'flex',
      justifyContent: 'space-between',
      background: '#cccccc'
    }}
  >
    <Link to='/'
      css={{
        margin: '4px',
        marginRight: '0px',
        padding: '4px',
        minWidth: '150px',
        maxWidth: '150px',

        color: 'hsla(0, 0%, 0%, .9)',
        // fontSize: '1.7rem',
        fontSize: '27px',
        // width: '9rem',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'none',
        lineHeight: '24px',

        borderBottom: '2px groove black',
        borderRight: '2px groove black',

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
