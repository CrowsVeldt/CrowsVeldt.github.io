import NavLink from './NavLink'
import React from 'react'

const Header = ({title}) => (
  <header
    style={{
      background: 'black'
    }}
  >
    <div
      css={{
        margin: '0 auto',
        height: '4.5rem',
        padding: '1.25rem 1rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <NavLink to='/' title={title} />
      <nav>
        <NavLink to='/about' title='About Me' />
        <NavLink to='/projects' title='Projects' />
        <NavLink to='/blog' title='Blog' />
      </nav>
    </div>
  </header>
)

export default Header
