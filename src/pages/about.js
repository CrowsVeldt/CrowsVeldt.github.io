import ContentContainer from '../components/Page/ContentContainer'
import React from 'react'

const AboutPage = () => (
  <ContentContainer className='about-page'>
    <h1
      css={{
        borderBottom: '2px groove black'
      }}
    >
      Who I Am
    </h1>
    <article
      css={{
        textAlign: 'start'
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
  </ContentContainer>
)

export default AboutPage
