import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import './index.css'
import boards from '../res/images/boards.jpg'
import Footer from '../components/Footer/index'
import Header from '../components/Header/index'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title}>
      <html lang='en' />
    </Helmet>
    <Header />
    <div
      className='boards'
      css={{
        margin: '0 auto',
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '@media(min-width: 400px)': {
          backgroundImage: `url(${boards})`,
          backgroundRepeat: 'repeat',
          backgroundColor: 'tan'
        }
      }}
    >
      <div
        className='page-contents-container'
        css={{

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          backgroundColor: '#dddddd',

          width: '80vw',
          minHeight: 'calc(100vh - 64px - 44.1px)',

          '@media(max-width: 400px)': {
            width: '100%',
            minHeight: 'calc(100vh - 64px - 86.6px)'
          }

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
