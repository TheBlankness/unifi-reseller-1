import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
//import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ style ,children}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "splash.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          
          fluid={imageData}
          backgroundColor={`#040e18`}
          
          style={style}
        >
         {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection