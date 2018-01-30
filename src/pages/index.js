import React from 'react'
import boards from '../res/boards.jpg'

const IndexPage = ({data}) => (
  <div
    style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <img src={boards} alt='Wood boards'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        height: '100vh',
        width: '100vw',
        opacity: '0.9'
      }}
    />
    <h1
      style={{
        fontSize: '2rem',
        textShadow: '0px 0px 25px white'
      }}
    >
    Hey, Welcome to my site!
    </h1>
    <article
      style={{
        maxWidth: '600px',
        backgroundColor: '#806517',
        border: '1px solid black',
        textAlign: 'center',
        boxShadow: '2px 2px 10px black'
      }}
      >
      My name is Zechariah Mahler, and I have been cursed with a constant urge
      to <em>make things</em>, and despite my best efforts I havn't managed
      to make it go away. So I've given up, and I'm making this site as place
      to put all the things I make along the way. Feel free to take a look
      and let me know what you think!
    </article>
  </div>
  )

export default IndexPage

export const frontPageQuery = graphql`
  query FrontPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
