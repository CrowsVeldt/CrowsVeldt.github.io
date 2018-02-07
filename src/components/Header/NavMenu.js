import NavLink from './NavLink'
import React from 'react'

const MenuButton = () => (
  <button 
    css={{
      color: 'black',
      fontSize: '18px',
      border: 'none',
      minHeight: '64px',

      paddingRight: '1rem',
      paddingLeft: '1rem',
      fontStyle: 'bold',
      background: '#cccccc',

      ':hover': {
        background: '#bbbbbb'
      },
      ':active': {
        background: '#aaaaaa'
      }
    }}
  >
    Menu
  </button>
)

const NavList = ({show}) => (
  <ul
    css={{
      listStyleType: 'none',
      display: show ? 'flex' : 'none',
      flexDirection: 'column'
    }}
  >
    <li >
      <NavLink to='/about/' title='About Me' />
    </li>
    <li>
      <NavLink to='/projects/' title='Projects' />
    </li>
  </ul>
) 


export default class NavMenu extends React.Component {
  state = {
    visible: false 
  } 

  toggleMenu = () => this.setState ({
    visible: !this.state.visible
  })

  render () {
    return (
      <nav
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          zIndex: 1,

          '@media(min-width: 401px)': {
            display: 'none'
          }
        }}
        onClick={this.toggleMenu}
      >
        <MenuButton />
        <NavList show={this.state.visible} />

      </nav>
    )
  }
}
