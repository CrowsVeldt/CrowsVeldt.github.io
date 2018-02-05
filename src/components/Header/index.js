import NavLink from './NavLink'
import React from 'react'

const Header = ({title}) => (
  <header
    css={{
      height: '4rem',
      display: 'flex',
      justifyContent: 'end',
      background: '#cccccc'
    }}
  >
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
