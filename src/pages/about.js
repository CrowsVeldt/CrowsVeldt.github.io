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
        Hi! My name is Zechariah Mahler (Just call me Zack). I'm just a guy
        who's always had an urge to <em>make</em> things.
        I honestly spent most of my life so scared of criticism that I avoided
        doing anything creative, but I'm tired of that. So I'm putting this out
        there, and damn the consequences.

      </p>
      <p>
        I'm teaching myself Front-end Web development. I started investigating
        this career just because I wanted a better job, but to my great good
        fortune: I found out I actually enjoy it!
      </p>
      <p>
       Besides creating things; I also want to make an actual difference in the
       world. That's the goal I am going to be working towards as I make my way,
       in the tech industry and in life. So I'm going to write about things
       that may seem irrelevent to the web, or high-tech in general.
      </p>
    </article>
  </div>
)

export default AboutPage
