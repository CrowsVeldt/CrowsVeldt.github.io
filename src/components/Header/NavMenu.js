import NavLink from './NavLink'
import React from 'react'

const MenuButton = () => (
  <button 
    css={{
      color: 'black',
      fontSize: '18px',
      border: 'none',
      minHeight: '64px',
      width: '100px',

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
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: show ? 'flex' : 'none',
      flexDirection: 'column'
    }}
  >
    <li>
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

  closeMenu = (e) => {
    if (this.state.visible && !this.node.contains(e.target)) {
      this.setState ({
        visible: false
      })
    }
  }

  
  componentDidMount = () => {
    document.body.addEventListener('click', this.closeMenu)
  }

  componentWillUnmount = () => {
    document.body.removeEventListener('click', this.closeMenu)
  }
  

  render () {
    return (
      <nav
        css={{
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,

          '@media(min-width: 401px)': {
            display: 'none'
          }

        }}
        ref={node => this.node = node}
        onClick={this.toggleMenu}
      >
        <MenuButton />
        <NavList show={this.state.visible} />

      </nav>
    )
  }
}
