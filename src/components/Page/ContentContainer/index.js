import React from 'react'

const ContentContainer = ({ children }) => (
  <div
    className='content-container'
    css={{
      padding: '3rem 1rem 3rem 1rem',
      width: '100%',
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center'
    }}
   >
    {children}
  </div>
)

export default ContentContainer
