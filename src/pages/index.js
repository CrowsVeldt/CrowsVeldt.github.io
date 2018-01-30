import React from 'react'
import boards from '../res/boards.jpg'

const IndexPage = ({data}) => (
  <div
    style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
      textShadow: '2px 2px 2px black'
    }}
  >
    <img src={boards} alt='Wood boards'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        height: '100vh',
        width: '100vw'
      }}
    />
    <h1
      style={{
        fontSize: '2rem'
      }}
    >
    Welcome to my site!
    </h1>
    <article
      style={{
        maxWidth: '600px'
      }}
      >
      This is where I showcase all the stuff I make. Let me know what you think!
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
