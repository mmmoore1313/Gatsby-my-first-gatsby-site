import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Two dogs sharing a bed with a view"
        src="../images/dogsonabed.jpg"
      />
    </Layout>
  )
}

export default IndexPage
