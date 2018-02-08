import Logo from './Logo'
import NavLink from './NavLink'
import NavMenu from './NavMenu'
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
    <Logo />
    <nav
      className='larger-screen'
      css={{
        '@media(max-width: 400px)': {
          display: 'none'
        }
      }}
    >
      <ul
        css={{
          margin: 0,
          display: 'flex',
          flexDirection: 'row',
          listStyle: 'none'
        }}>
        <li >
          <NavLink to='/about/' title='About Me' />
        </li>
        <li>
          <NavLink to='/projects/' title='Projects' />
        </li>
      </ul>
    </nav>

    <NavMenu />
  </header>
)

export default Header
