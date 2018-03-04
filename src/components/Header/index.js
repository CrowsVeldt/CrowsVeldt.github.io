import Logo from './Logo'
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
  </header>
)

export default Header
