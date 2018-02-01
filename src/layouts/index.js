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
        padding: '0px 1.45rem',
        paddingTop: 0,
        backgroundImage: `url(${boards})`,
        backgroundRepeat: 'round',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        className='page-content'
        style={{
          margin: 0,
          padding: '1rem',
          maxWidth: '60vw',
          height: 'calc(100vh - 8rem)',
          backgroundColor: 'tan',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
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
