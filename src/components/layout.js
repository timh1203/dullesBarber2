import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header.js'
import Notification from '../components/Notification'
import Navigation from '../components/Navigation'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        },
        bannerImage: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        logoImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Wrapper>
          <Header
            bannerImage={data.bannerImage.childImageSharp.fluid}
            logoImage={data.logoImage.childImageSharp.fluid}
          />
          <Notification />
          <Navigation />
          {children}
        </Wrapper>

        <GlobalStyles />
      </>
    )}
  />
)

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: inherit;
    vertical-align: baseline;
  }
  html, body{
    /* max-width: 1024px; */
    /* width: 100%; */
    /* margin: 0 auto; */
    font-size: 62.5%;
    text-align: center;
    font-family: 'Quicksand';
    background: #f2f2f2;
  }
  h1 {
    font-size: 3.6rem;
    font-family: 'Lato';
  }
  h2 {
    font-size: 3.4rem;
  }
  h3 {
    font-size: 3.2rem;
  }
  h4 {
    font-size: 2.8rem;
  }
  h5 {
    font-size: 2.4rem;
  }
  h6 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  section {
    margin-top: 5rem;
  }
`
const Wrapper = styled.div`
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
