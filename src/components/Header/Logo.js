import Link from 'gatsby-link'
import React from 'react'

const Logo = () => (
  <Link to='/'
    css={{
      margin: '4px',
      marginRight: '0px',
      padding: '4px',
      minWidth: '150px',
      maxWidth: '150px',

      fontSize: '27px',
      fontWeight: 'bold',
      textAlign: 'center',
      textDecoration: 'none',
      lineHeight: '24px',

      borderBottom: '2px groove black',
      borderRight: '2px groove black',

      ':active': {
        border: '2px solid black'
      },
      ':hover': {
        color: 'black'
      },
      ':visited': {
        color: 'black'
      }
    }}
  >
      This Thing I Did
  </Link>
)

export default Logo
