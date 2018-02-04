import NavLink from './NavLink'
import React from 'react'

const Header = ({title}) => (
  <header
    css={{
      height: '3rem',
      display: 'flex',
      justifyContent: 'end',
      background: 'black'
    }}
  >
    <nav
      css={{
        alignSelf: 'stretch'
      }}
    >
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
        <li>
          <NavLink to='/' title='Blog' />
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
