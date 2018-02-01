import React from 'react'

const Footer = ({title}) => (
  <footer
    style={{
      background: 'black'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        height: '3.5rem',
        maxWidth: 960,
        padding: '1rem 0.5rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <p style={{
        margin: 0,
        color: 'white'
      }}>
        Copyright © Zechariah Mahler (2018)
      </p>
      <div
        style={{
          display: 'flex',
          color: 'white'
        }}
      >
        <p>You can also check me out here:</p>
        <a
          style={{
            color: 'white',
            marginRight: '1rem',
            marginLeft: '1rem'
          }}
          href='https://github.com/CrowsVeldt'
        >GitHub</a>
        <a
          style={{ color: 'white' }}
          href='https://www.linkedin.com/in/zechariah-webdeveloper/'
        >LinkedIn</a>
      </div>
    </div>
  </footer>
)

export default Footer
