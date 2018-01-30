import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import boards from '../res/boards.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
    />
    <Header
      title={data.site.siteMetadata.title}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.45rem',
        paddingTop: 0,
        backgroundImage: `url(${boards})`,
        backgroundRepeat: 'round'
      }}
    >
      {children()}
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
