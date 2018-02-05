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
    <Header />
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
          minHeight: 'calc(100vh - 6.5rem)',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          backgroundColor: '#dddddd'
          // boxShadow: '0px 11px 10px black'
        }}
      >
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
