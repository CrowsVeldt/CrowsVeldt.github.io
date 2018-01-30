import React from 'react'
import Link from 'gatsby-link'

const Footer = ({title}) => (
  <div
    style={{
      background: 'black'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <p style={{
        margin: 0,
        color: 'white'
      }}>
        Copyright © Zechariah Mahler (2018)
      </p>
    </div>
  </div>
)

export default Footer
