import React from 'react'

const Footer = () => (
  <footer
    css={{
      padding: '0.5rem 0.5rem',
      fontSize: '0.9rem',

      display: 'flex',
      justifyContent: 'space-between',

      background: '#cccccc',
      color: 'black'
    }}
  >
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <p
        css={{
          margin: 0
        }}
      >
          Copyright ©
      </p>
      <p
        css={{
          margin: 0
        }}
      >
          Zechariah Mahler (2018)
      </p>
    </div>
    <div
      className='socialLinks'
      css={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <a
        css={{
          marginRight: '1rem',
          color: 'black',
          ':visited': {
            color: 'purple'
          },
          ':hover': {
            color: 'blue'
          }
        }}
        href='https://github.com/CrowsVeldt'
      >GitHub</a>
      <a
        css={{
          color: 'black',
          ':visited': {
            color: 'purple'
          },
          ':hover': {
            color: 'blue'
          }
        }}
        href='https://www.linkedin.com/in/zechariah-webdeveloper/'
      >LinkedIn</a>
    </div>
  </footer>
)

export default Footer
