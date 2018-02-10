import React from 'react'

const AboutPage = () => (
  <div
    className='page-container'
    css={{
      padding: '3rem 2rem 3rem 2rem',
      maxWidth: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <h1
      css={{
        fontSize: '2rem',
        borderBottom: '2px groove black'
      }}
    >
      Who I Am
    </h1>
    <article
      css={{
        margin: '.5rem',
        padding: '10px'
      }}
    >
      <p>
        Hi! My name is Zechariah Mahler (you can call me Zack).
        I'm currently learning Front-end Web development, I've been at it seriously for
        about a year now, although life has gotten in the way more than once.
        I'm building this site so I have one place to put all the stuff I make,
        feel free to take a look and tell me what you think!
      </p>
    </article>
  </div>
)

export default AboutPage
