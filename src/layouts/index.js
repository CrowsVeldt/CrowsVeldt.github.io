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
      style={{
        margin: '0 auto',
        width: '100vw',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        backgroundImage: `url(${boards})`,
        backgroundRepeat: 'round'
      }}
    >
      <div
        className='page-content'
        style={{
          margin: 0,
          width: '80vw',
          minHeight: 'calc(100vh - 8rem)',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          backgroundColor: 'tan',
          boxShadow: '0 0 10px black'
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
