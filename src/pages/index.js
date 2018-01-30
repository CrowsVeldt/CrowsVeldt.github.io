import React from 'react'
import boards from '../res/boards.jpg'

const IndexPage = ({data}) => (
  <div
    className='page-container'
    style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <div
      className='page-content'
      style={{
        margin: 0,
        width: '600px',
        height: 'calc(100vh - 8rem)',
        backgroundColor: 'tan',
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
          margin: '2rem'
        }}
      >
      Hey, Welcome to my site!
      </h1>
      <article
        style={{
          maxWidth: '540px',
          fontWeight: '5',
          textAlign: 'justify'
        }}
        >
        I have been cursed with a constant
        urge to <em>make things</em>. Despite my best efforts I haven't
        managed to make it stop, so I've built this site as a place to put all
        the things I make along the way. Feel free to take a look and let me
        know what you think!
      </article>
    </div>
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
