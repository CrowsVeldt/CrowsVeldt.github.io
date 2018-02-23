import ContentContainer from '../components/Page/ContentContainer'
import React from 'react'

const AboutPage = () => (
  <ContentContainer className='about-page'>
    <h1
      css={{
        borderBottom: '2px groove black'
      }}
    >
      About
    </h1>
    <article
      css={{
        textAlign: 'start'
      }}
    >
      <p>
        My name is Zechariah Mahler. All of my life I've had thoughts and
        opinions, about the things that interest me, sometimes too much for my
        own good. I frequently thought about starting my own blog,
        but never gathered the motivation to do it. about a year ago I started
        learning Front-end Web development, ever since the idea that I should
        "start a blog, already!" has been my constant companion.
        <em>Spoiler Alertd</em>: I did.
      </p>
      <p>
        This blog is a place to store all the ideas that have been bouncing
        around inside my head all this time, on subjects from programming,
        to politics, mental health.
      </p>
      <p>
        Since this blog will be made up of my thoughts and opinions:
      </p>
      <ol>
        <li>
          It is not going to be objective, although I will do my best to avoid
          factual errors.
        </li>
        <li>
          You will see some ideologies being represented more than others,
          although I do not intend to present my view as the only right and
          proper one, and:
       </li>
        <li>
          I always try to keep my mind open to change, as such the opinions
          presented here should also change over time.
        </li>
      </ol>
    </article>
  </ContentContainer>
)

export default AboutPage
