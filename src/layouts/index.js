import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import './index.css'
import boards from '../res/boards.jpg'
import Footer from '../components/Footer/index'
import Header from '../components/Header/index'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
    />
    <Header
      title='Front Page'
    />
    <div
      className='boards'
      css={{
        margin: '0 auto',
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        backgroundImage: `url(${boards})`,
        backgroundRepeat: 'repeat'
      }}
    >
      <div
        className='page-contents-container'
        css={{
          margin: 0,
          width: '80vw',
          minHeight: 'calc(100vh - 5.5rem)',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          backgroundColor: '#dddddd',
          boxShadow: '0px 11px 10px black'
        }}
      >
        <h1
          css={{
            position: 'absolute',
            left: '11vw',
            top: '3.2rem',
            fontSize: '1.7rem',
            width: '9rem',
            borderBottom: '2px groove black',
            borderRight: '2px groove black',
            textAlign: 'center'
          }}
        >
          This Thing I Did
        </h1>
        {children()}
      </div>
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const layoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
