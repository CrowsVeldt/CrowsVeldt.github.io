import React from 'react'

const AboutPage = () => (
  <div
    className='page-container'
    css={{
      padding: '3rem 2rem 3rem 2rem',
      maxWidth: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}
  >
    <h1
      css={{
        fontSize: '2rem',
        borderBottom: '2px groove black'
      }}
    >
      About Me
    </h1>
    <article
      css={{
        margin: '.5rem',
        padding: '10px',
        border: '1px solid black'
      }}
    >
      <h2
        css={{
          fontSize: '1.3rem',
          borderBottom: '2px groove black'
        }}
      >
        Where I'm from
      </h2>
      <p>paragraph</p>
    </article>
    <article
      css={{
        margin: '.5rem',
        padding: '10px',
        border: '1px solid black'
      }}
    >
      <h2
        css={{
          fontSize: '1.3rem',
          borderBottom: '2px groove black'
        }}
      >
        What I like
      </h2>
      <p>paragraph</p>
    </article>
    <article
      css={{
        margin: '.5rem',
        padding: '10px',
        border: '1px solid black'
      }}
    >
      <h2
        css={{
          fontSize: '1.3rem',
          borderBottom: '2px groove black'
        }}
      >
        What I care about
      </h2>
      <p>paragraph</p>
    </article>
  </div>
)

export default AboutPage
