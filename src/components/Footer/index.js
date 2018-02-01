import React from 'react'

const Footer = ({title}) => (
  <footer
    css={{
      minHeight: '2.5rem',
      padding: '0.5rem 0.5rem',

      display: 'flex',
      justifyContent: 'space-between',

      background: 'black',
      color: 'white'

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
          marginRight: '1rem',
          flexDirection: 'column'
        }
      }}
    >
      <a
        css={{
          marginRight: '1rem',
          color: 'white'
        }}
        href='https://github.com/CrowsVeldt'
      >GitHub</a>
      <a
        css={{
          marginRight: '1rem',
          color: 'white'
        }}
        href='https://www.linkedin.com/in/zechariah-webdeveloper/'
      >LinkedIn</a>
    </div>
  </footer>
)

export default Footer
