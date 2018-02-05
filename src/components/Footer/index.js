import React from 'react'

const Footer = ({title}) => (
  <footer
    css={{
      height: '2.5rem',
      padding: '0.5rem 0.5rem',
      fontSize: '0.9rem',

      display: 'flex',
      justifyContent: 'space-between',

      background: '#cccccc',
      color: 'black'

    }}
  >
    <p>
        Copyright © Zechariah Mahler (2018)
    </p>
    <div
      className='socialLinks'
      css={{
        display: 'flex',
        '@media(max-width: 520px)': {
          flexDirection: 'column'
        }
      }}
    >
      <a
        css={{
          marginRight: '1rem',
          color: 'black'
        }}
        href='https://github.com/CrowsVeldt'
      >GitHub</a>
      <a
        css={{
          color: 'black'
        }}
        href='https://www.linkedin.com/in/zechariah-webdeveloper/'
      >LinkedIn</a>
    </div>
  </footer>
)

export default Footer
