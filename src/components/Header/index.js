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
        maxWidth: 960,
        padding: '1.25rem 1rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <p style={{ margin: 0 }}>
        <NavLink to='/' title={title} />
      </p>
      <nav>
        <NavLink to='/about' title='About Me' />
        <NavLink to='/projects' title='Projects' />
        <NavLink to='/blog' title='Blog' />
      </nav>
    </div>
  </header>
)

export default Header
